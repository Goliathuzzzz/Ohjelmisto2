const ul = document.getElementById('target');
const my_list = ['First item', 'Second item', 'Third item'];

for (let i= 0; i < my_list.length; i++) {
  ul.innerHTML += `<li>${my_list[i]}</li>`
}
