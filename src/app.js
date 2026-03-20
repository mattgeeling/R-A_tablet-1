const attractorScreen = document.querySelector("#attractor-screen");
const attractorStartButton = document.querySelector("#attractor-start");
const menuScreen = document.querySelector("#menu-screen");
const portraitScreen = document.querySelector("#portrait-screen");
const landscapeScreen = document.querySelector("#landscape-screen");
const sculptureScreen = document.querySelector("#sculpture-screen");
const portraitsButton = document.querySelector('[data-open-view="portraits"]');
const landscapesButton = document.querySelector('.panel-landscapes');
const sculptureButton = document.querySelector('[data-open-view="sculpture"]');
const portraitBackButton = document.querySelector("#portrait-back");
const portraitBackControl = document.querySelector(".portrait-control-back");
const portraitPrevButton = document.querySelector("#portrait-prev");
const portraitNextButton = document.querySelector("#portrait-next");
const portraitTextButton = document.querySelector(".portrait-control-text");
const landscapeBackButton = document.querySelector("#landscape-back");
const landscapeTextButton = document.querySelector(".landscape-control-text");
const landscapePrevPaintingButton = document.querySelector("#landscape-prev-painting");
const landscapeNextPaintingButton = document.querySelector("#landscape-next-painting");
const sculptureBackButton = document.querySelector("#sculpture-back");
const sculptureTextButton = document.querySelector(".sculpture-control-text");
const sculpturePrevButton = document.querySelector("#sculpture-prev");
const sculptureNextButton = document.querySelector("#sculpture-next");

const portraitTitle = document.querySelector("#portrait-title");
const portraitArtist = document.querySelector("#portrait-artist");
const portraitSummary = document.querySelector("#portrait-summary");
const portraitBody = document.querySelector("#portrait-body");
const portraitArtwork = document.querySelector("#portrait-artwork");
const portraitCount = document.querySelector("#portrait-count");
const portraitImageDots = document.querySelector("#portrait-image-dots");
const portraitCopy = document.querySelector(".portrait-copy");
const portraitTextFlow = document.querySelector(".portrait-text-flow");
const landscapeArtwork = document.querySelector("#landscape-artwork");
const landscapeArtworkWrap = document.querySelector(".landscape-artwork-wrap");
const landscapeTitle = document.querySelector("#landscape-title");
const landscapeArtist = document.querySelector("#landscape-artist");
const landscapeDate = document.querySelector("#landscape-date");
const landscapeBody = document.querySelector("#landscape-body");
const landscapeDotsWrap = document.querySelector(".landscape-dots");
const landscapeDots = Array.from(document.querySelectorAll(".landscape-dot"));
const sculptureTitle = document.querySelector("#sculpture-title");
const sculptureArtist = document.querySelector("#sculpture-artist");
const sculptureBody = document.querySelector("#sculpture-body");
const sculptureArtwork = document.querySelector("#sculpture-artwork");
const sculptureTextFlow = document.querySelector(".sculpture-text-flow");
const IDLE_TIMEOUT_MS = 90000;

