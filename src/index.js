const form = document.querySelector('#task-form');

const list = document.querySelector('#task-list');

form.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const task = event.target.elements.taskName.value.trim();
  console.log(task);
  if (!task) return;
  addTask();
}

function addTask(task) {
  const arr = JSON.parse(localStorage.getItem('task-key')) || [];
  const id = Math.random();

  arr.push({ task, id });
  localStorage.setItem('task-key', JSON.stringify(arr));
}
