import './style.css'
const itemsContainer = document.querySelector('.items-contain');

const itemsArr = [{
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
{
  content: 'sleep good',
  complete: false,
  index: 2,
},

];

const loadItem = () => {
  for (let i = 0; i < itemsArr.length; i += 1) {
    itemsContainer.innerHTML += `
    <li class="item">
        <div class="left">
          <input type="checkbox">
        <p>${itemsArr[i].content}</p>
      </div>
      <i class="fas fa-ellipsis-v dots"></i>        
      </li>   
    
    `;
  }
};

window.onload = loadItem();