const portraits = [
  {
    title: "David Martin\n(1737-1797)",
    artist: "John Balfour Hay of Leys",
    summary:
      "Oil on canvas, 18th century.\n\nWinner of the Challenge for the\nSilver Club in 1774, John Balfour Hay\nis depicted as a sporting gentleman, wearing his red golfing jacket.",
    body:
      "Known for depicting subjects \"with integrity in an honest natural style\", David Martin was born in Anstruther, Fife, and painted many figures of the Scottish Enlightenment. A portrait of Benjamin Franklin, painted by Martin when Franklin lived in London, is part of the White House collections.",
    artworkClass: "artwork-reference",
    artworkImages: ["./assets/images/paintings/1. Balfour Hay.JPG"],
  },
  {
    title: "Sir Francis Grant HRSA (1803-1878)",
    artist: "John Whyte Melville",
    preserveLineBreaks: true,
    summary:
      "Oil on canvas, 1874\n\nMajor George Whyte Melville\nOil on canvas, 1850s\n\n‘The Father of the Club’, John Whyte Melville was a Member for 67 years and elected Captain twice, in 1823 and 1883, dying just before assuming office a second time. He laid the Clubhouse foundation stone when construction began in 1853 and deputised for the Prince of Wales during his Captaincy ten years later.",
    body:
      "His son, the author Major George\nWhyte Melville, Captain in 1851,\nserved in the Crimean War. He died\nin a hunting accident in 1878 and\nthe fountain on Market Street,\nSt Andrews, was dedicated in\nhis memory.\n\nArtist Sir Francis Grant was elected a Member of the Club in 1823 and specialised in sporting and equestrian subjects. He was elected President of London's Royal Academy in 1866.",
    artworkClass: "artwork-image artwork-2",
    artworkImages: [
      "./assets/images/paintings/2JOHNW~1.JPG",
      "./assets/images/paintings/2.1 GW Melville.jpg",
    ],
  },
  {
    title: "John Pettie HRSA (1839-1893)",
    artist: "Henry Lamb",
    summary:
      "Oil on canvas, 1891\n\nWinner of the Club’s Royal Medal in 1878, Henry Lamb was Secretary of Royal Wimbledon and helped found Royal St George’s. Lamb is also credited with inventing the Bulger-faced driver in 1888, a feature in golf club design to this day.",
    body:
      "Edinburgh-born John Pettie’s first RSA exhibit, aged just 19, was <em>A Scene from the Fortunes of Nigel</em>, inspired by Walter Scott’s novel. A leader amongst fellow Scottish artists in London, Pettie was elected to the Royal Academy in 1874.",
    artworkClass: "artwork-image artwork-3",
    artworkImages: ["./assets/images/paintings/3 Henry Lamb.jpg"],
  },
  {
    title: "Sir George Reid PPRSA (1841-1913)",
    artist: "Tom Morris",
    preserveLineBreaks: true,
    summary:
      "Oil on canvas, 1903\n\n<em>‘You’ve got the checks on my\nbunnet a’ wrang!’</em> reacted Tom\nMorris to seeing his portrait\nfor the first time.",
    body:
      "Sir George Reid, President of\nthe Royal Scottish Academy\n1891-1902, was paid £250\nfor the commission. Reid\nsketched Morris during several\nsittings at his Edinburgh studio,\none of which is displayed in\nour exhibition. Can you see\nthe resemblance?\n\nReid’s portrait was exhibited at the\n1904 World Fair in St Louis, Missouri,\nthe 1911 International Fine Arts\nExhibition in Rome, and <em>The Art of\nGolf</em> touring exhibition by the\nNational Galleries of Scotland\nfrom 2012-2013.",
    artworkClass: "artwork-image artwork-4",
    artworkImages: ["./assets/images/paintings/4. Tom Morris.JPG"],
  },
  {
    title: "Sir James Guthrie PPRSA (1859-1930)",
    artist: "Field Marshall\nDouglas Haig",
    preserveLineBreaks: true,
    summary:
      "Oil on canvas, 1922\n\nField Marshall Douglas Haig,\nCommander of British Forces\nduring the First World War,\nbecame a Member of the Club\nin 1894 and was Captain in 1919.",
    body:
      "Sir James Guthrie, one of the\n‘Glasgow Boys’ group of artists,\nchose not to depict Haig as the\nglorious victor. He is seated,\nappearing exhausted, with a\nhaunted expression suggesting\nthe horrors of the war.\n\nThe Club received so many\nrequests to borrow the painting,\nthey decided in 1928 that “on no\naccount whatsoever would the\nportrait be allowed out of the Club\nagain.” When Guthrie, RSA President\nfrom 1902-1919, died in 1930,\nthe Club allowed the portrait to\nbe displayed in an exhibition of\nhis works the following year.",
    artworkClass: "artwork-image artwork-5",
    artworkImages: ["./assets/images/paintings/5. FM Haig.jpg"],
  },
  {
    title: "Sir William Hutchison PPRSA (1889-1970)",
    artist: "Andrew Kirkaldy",
    preserveLineBreaks: true,
    summary:
      "Oil on canvas, 1929\n\nAffectionately known as ‘Andra’,\nAndrew Kirkaldy was runner-up in\nThe Open three times and\nProfessional to the Club from\n1910-1934. Arriving at the Clubhouse\neveryday at 9am, Kirkaldy was paid £1\na week and 2 shillings six pence for\nevery round he played with Members.",
    body:
      "“One or two Club Members”\ncommissioned Sir William Hutchison\nto paint Kirkaldy’s portrait. Hutchison\nattended Edinburgh College of Art\nand was severely wounded during\nthe First World War. Recovering to\nresume his career, Hutchison was\ndirector of Glasgow School of Art\nfrom 1933-1943 and became\nPresident of the RSA in 1950.",
    artworkClass: "artwork-image artwork-6",
    artworkImages: ["./assets/images/paintings/6. Kirkaldy.jpg"],
  },
  {
    title: "Geoffrey Squire (1923-2012)",
    artist: "John Panton",
    summary:
      "Oil on canvas, 1995\n\nThe Club’s Honorary Professional from 1988-2006, John Panton retired shortly after his 90th birthday. During a distinguished career Panton won 39 professional tournaments, played in three Ryder Cups and finished fifth in The Open twice.",
    body:
      "Geoffrey Squire studied at Leeds School of Art, Ruskin School of Art at Oxford University, and Slade School of Art at University College, London. After serving in the armed forces during the Second World War, he began teaching at Glasgow School of Art, eventually becoming Senior Lecturer and serving as Governor from 1988-1990.",
    artworkClass: "artwork-image artwork-7",
    artworkImages: ["./assets/images/paintings/7.-John-Panton_2.png"],
  },
];

