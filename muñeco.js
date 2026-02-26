const prendas = document.querySelectorAll('.prenda');
const zona = document.getElementById('zona-muneco');

prendas.forEach(prenda => {
  prenda.dataset.contenedorOriginal = prenda.parentElement.className;

  prenda.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', prenda.id);
  });
});

zona.addEventListener('dragover', e => e.preventDefault());
zona.addEventListener('drop', e => {
  e.preventDefault();

  const id = e.dataTransfer.getData('text/plain');
  const prenda = document.getElementById(id);
  const rect = zona.getBoundingClientRect();

  zona.appendChild(prenda);

  const prendaRect = prenda.getBoundingClientRect();

  prenda.style.position = 'absolute';
  prenda.style.zIndex = '10';
  prenda.style.left = (e.clientX - rect.left - prendaRect.width / 2) + 'px';
  prenda.style.top  = (e.clientY - rect.top - prendaRect.height / 2) + 'px';
});

const paneles = document.querySelectorAll('.panel-prendas');
paneles.forEach(panel => {
  panel.addEventListener('dragover', e => e.preventDefault());

  panel.addEventListener('drop', e => {
    e.preventDefault();

    const id = e.dataTransfer.getData('text/plain');
    const prenda = document.getElementById(id);

    panel.appendChild(prenda);

    prenda.style.position = 'static';
    prenda.style.left = '';
    prenda.style.top = '';
    prenda.style.zIndex = '';
  });
});




