const poemLines = [
  ['A Letter Left in Lavender', 'Clara Whitcombe', 'I found your name among the lavender, / folded where the afternoon had been.', 'Romance', 'A letter is discovered long after its intended season, fragrant with a love that never learned to leave.'],
  ['The Clockmaker’s Daughter', 'Eliza Marlowe', 'At midnight, every little clock / confessed the hour it kept from me.', 'Gothic', 'In a workshop of stopped clocks, a daughter hears a mechanical chorus recounting a family secret.'],
  ['After the Rain at Kew', 'Henry Vale', 'The roses wore their crystal grief / and every path became a mirror.', 'Nature', 'A brief rain transforms the garden into a place where even sorrow catches the light.'],
  ['A Sea-Song for November', 'Ada Fenwick', 'The sea keeps calling us by names / it learned before we were born.', 'Melancholy', 'A wind-torn hymn for those who stand at the edge of winter and listen to its old languages.'],
  ['At the Window, Dusk', 'M. R. Ashcroft', 'One candle, one blue hour, one face / remembered by the glass.', 'Romance', 'Dusk turns a familiar window into a small theatre of absence and desire.'],
  ['The Hothouse Orchid', 'Beatrice Lane', 'She blooms where no wild bee would dare, / in fevered glass and borrowed light.', 'Nature', 'An orchid’s precarious splendour becomes a portrait of beauty sheltered too carefully.'],
  ['Elegy for a Paper Bird', 'Thomas Wren', 'Its folded wings outlived the hand / that set it on the river.', 'Melancholy', 'A child’s paper boat drifts into an adult meditation on tenderness and time.'],
  ['The Red Room', 'Isobel Grey', 'The door was painted once with blood— / or so the village women said.', 'Gothic', 'A newlywed confronts the story behind the room no one in the house will enter.'],
  ['Midsummer in the Library', 'Julian North', 'Dust rose like gold from sleeping books / when you unpinned your hair.', 'Romance', 'A private, sunlit confession hidden amid old editions and the smell of binding glue.'],
  ['Foxglove', 'Nora Bell', 'The foxgloves tilt their bell-like heads / to hear the earth confess.', 'Nature', 'A woodland prayer in which flowers become patient listeners to the ground.'],
  ['The Unlit Stair', 'Cecily Rowe', 'I climbed toward a house of stars / and found the stairs still waiting.', 'Gothic', 'The echoing staircase of a vanished house asks whether memory can make a place inhabited.'],
  ['Portrait of a Woman Reading', 'Evelyn March', 'Her silence had a margin wide enough / for all the world to enter.', 'Portrait', 'A study of a reader whose composed stillness holds an entire invisible life.'],
  ['A Cabinet of Shells', 'Francis Doyle', 'Each shell contained a smaller sea, / each sea a door I could not open.', 'Nature', 'A childhood collection opens into the immeasurable wonder of miniature worlds.'],
  ['Winter’s Last Rose', 'Lydia Sterne', 'It kept one petal warm beneath / the blue strictness of the frost.', 'Melancholy', 'A lone rose makes a quiet argument for endurance at the turn of spring.'],
  ['The Waltz at Ashdown Hall', 'Arthur Leigh', 'We danced until the chandeliers / mistook us for their candles.', 'Romance', 'One ecstatic dance in a fading house suspends the dancers briefly outside of time.'],
  ['Nocturne with Ravens', 'Rosamund Vale', 'Three ravens crossed the moon like ink / spilling from an unseen pen.', 'Gothic', 'A moonlit field becomes an omen-filled page in this dark little nocturne.'],
  ['A Garden of Small Mercies', 'Dorothy Crane', 'The sparrow took the offered crumb / as if it were a crown.', 'Nature', 'A gentle inventory of small kindnesses noticed over one ordinary morning.'],
  ['The Blue Teacup', 'Hugh Carlisle', 'A chip along its rim is where / the old conversation enters.', 'Memory', 'An heirloom cup carries the intimacy of voices that have long since gone quiet.'],
  ['Sonnet for an Empty Theatre', 'Marian Blythe', 'The curtain held its breath above / a kingdom made of dust.', 'Gothic', 'The deserted stage becomes a spellbinding chamber where past applause still gathers.'],
  ['The Evening Post', 'Gerald Finch', 'By six, the ink had cooled to blue / and settled over every street.', 'City', 'A city evening, a newsboy, and a letter that arrives just when it is too late.'],
];