let currentPortraitIndex = 0;
let currentPortraitArtworkIndex = 0;
let isLargeText = false;
let isLandscapeLargeText = false;
let isSculptureLargeText = false;
let currentLandscapePaintingIndex = 0;
let currentLandscapeStep = 0;
let currentSculptureIndex = 0;
let idleTimeoutTimer = null;

const sculptures = [
  {
    title: "Reginald Fairlie RSA (1883-1952)",
    artist: "The First World War Memorial\nBronze, 1922",
    body:
      "Commissioned in memory of the 62 Members and four staff who died in the First World War, including two of the Club’s best golfers, Norman Hunter and Jack Graham, who both served on the Rules Committee. Designed by Edinburgh architect Reginald Fairlie, who’s father and grandfather had both captained the Club. Fairlie was elected to the RSA in 1933.",
    artworkClass: "sculpture-artwork-1",
  },
  {
    title: "Waller Hubert Paton (1863-1940)",
    artist: "Tom Morris\nBronze, 1910",
    body:
      "Just below The Royal and Ancient Clubhouse clock, a portrait in bronze of Tom Morris looks out across the Old Course which he tended for nearly 40 years. Sculptor Waller Hubert Paton - son of celebrated artist and RSA academician Waller Hugh Paton - designed the bronze which was funded by subscriptions from golf clubs and leading figures in the game. The memorial bronze was installed in 1910, two years after Morris' death.",
    artworkClass: "sculpture-artwork-2",
  },
];

