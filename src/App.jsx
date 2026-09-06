import { useEffect, useMemo, useRef, useState } from 'react';
import { artworks, films, poems, prose } from './data/content';

const nav = ['Literature', 'Prose', 'Visual Arts', 'Theatre', 'About'];

function useModal(item, setItem) {
  const closeButton = useRef(null);
  useEffect(() => {
    if (!item) return;
    const previous = document.activeElement;
    const key = e => { if (e.key === 'Escape') setItem(null); };
    document.addEventListener('keydown', key);
    setTimeout(() => closeButton.current?.focus(), 60);
    return () => { document.removeEventListener('keydown', key); previous?.focus?.(); };
  }, [item, setItem]);
  return closeButton;
}

function FilmPlayer({ film, mode }) {
  const source = mode === 'trailer' ? film.trailerUrl : film.featureUrl;
  const label = mode === 'trailer' ? 'Trailer' : 'Feature presentation';
  if (source) return <video className="film-player" controls autoPlay={mode === 'trailer'} poster={film.thumbnail || undefined} src={source}>Your browser cannot play this video.</video>;
  return <div className="film-player empty-player" aria-label={`${label} placeholder`}><span>▶</span><p>{label} ready for media</p><small>Add a {mode === 'trailer' ? 'trailerUrl' : 'featureUrl'} in the films collection to enable playback.</small></div>;
}

function Modal({ item, setItem, kind, index, setIndex }) {
  const closeButton = useModal(item, setItem);
  if (!item) return null;
  const isArt = kind === 'art';
  const hasCarousel = isArt && typeof index === 'number';
  const move = amount => setIndex((index + amount + artworks.length) % artworks.length);
  return <div className="modal-backdrop" onMouseDown={e => e.target === e.currentTarget && setItem(null)}>
    <section className={`modal ${kind}`} role="dialog" aria-modal="true" aria-label={item.title}>
      <button ref={closeButton} className="modal-close" onClick={() => setItem(null)} aria-label="Close details">×</button>
      {isArt && <img className="modal-art" src={item.image} alt={item.title} />}
      {kind === 'film' && <FilmPlayer film={item} mode={item.view || 'program'} />}
      <div className="modal-copy">
        <p className="eyebrow">{isArt ? item.artist : kind === 'film' ? `${item.year} · ${item.director}` : kind === 'prose' ? `${item.author} · ${item.type}` : item.author}</p>
        <h2>{kind === 'film' && item.view === 'trailer' ? `${item.title} — Trailer` : item.title}</h2>
        <p className="modal-body">{item.body || item.caption || item.synopsis}</p>
        {kind === 'film' && <p className="credits"><b>Starring</b> {item.starring}</p>}
      </div>
      {hasCarousel && <div className="modal-nav"><button onClick={() => move(-1)} aria-label="Previous artwork">← Previous</button><span>{index + 1} / {artworks.length}</span><button onClick={() => move(1)} aria-label="Next artwork">Next →</button></div>}
    </section>
  </div>;
}

function SectionTitle({ overline, title, text }) { return <header className="section-heading reveal"><p className="eyebrow">{overline}</p><h2>{title}</h2>{text && <p>{text}</p>}<img src="/assets/divider-brown.png" alt="" /></header>; }

function Hero({ active }) { return <section className="hero" id="home">
  <img className="hero-curtain left" src="/assets/curtain-red.png" alt="" /><img className="hero-curtain right" src="/assets/curtain-red.png" alt="" />
  <img className="hero-flower" src="/assets/floral-spray.png" alt="" />
  <div className="hero-center"><p className="hero-kicker">Established in the softest hour</p><h1>Tapestry</h1><p className="hero-subtitle">A literary salon for ink-stained hearts</p><img className="hero-illustration" src="/assets/hero-illustration.png?v=2" alt="An ornate Victorian book illustration" /><a href="#literature" className="wax-button">Enter the salon <span>→</span></a></div>
</section>; }

