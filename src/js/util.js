export const random = (max) => Math.floor(Math.random() * max);

export const loadPartials = () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
      const includePath = el.dataset.includeHtml;
      if (includePath) {
        loadHtml(el, includePath);
      }
  });
}

export const menuClickHandler = (e) => {
  const main = document.querySelector('main');
  const eventTarget = e.target;
  const dataset = eventTarget.dataset;

  const includePath = dataset.includeLink;
  if(includePath) {
    loadHtml(main, includePath);
  }
}

const loadHtml = (el, path) => {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
      }
  };
  xhttp.open('GET', path, true);
  xhttp.send();
}