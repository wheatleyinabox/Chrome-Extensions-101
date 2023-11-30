const fanfic_text = document.querySelector(".userstuff");
if (fanfic_text) 
{
  const text = fanfic_text.textContent;
  const wordMatchRegExp = /[^\s]+/g; // assuming this doesn't change idk man
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const needle = document.createElement("p");
  needle.classList.add("title");
  needle.textContent = `⏰ ${readingTime} minute read! :D`;

  const injection_location = document.querySelector("#workskin");
  const author = injection_location.querySelector("h3");
  author.insertAdjacentElement("afterend", needle);
}
/*
    AO3 DOM INSPECTION 🔎

    __TEXT LOCATION__
    <div class="userstuff">
        <p>...</p>
        <p>...</p>
        <p>...</p>
        ...
    </div>

    __INJECTION__
    <div id="worksin">
        <div class="preface group">
            <h2 class="title heading"> ... </h2>
            <h3 class="byline heading">
                <a rel="author" href="...">...</a>
            </h3>
            *stab stab go here*
            <div class="summary module">...</div>
            ...
        </div>
    </div>
*/