export const poems = poemLines.map(([title, author, excerpt, , body], id) => ({ id, title, author, excerpt, body: `${body}\n\n${excerpt}\n\nAnd so the page, having kept its own counsel all day, opens at last to the reader’s hand. The world beyond it softens into lamplight, and the unspoken thing is permitted a name.` }));

export const prose = [
  { title: 'The House That Kept the Weather', author: 'Amelia Hart', type: 'Short Story', excerpt: 'At Briar House, every room remembered a different storm.', body: 'When Elinor returned to Briar House, the rain was waiting in the blue bedroom exactly where she had left it. In the years since, the house had gathered weather as other houses gathered dust.' },
  { title: 'On Reading by Lamplight', author: 'Benedict Shore', type: 'Essay', excerpt: 'A lamp does not illuminate a room so much as appoint a small republic of attention.', body: 'There is an ethics to the circle of lamplight: one enters it with a book, a question, perhaps a little sorrow, and agrees to see only what deserves seeing.' },
  { title: 'The Night Train to Bath', author: 'Florence B. Wells', type: 'Short Story', excerpt: 'The ticket in my glove bore a destination I had never chosen.', body: 'At half past eleven, the porter handed Clara a ticket in a handwriting that looked inconveniently like her father’s. The train was already breathing steam against the platform.' },
  { title: 'A Small Defence of Daydreaming', author: 'Edmund Vane', type: 'Essay', excerpt: 'Idleness is often simply the mind putting the furniture of experience in a better order.', body: 'The daydream has been falsely accused of stealing time. Its real work is stranger and more generous: it gives time its inner rooms.' },
  { title: 'The Conservatory Key', author: 'Mira Dallow', type: 'Short Story', excerpt: 'My aunt’s key opened a door which led, inconveniently, to 1897.', body: 'I expected the conservatory to smell of wet earth and lemons. Instead, on turning the key, I walked into an afternoon so complete it still had birdsong inside it.' },
  { title: 'The Art of Keeping Letters', author: 'Helena Royston', type: 'Essay', excerpt: 'Letters make archivists of the tender and detectives of the bereft.', body: 'A letter is never merely written. It is folded, carried, misplaced, reread, and perhaps, after many years, found beneath a ribbon in a drawer.' },
];

export const artworks = [
  { title: 'Study for an Unseen Angel', artist: 'Aurelia Finch', image: '/assets/Angel.png', caption: 'Charcoal, wash, and a little gold dust on paper. A private study in longing and flight.' },
  { title: 'The Cloud Atlas', artist: 'Dorian Bell', image: '/assets/cloud.png', caption: 'A cinematic arrangement of storm-light and blue distance, preserved like a dream.' },
  { title: 'The Old Conservatory', artist: 'Margot Vale', image: '/assets/Building.png', caption: 'An imagined facade where every window contains a season of its own.' },
  { title: 'Ex Libris: After the Storm', artist: 'Rosalind Crane', image: '/assets/ex-libris.png', caption: 'A bookplate made for a reader who trusts the weather and the printed word.' },
  { title: 'An Angel in the Margins', artist: 'Hugh Aster', image: '/assets/angel-cloud-exlibris.png', caption: 'A tall, devotional bookplate of clouds, wings, and the tender architecture of memory.' },
];

export const films = [
  { title: 'Wuthering Heights', year: '1939', director: 'William Wyler', starring: 'Merle Oberon, Laurence Olivier', thumbnail: '', trailerUrl: '', featureUrl: '', synopsis: 'Across the moors, the fierce bond between Catherine Earnshaw and Heathcliff bends love into a force of nature. A romantic tragedy of class, devotion, and the ghosts we make of one another.' },
  { title: 'Jane Eyre', year: '1943', director: 'Robert Stevenson', starring: 'Joan Fontaine, Orson Welles', thumbnail: '', trailerUrl: '', featureUrl: '', synopsis: 'An orphaned governess arrives at Thornfield Hall and finds a fiercely guarded heart, a mystery in the attic, and the courage to insist upon her own freedom.' },
];
