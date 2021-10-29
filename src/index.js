import './style.css';
import { taskCompleted } from './script.js';
import { addnewobj, removeTasks, editContent } from './addremove.js';

const inputF = document.querySelector('#input');
const itemsContainer = document.querySelector('.items-contain');
const reset = document.querySelector('#reset');
const completeBtn = document.querySelector('#comp-btn');
let itemsArr = [];

const insides = () => {
  if (itemsArr.length !== 0) {
    itemsArr.forEach((todoItem) => {
      const ele = document.createElement('li');
      ele.className = 'item';
      ele.id = todoItem.index;
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

      const content = document.createElement('input');
      content.className = 'content';
      content.rows = 'auto';
      content.value = todoItem.content;
      leftDiv.appendChild(content);
      content.addEventListener('click', (e) => editContent(e, content, itemsArr));

      const rightDiv = document.createElement('div');
      rightDiv.className = 'right';
      ele.appendChild(rightDiv);

      const trash = document.createElement('i');
      trash.className = 'fas fa-trash-alt trash';

      rightDiv.appendChild(trash);

      const dots = document.createElement('i');
      dots.className = 'fas fa-ellipsis-v dots';
      rightDiv.appendChild(dots);
      checkbox.addEventListener('change', (e) => taskCompleted(e, itemsArr));
      if (todoItem.complete) {
        leftDiv.classList.add('completed');
      }

      trash.addEventListener('click', () => {
        if (itemsArr.length === 1) {
          itemsArr = [];
          localStorage.setItem('todolist', JSON.stringify(itemsArr));
          window.location.reload();
        } else {
          for (let i = 0; i < itemsArr.length; i += 1) {
            if (itemsArr[i].index === todoItem.index) {
              itemsArr.splice(i, 1);

              for (let i = 0; i < itemsArr.length; i += 1) {
                itemsArr[i].index = i + 1;
                localStorage.setItem('todolist', JSON.stringify(itemsArr));
                window.location.reload();
              }
            }
          }
        }
      });
    });
  }
};

const load = () => {
  window.onload = () => {
    if (localStorage.getItem('todolist') !== null) {
      itemsArr = [...JSON.parse(localStorage.getItem('todolist'))];
      insides();
    } else {
      insides();
    }
  };
};
const removeAll = () => {
  itemsArr = [];
  localStorage.setItem('todolist', JSON.stringify(itemsArr));
  window.location.reload();
};
reset.addEventListener('click', removeAll);

load();

completeBtn.addEventListener('click', removeTasks);

inputF.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    addnewobj(inputF.value, itemsArr);
    inputF.value = '';
    window.location.reload();
  }
});