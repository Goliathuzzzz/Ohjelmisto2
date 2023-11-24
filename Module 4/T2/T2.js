const tvform = document.querySelector('#tv');
tvform.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  const input = document.querySelector('input[name=q]').value;
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${input}`);
    const jsondata = await response.json();
    console.log(jsondata);
  }
  catch (error) {
    console.log(error.message);
  }
});