function Literature({ onOpen }) {
 const [query, setQuery] = useState(''); const [showAll, setShowAll] = useState(false);
 const filtered = useMemo(() => poems.filter(p => `${p.title} ${p.author} ${p.excerpt}`.toLowerCase().includes(query.toLowerCase())), [query]);
 const visiblePoems = query || showAll ? filtered : filtered.slice(0, 8);
 return <section id="literature" className="paper-section"><SectionTitle overline="The Poetry Cabinet" title="Literature" text="Twenty small worlds, written for the pocket of your evening." />
  <div className="section-decor literature-decor" aria-hidden="true"><img className="decor-angel" src="/assets/Angel.png" alt="" /><img className="decor-cloud" src="/assets/cloud.png" alt="" /><img className="decor-bookplate" src="/assets/ex-libris.png" alt="" /></div>
  <div className="filter-bar reveal"><label className="search"><span>⌕</span><input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search the collection" aria-label="Search poems" /></label></div>
  <p className="result-count">{query || showAll ? `${filtered.length} ${filtered.length === 1 ? 'piece' : 'pieces'}` : `Showing ${visiblePoems.length} of ${filtered.length} pieces`} in the cabinet</p>
  <div className="poem-grid">{visiblePoems.map((poem, i) => <article className="poem-card reveal shown" style={{ '--n': i }} key={poem.id}><div><h3>{poem.title}</h3><p className="byline">by {poem.author}</p><blockquote>{poem.excerpt}</blockquote></div><button onClick={() => onOpen(poem)} className="read-more">Read more <span>→</span></button></article>)}</div>
  {!query && !showAll && filtered.length > visiblePoems.length && <div className="collection-action reveal shown"><button onClick={() => setShowAll(true)}>Read more poems <span>↓</span></button></div>}
  {!query && showAll && <div className="collection-action reveal shown"><button onClick={() => setShowAll(false)}>Show less poems <span>↑</span></button></div>}
 </section>;
}

function Prose({ onOpen }) { return <section id="prose" className="prose-section"><div className="section-decor prose-decor" aria-hidden="true"><img className="decor-building" src="/assets/Building.png" alt="" /><img className="decor-bookplate" src="/assets/ex-libris.png" alt="" /></div><SectionTitle overline="The Reading Room" title="Prose & Other Wanderings" text="Essays and stories for those inclined to stay awhile." />
 <div className="prose-grid">{prose.map((entry) => <article className="prose-card reveal" key={entry.title}><p className="card-tag">{entry.type}</p><h3>{entry.title}</h3><p className="byline">{entry.author}</p><p>{entry.excerpt}</p><button onClick={() => onOpen(entry)}>Open the pages <span>→</span></button></article>)}</div>
 </section>; }

function Arts({ onOpen }) { return <section id="visual-arts" className="arts-section"><SectionTitle overline="The Picture Gallery" title="Visual Arts" text="Five visions gathered from the visible and the imagined." /><div className="gallery">{artworks.map((art, i) => <button className={`art-card art-${i + 1} reveal`} onClick={() => onOpen(art, i)} key={art.title}><span className="art-frame"><img src={art.image} alt={art.title} /></span><span className="art-meta"><b>{art.title}</b><i>{art.artist}</i></span></button>)}</div></section>; }

function FilmThumbnail({ film, onOpenTrailer }) {
 const preview = useRef(null);
 const startPreview = () => { if (preview.current) preview.current.play().catch(() => {}); };
 const stopPreview = () => { if (preview.current) { preview.current.pause(); preview.current.currentTime = 0; } };
 return <button className="film-thumbnail" onMouseEnter={startPreview} onMouseLeave={stopPreview} onFocus={startPreview} onBlur={stopPreview} onClick={onOpenTrailer} aria-label={`Play ${film.title} trailer`}>
   {film.thumbnail && <img src={film.thumbnail} alt="" />}{film.trailerUrl && <video ref={preview} muted loop playsInline preload="metadata" src={film.trailerUrl} />}{!film.thumbnail && !film.trailerUrl && <span className="thumbnail-placeholder">Thumbnail coming soon</span>}
   <span className="thumbnail-overlay"><span className="play-mark">▶</span><span>Play trailer</span></span>
 </button>;
}

