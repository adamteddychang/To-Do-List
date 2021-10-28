const itemsContainer = document.querySelector('.items-contain');

let itemsArr = [{
  content: 'wash the dishes',
  complete: false,
  index: 0,
},
{
  content: 'have dinner',
  complete: false,
  index: 1,
},
{
  content: 'finish project',
  complete: false,
  index: 2,
},
];

const insides = () => {
  if (itemsArr.length !== 0) {
    itemsArr.forEach((todoItem) => {
      const ele = document.createElement('li');
      ele.className = 'item';
      itemsContainer.appendChild(ele);

      const leftDiv = document.createElement('div');
      leftDiv.className = 'left';
      leftDiv.id = todoItem.index;
      ele.appendChild(leftDiv);

      const checkbox = document.createElement('input');
      checkbox.className = 'checkbox';
      checkbox.checked = todoItem.complete;
      checkbox.type = 'checkbox';
      leftDiv.appendChild(checkbox);

      const content = document.createElement('p');
      content.className = 'content';
      content.rows = 'auto';
      content.innerHTML = todoItem.content;
      leftDiv.appendChild(content);

      const dots = document.createElement('i');
      dots.className = 'fas fa-ellipsis-v dots';
      ele.appendChild(dots);
      checkbox.addEventListener('change', (e) => taskCompleted(e, itemsArr));
      if (todoItem.complete) {
        leftDiv.classList.add('completed');
      }
    });
  }
};

const load = () => {
  window.onload = () => {
    if (localStorage.getItem('todolist') !== null) {
      itemsArr = JSON.parse(localStorage.getItem('todolist'));
      insides();
    } else {
      insides();
    }
  };
};

load();

// const loadItem = (todo) => {
//   for (let i = 0; i < itemsArr.length; i += 1) {
//     itemsContainer.innerHTML += `
//     <li class="item">
//         <div class="left">
//           <input type="checkbox" class="checkbox" name="checkbox">
//         <p>${itemsArr[i].content}</p>
//       </div>
//       <i class="fas fa-ellipsis-v dots"></i>
//       </li>

//     `;
//   }
// };

// window.onload = loadItem();