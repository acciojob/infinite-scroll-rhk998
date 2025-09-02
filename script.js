let current = 1;

function gen(start, count) {
  const list = document.getElementById('infi-list');

  for (let i = 0; i < count; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${start + i}`;
    list.appendChild(li);
  }

  current += count;
}

gen(current, 10);

const listContainer = document.getElementById('infi-list');

listContainer.addEventListener('scroll', () => {
  if (
    listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 5
  ) {
    gen(current, 2);
  }
});
