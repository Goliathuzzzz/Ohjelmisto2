async function getrandomjoke(){
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const jsondata = await response.json();
  console.log(jsondata.value);
}

getrandomjoke();