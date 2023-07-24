// the user will be able to select category of quote
// inspirational
// wisdom
// technology
// famous quote
// history

// the function will receive a value and it will search the api based on what was clicked
const getRandomQuote = async () => {
  const res = await fetch("https://api.quotable.io/quotes/random?tags=sports");
  const data = await res.json();
  console.log(data);
};
