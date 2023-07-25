let cat;
// the function will receive a value and it will search the api based on what was clicked
const getRandomQuote = async (category) => {
  let url = `https://api.quotable.io/quotes/random`;

  if (category) url = `${url}?tags=${category}`;

  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
};

getRandomQuote("famous-quotes");
