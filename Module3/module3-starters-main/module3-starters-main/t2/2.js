const ul = document.getElementById('target');
const my_list = ['First item', 'Second item', 'Third item'];

for (let i= 0; i < my_list.length; i++) {
  const li = document.createElement('li');
  if (i === 1) {
    li.className = 'my-item'
  }
  ul.appendChild(li);
  li.innerHTML = my_list[i];

}