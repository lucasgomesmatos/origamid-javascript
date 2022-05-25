const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href)
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'Carregando...';
  await new Promise(res => {
    setTimeout(() => {
      res();
    }, 1000)
  })
  const pageText = await (await fetch(url)).text();
  replacePage(pageText)
}

function replacePage(newText) {
  const newHtml =  document.createElement('div');
  newHtml.innerHTML = newText;

  const oldContent = document.querySelector('.content');
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML

  document.title = newHtml.querySelector('title').innerText;
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.pathname)
})

links.forEach(link => {
  link.addEventListener('click', handleClick)
})