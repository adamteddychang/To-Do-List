export const addnewobj = (content) => {
  const item = {
    content,
    complete: false,
    index: itemsArr.length + 1,
  };

  itemsArr.push(item);
  localStorage.setItem('todolist', JSON.stringify(itemsArr));
};

inputF.addEventListener('keydown', (e) => {
  if (e.code === 'Enter') {
    addnewobj(inputF.value);
    inputF.value = '';
    window.location.reload();
  }
});

export const removeAll = () => {
  itemsArr = [];
  localStorage.setItem('todolist', JSON.stringify(itemsArr));
  window.location.reload();
};

reset.addEventListener('click', removeAll);

export const removeTasks = () => {
  const incompArr = itemsArr.filter((todoItem) => todoItem.complete === false);
  itemsArr = incompArr;

  if (itemsArr.length < 1) {
    itemsArr = [];
    localStorage.setItem('todolist', JSON.stringify(itemsArr));
    window.location.reload();
  } else {
    for (let i = 0; i < itemsArr.length; i += 1) {
      itemsArr[i].index = i + 1;
      localStorage.setItem('todolist', JSON.stringify(itemsArr));
      window.location.reload();
    }
  }
};

completeBtn.addEventListener('click', removeTasks);

export const editContent = (e, content, itemsArr) => {
  const edit = e.target;
  edit.addEventListener('keydown', (e) => {
    if (e.code === 'Enter') {
      edit.value = content.value;
      itemsArr.forEach((item) => {
        if (item.index.toString() === edit.parentElement.id.toString()) {
          item.content = edit.value;
        }
      });
      localStorage.setItem('todolist', JSON.stringify(itemsArr));
    }
  });
};
