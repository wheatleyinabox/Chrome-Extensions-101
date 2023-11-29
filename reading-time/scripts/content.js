const article = document.querySelector("article");

// 'document.querySelector' may return null if the selector doesn't match anything
if (article)
{
    const text = article.textContent;
    const wordMatchRegEx = /[^\s]+/g;
    /* RegEx Explanation :D
        FILLER
    */
    const words = text.matchAll(wordMatchRegEx);
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    
    const badge = document.createElement("p");
    // Use the same styling as the public information in the an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱ ${readingTime} minute read! :O`;

    // Support for API reference docs
    const header = article.querySelector("h1");
    // Support for article docs with date
    const date = article.querySelector("time")?.parentNode;

    (date ?? header).insertAdjacentElement("afterend", badge);
}