let cat;
const newQuoteButton = document.querySelector(".btn-cta");
const quoteCategories = document.querySelector(".quote__categories");
const message = document.querySelector(".error-message");
const blockQuote = document.querySelector("blockquote");

const getRandomQuote = async (category) => {
  let url = `https://api.quotable.io/quotes/random`;

  if (category) url = `${url}?tags=${category}`;

  const res = await fetch(url);
  const data = await res.json();

  return data;
};

const createEl = (el, text) => {
  const element = document.createElement(el);
  element.innerText = text;
  return element;
};

const updateBlockQuote = (...args) => {
  blockQuote.innerHTML = "";
  args.forEach((arg) => blockQuote.appendChild(arg));
};

const handleClick = async (cat) => {
  const quote = await getRandomQuote(cat);
  const quoteText = quote[0].content;
  const quoteAuthor = quote[0].author;
  const p = createEl("p", quoteText);
  const cite = createEl("cite", quoteAuthor);
  updateBlockQuote(p, cite);
};

quoteCategories.addEventListener("click", (e) => {
  const currentActive = document.querySelector(".active");
  if (currentActive) currentActive.classList.remove("active");
  cat = e.target.dataset.cat;
  e.target.classList.add("active");
});

newQuoteButton.addEventListener("click", async (e) => {
  if (!cat) {
    message.classList.add("show");
  } else {
    message.classList.remove("show");
    await handleClick(cat);
  }
});

handleClick();
