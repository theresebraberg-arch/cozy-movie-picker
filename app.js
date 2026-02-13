const defaultMovies = [
    // Block 1 + 2 + 3 (sammanlagt – med år där jag är säker, annars Okänt)

    "Interstellar — Sci-Fi, Drama — 2014",
    "Inception — Sci-Fi, Thriller — 2010",
    "The Matrix — Sci-Fi, Action — 1999",
    "Blade Runner 2049 — Sci-Fi, Drama — 2017",
    "Arrival — Sci-Fi, Drama — 2016",
    "Dune (2021) — Sci-Fi, Adventure — 2021",
    "Ex Machina — Sci-Fi, Thriller — 2014",
    "Annihilation — Sci-Fi, Skräck — 2018",
    "The Martian — Sci-Fi, Drama — 2015",
    "Tenet — Sci-Fi, Action — 2020",
    "Looper — Sci-Fi, Thriller — 2012",
    "Minority Report — Sci-Fi, Thriller — 2002",
    "Children of Men — Sci-Fi, Drama — 2006",
    "District 9 — Sci-Fi, Action — 2009",
    "Edge of Tomorrow — Sci-Fi, Action — 2014",
    "Avatar — Sci-Fi, Adventure — 2009",
    "Ready Player One — Sci-Fi, Adventure — 2018",
    "Gravity — Sci-Fi, Thriller — 2013",
    "Sunshine — Sci-Fi, Thriller — 2007",
    "Ad Astra — Sci-Fi, Drama — 2019",

    "The Lord of the Rings: The Fellowship of the Ring — Fantasy, Adventure — 2001",
    "The Lord of the Rings: The Two Towers — Fantasy, Adventure — 2002",
    "The Lord of the Rings: The Return of the King — Fantasy, Adventure — 2003",
    "Harry Potter and the Prisoner of Azkaban — Fantasy, Adventure — 2004",
    "Harry Potter and the Goblet of Fire — Fantasy, Adventure — 2005",
    "The Hobbit: An Unexpected Journey — Fantasy, Adventure — 2012",
    "Pan's Labyrinth — Fantasy, Drama — 2006",
    "Stardust — Fantasy, Romance — 2007",
    "The Shape of Water — Fantasy, Drama — 2017",
    "Pirates of the Caribbean: The Curse of the Black Pearl — Adventure, Fantasy — 2003",
    "The Princess Bride — Fantasy, Adventure — 1987",
    "The Hunger Games — Sci-Fi, Adventure — 2012",
    "The Hunger Games: Catching Fire — Sci-Fi, Adventure — 2013",
    "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe — Fantasy, Adventure — 2005",

    "Gone Girl — Thriller, Mystery — 2014",
    "Prisoners — Thriller, Crime — 2013",
    "Se7en — Thriller, Crime — 1995",
    "Zodiac — Thriller, Crime — 2007",
    "Nightcrawler — Thriller, Drama — 2014",
    "Shutter Island — Thriller, Mystery — 2010",
    "The Silence of the Lambs — Thriller, Crime — 1991",
    "The Prestige — Thriller, Mystery — 2006",
    "The Sixth Sense — Thriller, Drama — 1999",
    "Black Swan — Thriller, Drama — 2010",
    "The Menu — Thriller, Dark Comedy — 2022",
    "Mystic River — Crime, Drama — 2003",
    "No Country for Old Men — Crime, Thriller — 2007",
    "The Usual Suspects — Crime, Mystery — 1995",
    "Searching — Thriller, Mystery — 2018",
    "The Girl with the Dragon Tattoo (2011) — Thriller, Crime — 2011",
    "American Psycho — Thriller, Drama — 2000",
    "The Departed — Crime, Thriller — 2006",
    "Sicario — Crime, Thriller — 2015",
    "Wind River — Crime, Thriller — 2017",

    "The Conjuring — Skräck — 2013",
    "The Conjuring 2 — Skräck — 2016",
    "Hereditary — Skräck, Drama — 2018",
    "The Babadook — Skräck, Psykologisk — 2014",
    "It (2017) — Skräck — 2017",
    "A Quiet Place — Skräck, Thriller — 2018",
    "The Witch — Skräck — 2015",
    "Get Out — Skräck, Thriller — 2017",
    "Sinister — Skräck — 2012",
    "The Cabin in the Woods — Skräck, Komedi — 2012",
    "The Black Phone — Skräck, Thriller — 2021",
    "Smile — Skräck — 2022",
    "Barbarian — Skräck — 2022",
    "The Descent — Skräck — 2005",
    "The Ring — Skräck, Thriller — 2002",
    "Midsommar — Skräck, Drama — 2019",
    "The Autopsy of Jane Doe — Skräck, Thriller — 2016",
    "The Nun — Skräck — 2018",
    "The Invisible Man (2020) — Thriller, Skräck — 2020",

    "Pride & Prejudice (2005) — Romance, Drama — 2005",
    "The Notebook — Romance, Drama — 2004",
    "La La Land — Romance, Drama, Musik — 2016",
    "The Proposal — Romance, Komedi — 2009",
    "Notting Hill — Romance, Komedi — 1999",
    "How to Lose a Guy in 10 Days — Romance, Komedi — 2003",
    "Love Actually — Romance, Feelgood — 2003",
    "The Holiday — Romance, Feelgood — 2006",
    "About Time — Romance, Fantasy — 2013",
    "Me Before You — Romance, Drama — 2016",
    "Call Me by Your Name — Romance, Drama — 2017",
    "Before Sunrise — Romance, Drama — 1995",
    "Before Sunset — Romance, Drama — 2004",
    "Titanic — Drama, Romance — 1997",
    "The Fault in Our Stars — Romance, Drama — 2014",
    "Crazy Rich Asians — Romance, Komedi — 2018",
    "10 Things I Hate About You — Romance, Komedi — 1999",
    "The Time Traveler's Wife — Romance, Drama — 2009",
    "Sleepless in Seattle — Romance, Komedi — 1993",
    "You've Got Mail — Romance, Komedi — 1998",

    "Gladiator — Action, Drama — 2000",
    "Top Gun: Maverick — Action, Drama — 2022",
    "Mad Max: Fury Road — Action, Adventure — 2015",
    "The Dark Knight — Action, Crime — 2008",
    "John Wick — Action — 2014",
    "Casino Royale — Action, Thriller — 2006",
    "Skyfall — Action, Thriller — 2012",
    "Kill Bill: Vol. 1 — Action — 2003",
    "Kill Bill: Vol. 2 — Action — 2004",
    "Mission: Impossible – Fallout — Action — 2018",
    "Die Hard — Action — 1988",
    "Taken — Action, Thriller — 2008",
    "The Equalizer — Action — 2014",
    "The Bourne Identity — Action, Thriller — 2002",
    "The Avengers — Action, Sci-Fi — 2012",
    "Heat — Crime, Action — 1995",
    "300 — Action — 2006",
    "Rush — Drama, Sport — 2013",
    "The Patriot — Action, Drama — 2000",

    "The Shawshank Redemption — Drama — 1994",
    "Forrest Gump — Drama, Romance — 1994",
    "Good Will Hunting — Drama — 1997",
    "The Green Mile — Drama, Fantasy — 1999",
    "Little Women (2019) — Drama, Romance — 2019",
    "The Social Network — Drama — 2010",
    "Whiplash — Drama — 2014",
    "Joker — Drama, Thriller — 2019",
    "A Beautiful Mind — Drama — 2001",
    "The Revenant — Drama, Adventure — 2015",
    "12 Years a Slave — Drama — 2013",
    "The Favourite — Drama — 2018",
    "Manchester by the Sea — Drama — 2016",
    "The King's Speech — Drama — 2010",
    "The Imitation Game — Drama — 2014",
    "The Pianist — Drama — 2002",
    "Marriage Story — Drama — 2019",
    "The Help — Drama — 2011",
    "Room — Drama — 2015",
    "The Theory of Everything — Drama, Romance — 2014",

    // Block 2 extras (år okänt där jag inte är 100% säker)
    "The Grand Budapest Hotel — Komedi, Drama — 2014",
    "Mean Girls — Komedi — 2004",
    "Superbad — Komedi — 2007",
    "Bridesmaids — Komedi — 2011",
    "The Hangover — Komedi — 2009",
    "The Devil Wears Prada — Komedi, Drama — 2006",
    "Legally Blonde — Komedi — 2001",
    "Clueless — Komedi — 1995",
    "Pitch Perfect — Komedi, Musik — 2012",
    "Game Night — Komedi, Thriller — 2018",
    "The Intern — Komedi, Drama — 2015",
    "Easy A — Komedi — 2010",
    "Booksmart — Komedi — 2019",
    "The Nice Guys — Komedi, Crime — 2016",
    "Hot Fuzz — Komedi, Action — 2007",
    "Step Brothers — Komedi — 2008",
    "Anchorman — Komedi — 2004",
    "Groundhog Day — Komedi, Fantasy — 1993",

    "Fight Club — Drama, Thriller — 1999",
    "Memento — Thriller, Mystery — 2000",
    "Donnie Darko — Sci-Fi, Drama — 2001",
    "Mulholland Drive — Mystery, Drama — 2001",
    "Oldboy — Thriller, Drama — 2003",
    "The Lighthouse — Drama, Psykologisk — 2019",
    "Coherence — Sci-Fi, Thriller — 2013",
    "Enemy — Thriller, Drama — 2013",
    "The Machinist — Thriller — 2004",
    "Predestination — Sci-Fi, Thriller — 2014",
    "The Platform — Thriller, Sci-Fi — 2019",

    // Block 3 + animation
    "Catch Me If You Can — Crime, Drama — 2002",
    "Goodfellas — Crime, Drama — 1990",
    "The Wolf of Wall Street — Crime, Drama — 2013",
    "Scarface — Crime, Drama — 1983",
    "Drive — Crime, Drama — 2011",
    "American Hustle — Crime, Drama — 2013",
    "The Town — Crime, Thriller — 2010",
    "Collateral — Crime, Thriller — 2004",
    "Training Day — Crime, Drama — 2001",
    "Casino — Crime, Drama — 1995",

    "Before Midnight — Romance, Drama — 2013",
    "The Vow — Romance, Drama — 2012",
    "Letters to Juliet — Romance — 2010",
    "The Wedding Planner — Romance, Komedi — 2001",
    "27 Dresses — Romance, Komedi — 2008",
    "Midnight in Paris — Romance, Fantasy — 2011",
    "Julie & Julia — Drama, Komedi — 2009",
    "Eat Pray Love — Drama, Romance — 2010",
    "Brooklyn — Romance, Drama — 2015",

    "Spirited Away — Animation, Fantasy — 2001",
    "Princess Mononoke — Animation, Fantasy — 1997",
    "Howl's Moving Castle — Animation, Fantasy — 2004",
    "Your Name — Animation, Romance — 2016",
    "Frozen — Animation, Fantasy — 2013",
    "Moana — Animation, Adventure — 2016",
    "Inside Out — Animation, Drama — 2015",
    "Coco — Animation, Drama — 2017",
    "Up — Animation, Drama — 2009",
    "Toy Story — Animation, Komedi — 1995",
    "Toy Story 3 — Animation, Drama — 2010",
    "Shrek — Animation, Komedi — 2001",
    "The Lion King (1994) — Animation, Drama — 1994",
    "The Lion King (2019) — Animation, Drama — 2019",
    "Zootopia — Animation, Komedi — 2016"
  ];

  const pickBtn = document.getElementById("pickBtn");
  const rerollBtn = document.getElementById("rerollBtn");
  const slip = document.getElementById("slip");
  const titleEl = document.getElementById("movieTitle");
  const noteEl = document.getElementById("movieNote");
  const timeStamp = document.getElementById("timeStamp");
  const countInfo = document.getElementById("countInfo");
  const genrePill = document.getElementById("genrePill");
  const yearPill = document.getElementById("yearPill");
  const modeInfo = document.getElementById("modeInfo");
  const input = document.getElementById("movieInput");
  const statusEl = document.getElementById("status");
  const burst = document.getElementById("burst");
  const glitterField = document.getElementById("glitterField");
  const genreChips = document.getElementById("genreChips");

  input.value = defaultMovies.join("\n");

  // Ambient glitter
  (function makeGlitter(){
    const stars = 18;
    for(let i=0;i<stars;i++){
      const s = document.createElement("div");
      s.className = "glitterStar";
      s.style.left = (5 + Math.random()*90) + "%";
      s.style.top  = (8 + Math.random()*84) + "%";
      s.style.animationDelay = (Math.random()*2.6) + "s";
      const size = (5 + Math.random()*4);
      s.style.width = size + "px";
      s.style.height = size + "px";
      glitterField.appendChild(s);
    }
  })();

  // Parse: "Title — Genre1, Genre2 — Year"
  function parseLine(line){
    const raw = line.trim();
    if(!raw) return null;

    // support separators: " — " or " - " or " | "
    let parts = raw.split(" — ");
    if(parts.length < 2) parts = raw.split(" - ");
    if(parts.length < 2) parts = raw.split(" | ");

    const title = (parts[0] || "").trim() || "Okänd titel";
    const genreRaw = (parts[1] || "").trim();
    const yearRaw = (parts[2] || "").trim();

    const genres = genreRaw
      ? genreRaw.split(",").map(g => g.trim()).filter(Boolean)
      : ["Okänd"];

    const year = (yearRaw && /^\d{4}$/.test(yearRaw)) ? yearRaw : (yearRaw ? yearRaw : "Okänt");

    return { title, genres, genreText: genres.join(", "), year };
  }

  function getMoviesFromInput(){
    return input.value
      .split("\n")
      .map(parseLine)
      .filter(Boolean);
  }

  function normalizeGenre(g){ return g.trim().toLowerCase(); }

  let selectedGenre = "__ALL__";

  function buildGenreChips(){
    const movies = getMoviesFromInput();
    const set = new Map();
    for(const m of movies){
      for(const g of m.genres){
        const n = normalizeGenre(g);
        if(!set.has(n)) set.set(n, g.trim());
      }
    }

    const genres = Array.from(set.entries())
      .map(([norm, disp]) => ({ norm, disp }))
      .sort((a,b) => a.disp.localeCompare(b.disp, "sv"));

    genreChips.innerHTML = "";

    const randomChip = document.createElement("div");
    randomChip.className = "chip" + (selectedGenre === "__ALL__" ? " active" : "");
    randomChip.textContent = "✨ Random";
    randomChip.onclick = () => { selectedGenre = "__ALL__"; buildGenreChips(); };
    genreChips.appendChild(randomChip);

    for(const g of genres){
      const chip = document.createElement("div");
      chip.className = "chip" + (selectedGenre === g.norm ? " active" : "");
      chip.textContent = g.disp;
      chip.onclick = () => { selectedGenre = g.norm; buildGenreChips(); };
      genreChips.appendChild(chip);
    }
  }

  input.addEventListener("input", () => {
    const movies = getMoviesFromInput();
    const existing = new Set();
    movies.forEach(m => m.genres.forEach(g => existing.add(normalizeGenre(g))));
    if(selectedGenre !== "__ALL__" && !existing.has(selectedGenre)){
      selectedGenre = "__ALL__";
    }
    buildGenreChips();
  });

  function prettyTime(){
    const d = new Date();
    const hh = String(d.getHours()).padStart(2,"0");
    const mm = String(d.getMinutes()).padStart(2,"0");
    return `${hh}:${mm}`;
  }

  function typeText(el, text){
    return new Promise(resolve => {
      el.innerHTML = "";
      let i = 0;
      const caret = document.createElement("span");
      caret.className = "caret";
      el.appendChild(caret);

      const tick = () => {
        caret.remove();
        el.textContent = text.slice(0, i);
        el.appendChild(caret);
        i++;
        if(i <= text.length){
          setTimeout(tick, 22 + Math.random()*18);
        } else {
          caret.remove();
          resolve();
        }
      };
      tick();
    });
  }

  function burstGlitterAndPopcorn(){
    burst.innerHTML = "";
    const popcorn = 26;
    const stars  = 18;
    const total  = popcorn + stars;

    for(let i=0;i<total;i++){
      const p = document.createElement("i");
      const isStar = i >= popcorn;
      p.className = isStar ? "star" : "pop";

      const left = Math.random()*100;
      const delay = Math.random()*120;
      const drift = (Math.random()*240 - 120);
      const size = isStar ? (6 + Math.random()*6) : (10 + Math.random()*10);

      p.style.left = left + "%";
      p.style.animationDelay = delay + "ms";
      p.style.transform = `translateX(${drift}px) rotate(${Math.random()*220}deg)`;
      p.style.width = size + "px";
      p.style.height = isStar ? size + "px" : (size*0.8) + "px";
      burst.appendChild(p);
    }
    setTimeout(()=> burst.innerHTML="", 1100);
  }

  let lastPickKey = null;

  function filterMoviesBySelectedGenre(movies){
    if(selectedGenre === "__ALL__") return movies;
    return movies.filter(m => m.genres.some(g => normalizeGenre(g) === selectedGenre));
  }

  async function pickMovie(){
    const allMovies = getMoviesFromInput();
    if(allMovies.length === 0){
      statusEl.textContent = "Lägg in minst 1 film i listan ✍️";
      return;
    }

    const pool = filterMoviesBySelectedGenre(allMovies);
    if(pool.length === 0){
      statusEl.textContent = "Inga filmer hittades i den genren 😅 (byt genre eller lägg till fler)";
      return;
    }

    let pick = pool[Math.floor(Math.random() * pool.length)];
    const pickKey = pick.title + "||" + pick.genreText + "||" + pick.year;
    if(pool.length > 1 && pickKey === lastPickKey){
      pick = pool[Math.floor(Math.random() * pool.length)];
    }
    lastPickKey = pickKey;

    slip.classList.remove("show");
    void slip.offsetWidth;
    slip.classList.add("show");

    burstGlitterAndPopcorn();
    statusEl.textContent = "Poppar upp en film… 🍿";

    countInfo.textContent = `🎞 ${pool.length} av ${allMovies.length}`;
    timeStamp.textContent = `🕯 ${prettyTime()}`;
    genrePill.textContent = `Genre: ${pick.genreText}`;
    yearPill.textContent = `År: ${pick.year}`;

    if(selectedGenre === "__ALL__"){
      modeInfo.textContent = "🎬 Random";
    } else {
      const activeChip = genreChips.querySelector(".chip.active");
      modeInfo.textContent = activeChip ? `🎭 ${activeChip.textContent}` : "🎭 Genre";
    }

    noteEl.textContent = "Okej… du behöver inte välja. Du bara trycker play 😌";
    await typeText(titleEl, pick.title);

    statusEl.textContent = "Klart ✨";
  }

  // Initial state
  titleEl.textContent = "";
  noteEl.textContent = "";
  genrePill.textContent = "Genre: …";
  yearPill.textContent = "År: …";
  modeInfo.textContent = "🎬 Random";

  pickBtn.addEventListener("click", pickMovie);
  rerollBtn.addEventListener("click", pickMovie);

  buildGenreChips();