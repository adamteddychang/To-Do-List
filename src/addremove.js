const addnewobj = (content, itemsArr) => {
  const item = {
    content,
    complete: false,
    index: itemsArr.length + 1,
  };

  itemsArr.push(item);
  localStorage.setItem('todolist', JSON.stringify(itemsArr));
};

const removeTasks = (itemsArr) => {
  itemsArr = [...JSON.parse(localStorage.getItem('todolist'))];
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

const editContent = (e, content, itemsArr) => {
  itemsArr = [...JSON.parse(localStorage.getItem('todolist'))];
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

export { addnewobj, editContent, removeTasks };