const landscapePaintings = [
  {
    steps: [
      {
        title: "Unknown Artist",
        artist: "View of St Andrews from the<br>Old Course with Golfers",
        date: "1740s",
        body:
          "The earliest known painting of golf at St Andrews, dated to the 1740s was donated to the Club in 1847. A note in the minutes states it was <em>\"executed at a time when our ancestors took to the field in wigs and cocked hats.\"</em>",
        artworkClass: "landscape-artwork-step-0",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Foreground",
        body:
          "A match between two pairs of golfers is in progress – the gentlemen in blue against the gentlemen in red and yellow. Each pair has a caddie, who gathers the clubs under his arm.",
        artworkClass: "landscape-artwork-step-1",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Middle ground",
        body:
          "Golfers did not have sole use of the links, beyond them we can see shepherds, a dog and a flock of sheep. The windmill, seen on the right of the painting, was demolished in 1775.",
        artworkClass: "landscape-artwork-step-2",
      },
      {
        title: "View of St Andrews from the<br>Old Course, with Golfers",
        artist: "Unknown artist",
        date: "Background",
        body:
          "St Andrews landmarks such as the Cathedral, St Rule’s Tower, Castle and St Salvator’s Tower can be seen in the distance.",
        artworkClass: "landscape-artwork-step-3",
      },
    ],
  },
  {
    steps: [
      {
        title: "Samuel Bough (1822-1878)",
        artist: "A Golf Match at St Andrews",
        date: "Watercolour, 1868",
        body:
          "“Painted on the sport” by landscape artist Samuel Bough, the Old Course appears more rugged than it is today, with sheep grazing in the foreground and trailing off into the distance.",
        artworkClass: "landscape-artwork-step-4",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Spectators",
        body:
          "Two groups of spectators are visible, and the parasols indicate that a number of women are present.",
        artworkClass: "landscape-artwork-step-5",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Golfers",
        body:
          "Two gentlemen in red coats stand near the left hand group, with one looking as if he is about to play the ball.",
        artworkClass: "landscape-artwork-step-6",
      },
      {
        title: "A Golf Match at St Andrews",
        artist: "By Samuel Bough (1822-1878)",
        date: "Ginger Beer Cart",
        body:
          "On the far left of the picture, barely visible through the gorse, David ‘Da’ Anderson stands beside his ginger beer cart. A feather ball maker by trade, ‘Da’ provided refreshment to golfers on the course for many years. The 4th (Ginger Beer) hole is named after him.",
        artworkClass: "landscape-artwork-step-7",
      },
    ],
  },
  {
    steps: [
      {
        title: "William Miller Frazer (1864-1961)",
        artist: "Golf Course with Sheep",
        date: "Watercolour, 1901",
        body:
          "After travelling extensively throughout Europe, William Miller Frazer found greatest inspiration in the tranquil landscape of eastern England and lowland Scotland.\n\nA flock of sheep are positioned prominently, while the golfers are barely visible in the distance. Sheep continued to graze some golf courses until well into the 20th century.",
        artworkClass: "landscape-artwork-step-8",
      },
    ],
  },
];

