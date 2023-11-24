const searchform = document.querySelector('#searchform');
const p = document.querySelector('#p');

searchform.addEventListener('submit', async function (evt){
  evt.preventDefault();
  const query = document.querySelector('#search').value;
  try {
    const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`,);
    const jsondata = await response.json();
    console.log(jsondata.result);
    p.innerHTML = '';
    for (const joke of jsondata.result) {
      console.log(joke.value);
      p.innerText += joke.value;
      p.innerHTML += '<br>'
    }
  }
  catch (error) {
    console.log(error.message);
  }
  finally {
    console.log('Program complete.')
  }
})
