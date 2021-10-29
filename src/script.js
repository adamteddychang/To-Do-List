export const taskCompleted = (e, itemsArr) => {
  const completed = e.target;
  itemsArr = [...JSON.parse(localStorage.getItem('todolist'))];
  if (completed.checked) {
    completed.parentElement.classList.add('completed');

    for (let i = 0; i < itemsArr.length; i += 1) {
      const parent = completed.parentElement.id;
      const itemIndex = itemsArr[i].index;
      if (parent.toString() === itemIndex.toString()) {
        itemsArr[i].complete = true;
        localStorage.setItem('todolist', JSON.stringify(itemsArr));
      }
    }
  } else {
    completed.parentElement.classList.remove('completed');
    for (let i = 0; i < itemsArr.length; i += 1) {
      const parent = completed.parentElement.id;
      const itemIndex = itemsArr[i].index;
      if (parent.toString() === itemIndex.toString()) {
        itemsArr[i].complete = false;
        localStorage.setItem('todolist', JSON.stringify(itemsArr));
      }
    }
  }
};

export default 'taskCompleted';