function showMenu() {
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.remove("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
}

function showAttractor() {
  currentPortraitIndex = 0;
  currentPortraitArtworkIndex = 0;
  currentLandscapePaintingIndex = 0;
  currentLandscapeStep = 0;
  currentSculptureIndex = 0;
  isLargeText = false;
  isLandscapeLargeText = false;
  isSculptureLargeText = false;
  portraitScreen.classList.remove("is-large-text");
  landscapeScreen.classList.remove("is-large-text");
  sculptureScreen.classList.remove("is-large-text");
  portraitTextButton.setAttribute("aria-pressed", "false");
  landscapeTextButton.setAttribute("aria-pressed", "false");
  sculptureTextButton.setAttribute("aria-pressed", "false");
  portraitTextFlow.scrollTop = 0;
  sculptureTextFlow.scrollTop = 0;
  attractorScreen.classList.remove("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
}

function showPortraits() {
  currentPortraitIndex = 0;
  currentPortraitArtworkIndex = 0;
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.remove("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.add("is-hidden");
  renderPortrait(currentPortraitIndex);
}

function showLandscape() {
  currentLandscapePaintingIndex = 0;
  currentLandscapeStep = 0;
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.remove("is-hidden");
  sculptureScreen.classList.add("is-hidden");
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function showSculpture() {
  currentSculptureIndex = 0;
  attractorScreen.classList.add("is-hidden");
  menuScreen.classList.add("is-hidden");
  portraitScreen.classList.add("is-hidden");
  landscapeScreen.classList.add("is-hidden");
  sculptureScreen.classList.remove("is-hidden");
  renderSculpture(currentSculptureIndex);
}

function formatCopy(text, { preventWidow = false } = {}) {
  const html = text.replaceAll("\n", "<br>");

  if (!preventWidow) {
    return html;
  }

  return html
    .split("<br>")
    .map((segment) =>
      segment
        .replace(/(\S+)\s+(\S+)\s+(\S+)\s*$/, "$1&nbsp;$2&nbsp;$3")
        .replace(/(\S+)\s+(\S+)\s*$/, "$1&nbsp;$2"),
    )
    .join("<br>");
}

function renderPortrait(index) {
  const portrait = portraits[index];
  const artworkImages = portrait.artworkImages ?? [];
  const activeArtworkImage = artworkImages[currentPortraitArtworkIndex] ?? "";
  const preventWidow = portrait.preserveLineBreaks !== true;

  portraitTitle.innerHTML = formatCopy(portrait.title);
  portraitArtist.innerHTML = formatCopy(portrait.artist);
  portraitSummary.innerHTML = formatCopy(portrait.summary, { preventWidow });
  portraitBody.innerHTML = formatCopy(portrait.body, { preventWidow });
  portraitArtwork.className = `portrait-artwork ${portrait.artworkClass}`;
  portraitArtwork.style.backgroundImage = activeArtworkImage ? `url("${activeArtworkImage}")` : "";
  portraitArtwork.classList.toggle("is-toggleable", artworkImages.length > 1);
  renderPortraitImageDots(artworkImages);
  portraitCount.textContent = `${index + 1} / ${portraits.length}`;
  portraitPrevButton.disabled = index === 0;
  portraitNextButton.disabled = index === portraits.length - 1;
  portraitPrevButton.setAttribute("aria-disabled", String(index === 0));
  portraitNextButton.setAttribute("aria-disabled", String(index === portraits.length - 1));
  portraitTextFlow.scrollTop = 0;
  updatePortraitOverflow();
}

function goToNextPortrait() {
  if (currentPortraitIndex >= portraits.length - 1) {
    return;
  }

  currentPortraitIndex += 1;
  currentPortraitArtworkIndex = 0;
  renderPortrait(currentPortraitIndex);
}

function goToPreviousPortrait() {
  if (currentPortraitIndex <= 0) {
    return;
  }

  currentPortraitIndex -= 1;
  currentPortraitArtworkIndex = 0;
  renderPortrait(currentPortraitIndex);
}

function toggleLargeText() {
  isLargeText = !isLargeText;
  portraitScreen.classList.toggle("is-large-text", isLargeText);
  portraitTextButton.setAttribute("aria-pressed", String(isLargeText));
  portraitTextFlow.scrollTop = 0;
  updatePortraitOverflow();
}

function updatePortraitOverflow() {
  window.requestAnimationFrame(() => {
    const maxScrollTop = portraitTextFlow.scrollHeight - portraitTextFlow.clientHeight;
    const hasOverflow = maxScrollTop > 2;
    const isAtStart = portraitTextFlow.scrollTop <= 2;
    const isAtEnd = !hasOverflow || portraitTextFlow.scrollTop >= maxScrollTop - 2;

    portraitTextFlow.classList.toggle("has-overflow", hasOverflow);
    portraitTextFlow.classList.toggle("is-at-start", isAtStart);
    portraitTextFlow.classList.toggle("is-at-end", isAtEnd);
    portraitCopy.classList.toggle("has-overflow", hasOverflow);
    portraitCopy.classList.toggle("is-at-end", isAtEnd);
  });
}

function updateSculptureOverflow() {
  window.requestAnimationFrame(() => {
    const maxScrollTop = sculptureTextFlow.scrollHeight - sculptureTextFlow.clientHeight;
    const hasOverflow = maxScrollTop > 2;
    const isAtStart = sculptureTextFlow.scrollTop <= 2;
    const isAtEnd = !hasOverflow || sculptureTextFlow.scrollTop >= maxScrollTop - 2;

    sculptureTextFlow.classList.toggle("has-overflow", hasOverflow);
    sculptureTextFlow.classList.toggle("is-at-start", isAtStart);
    sculptureTextFlow.classList.toggle("is-at-end", isAtEnd);
  });
}

function togglePortraitArtwork() {
  const portrait = portraits[currentPortraitIndex];
  const artworkImages = portrait.artworkImages ?? [];

  if (artworkImages.length < 2) {
    return;
  }

  currentPortraitArtworkIndex = (currentPortraitArtworkIndex + 1) % artworkImages.length;
  renderPortrait(currentPortraitIndex);
}

function renderPortraitImageDots(artworkImages) {
  if (artworkImages.length < 2) {
    portraitImageDots.innerHTML = "";
    portraitImageDots.classList.add("is-hidden");
    return;
  }

  portraitImageDots.classList.remove("is-hidden");
  portraitImageDots.innerHTML = artworkImages
    .map((_, index) => {
      const isActive = index === currentPortraitArtworkIndex;
      return `
        <button
          class="portrait-image-dot${isActive ? " is-active" : ""}"
          type="button"
          data-portrait-image-index="${index}"
          aria-label="Portrait image ${index + 1}"
          aria-pressed="${String(isActive)}"
        >
          <img src="./assets/images/Ellipse.svg" alt="" />
        </button>
      `;
    })
    .join("");
}

function selectPortraitArtwork(event) {
  const dot = event.target.closest("[data-portrait-image-index]");

  if (!dot) {
    return;
  }

  currentPortraitArtworkIndex = Number(dot.dataset.portraitImageIndex);
  renderPortrait(currentPortraitIndex);
}

function renderLandscape(paintingIndex, stepIndex) {
  const painting = landscapePaintings[paintingIndex];
  const step = painting.steps[stepIndex];
  const isBoughPainting = paintingIndex === 1;
  const isFrazerPainting = paintingIndex === 2;
  const isOverviewStep = stepIndex === 0;
  const isDetailStep = stepIndex > 0;
  landscapeTitle.innerHTML = step.title;
  landscapeArtist.innerHTML = step.artist.replaceAll("\n", "<br>");
  landscapeDate.textContent = step.date;
  landscapeBody.textContent = step.body;
  landscapeArtworkWrap.classList.toggle("is-bough-painting", isBoughPainting);
  landscapeArtworkWrap.classList.toggle("is-frazer-painting", isFrazerPainting);
  landscapeScreen.classList.toggle("is-landscape-overview", isOverviewStep);
  landscapeScreen.classList.toggle("is-landscape-detail", isDetailStep);
  landscapeArtwork.className = `landscape-artwork ${step.artworkClass}`;

  landscapeDots.forEach((dot, index) => {
    const isVisible = index < painting.steps.length;
    const isActive = isVisible && painting.steps.length > 1 && index === stepIndex;
    dot.classList.toggle("is-hidden", !isVisible);
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-pressed", String(isActive));
  });
  const hideLandscapeDots = painting.steps.length <= 1;
  landscapeDotsWrap.classList.toggle("is-hidden", hideLandscapeDots);
  landscapeDotsWrap.hidden = hideLandscapeDots;
  landscapeDotsWrap.setAttribute("aria-hidden", String(hideLandscapeDots));

  landscapePrevPaintingButton.disabled = paintingIndex === 0;
  landscapeNextPaintingButton.disabled = paintingIndex === landscapePaintings.length - 1;
  landscapePrevPaintingButton.setAttribute("aria-disabled", String(paintingIndex === 0));
  landscapeNextPaintingButton.setAttribute("aria-disabled", String(paintingIndex === landscapePaintings.length - 1));
}

function goToPreviousLandscapePainting() {
  if (currentLandscapePaintingIndex <= 0) {
    return;
  }

  currentLandscapePaintingIndex -= 1;
  currentLandscapeStep = 0;
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function goToNextLandscapePainting() {
  if (currentLandscapePaintingIndex >= landscapePaintings.length - 1) {
    return;
  }

  currentLandscapePaintingIndex += 1;
  currentLandscapeStep = 0;
  renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
}

function startIdleTimeout() {
  if (idleTimeoutTimer !== null) {
    window.clearTimeout(idleTimeoutTimer);
  }

  idleTimeoutTimer = window.setTimeout(() => {
    showAttractor();
    startIdleTimeout();
  }, IDLE_TIMEOUT_MS);
}

function renderSculpture(index) {
  const sculpture = sculptures[index];
  const formattedArtist = sculpture.artist
    .replace(/\s+\(([^)]+)\)/, "<br>($1)")
    .replaceAll("\n", "<br>");

  sculptureTitle.textContent = sculpture.title;
  sculptureArtist.innerHTML = formattedArtist;
  sculptureBody.textContent = sculpture.body;
  sculptureTextFlow.scrollTop = 0;
  updateSculptureOverflow();
  sculptureArtwork.className = `sculpture-artwork ${sculpture.artworkClass}`;
  sculpturePrevButton.disabled = index === 0;
  sculptureNextButton.disabled = index === sculptures.length - 1;
  sculpturePrevButton.setAttribute("aria-disabled", String(index === 0));
  sculptureNextButton.setAttribute("aria-disabled", String(index === sculptures.length - 1));
}

function goToPreviousSculpture() {
  if (currentSculptureIndex <= 0) {
    return;
  }

  currentSculptureIndex -= 1;
  renderSculpture(currentSculptureIndex);
}

function goToNextSculpture() {
  if (currentSculptureIndex >= sculptures.length - 1) {
    return;
  }

  currentSculptureIndex += 1;
  renderSculpture(currentSculptureIndex);
}

attractorStartButton.addEventListener("click", showMenu);
portraitsButton.addEventListener("click", () => {
  currentPortraitIndex = 0;
  currentPortraitArtworkIndex = 0;
  showPortraits();
});

landscapesButton.addEventListener("click", () => {
  currentLandscapePaintingIndex = 0;
  currentLandscapeStep = 0;
  showLandscape();
});
sculptureButton.addEventListener("click", showSculpture);
portraitBackButton.addEventListener("click", showMenu);
portraitBackControl.addEventListener("click", showMenu);
portraitPrevButton.addEventListener("click", goToPreviousPortrait);
portraitNextButton.addEventListener("click", goToNextPortrait);
portraitTextButton.addEventListener("click", toggleLargeText);
portraitArtwork.addEventListener("click", togglePortraitArtwork);
portraitImageDots.addEventListener("click", selectPortraitArtwork);
portraitTextFlow.addEventListener("scroll", updatePortraitOverflow);
landscapeBackButton.addEventListener("click", showMenu);
landscapePrevPaintingButton.addEventListener("click", goToPreviousLandscapePainting);
landscapeNextPaintingButton.addEventListener("click", goToNextLandscapePainting);
landscapeTextButton.addEventListener("click", () => {
  isLandscapeLargeText = !isLandscapeLargeText;
  landscapeScreen.classList.toggle("is-large-text", isLandscapeLargeText);
  landscapeTextButton.setAttribute("aria-pressed", String(isLandscapeLargeText));
});
sculptureBackButton.addEventListener("click", showMenu);
sculpturePrevButton.addEventListener("click", goToPreviousSculpture);
sculptureNextButton.addEventListener("click", goToNextSculpture);
sculptureTextButton.addEventListener("click", () => {
  isSculptureLargeText = !isSculptureLargeText;
  sculptureScreen.classList.toggle("is-large-text", isSculptureLargeText);
  sculptureTextButton.setAttribute("aria-pressed", String(isSculptureLargeText));
  sculptureTextFlow.scrollTop = 0;
  updateSculptureOverflow();
});
sculptureTextFlow.addEventListener("scroll", updateSculptureOverflow);
landscapeDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    currentLandscapeStep = Number(dot.dataset.landscapeStep);
    renderLandscape(currentLandscapePaintingIndex, currentLandscapeStep);
  });
});

window.addEventListener("resize", updatePortraitOverflow);
window.addEventListener("resize", updateSculptureOverflow);
["pointerdown", "pointerup", "touchstart", "keydown", "wheel", "scroll"].forEach((eventName) => {
  window.addEventListener(eventName, startIdleTimeout, { passive: true, capture: true });
});

startIdleTimeout();