function Theatre({ onOpen }) { return <section id="theatre" className="theatre-section"><img src="/assets/theatre-stage.png" className="stage" alt="" /><div className="theatre-content"><SectionTitle overline="The Midnight Matinée" title="Theatre" text="Two beloved rooms of the cinematic imagination." /><div className="film-group">{films.map(film => <article className="film-card reveal" key={film.title}><FilmThumbnail film={film} onOpenTrailer={() => onOpen(film, 'trailer')} /><p className="card-tag">{film.year} · Film</p><h3>{film.title}</h3><p className="byline">Directed by {film.director}</p><button onClick={() => onOpen(film, 'program')}>View programme <span>→</span></button></article>)}</div></div></section>; }

function About() { return <section id="about" className="about-section"><div className="section-decor about-decor" aria-hidden="true"><img className="decor-angel" src="/assets/angel-cloud-exlibris.png" alt="" /><img className="decor-cloud" src="/assets/cloud.png" alt="" /></div><SectionTitle overline="A Note from the Editor" title="About the Salon" /><div className="ink-wrap reveal"><img src="/assets/ink-drop.png" alt="" /><div className="ink-copy"><p>Tapestry is a small, imaginary salon for poems read twice, stories told softly, and artworks that linger in the mind like perfume.</p><p>We believe in the slow turning of pages, in the drama of a curtain opening, and in the private worlds a single sentence can unfurl.</p><span>Yours in ink &amp; wonder,<br /><b>The Editorial Circle</b></span></div></div></section>; }

function Footer() { return <footer><img src="/assets/floral-background.png" alt="" /><div className="footer-content"><a className="footer-brand" href="#home">Tapestry</a><nav>{nav.map(item => <a href={`#${item.toLowerCase().replaceAll(' ', '-')}`} key={item}>{item}</a>)}</nav><p>© 2026 Tapestry · Made for lingering</p></div></footer>; }

export default function App() {
 const [modal, setModal] = useState(null); const [artIndex, setArtIndex] = useState(0); const [loading, setLoading] = useState(true); const [active, setActive] = useState('');
 useEffect(() => { const timer = setTimeout(() => setLoading(false), 850); return () => clearTimeout(timer); }, []);
 useEffect(() => { const sections = document.querySelectorAll('section[id]'); const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55%' }); sections.forEach(s => observer.observe(s)); return () => observer.disconnect(); }, []);
 useEffect(() => { const observer = new IntersectionObserver(entries => entries.forEach(e => { e.isIntersecting ? e.target.classList.add('shown') : e.target.classList.remove('shown'); }), { threshold: .12 }); document.querySelectorAll('.reveal').forEach(e => observer.observe(e)); return () => observer.disconnect(); }, []);
 const openArt = (art, index) => { setArtIndex(index); setModal({ ...art, kind: 'art' }); };
 useEffect(() => { if (modal?.kind === 'art') setModal({ ...artworks[artIndex], kind: 'art' }); }, [artIndex]);
 return <><div className={`loader ${loading ? '' : 'gone'}`} aria-hidden="true"><p>Tapestry</p></div><header className="site-nav"><nav>{nav.map(item => { const id = item.toLowerCase().replaceAll(' ', '-'); return <a className={active === id ? 'active' : ''} href={`#${id}`} key={item}>{item}</a>; })}</nav></header><main><Hero active={active} /><Literature onOpen={p => setModal({ ...p, kind: 'poem' })} /><Prose onOpen={p => setModal({ ...p, kind: 'prose' })} /><Arts onOpen={openArt} /><Theatre onOpen={(film, view) => setModal({ ...film, kind: 'film', view })} /><About /></main><Footer /><Modal item={modal} setItem={setModal} kind={modal?.kind} index={artIndex} setIndex={setArtIndex} /></>;
}
