export const random = (max) => Math.floor(Math.random() * max);

export const loadPartials = () => {
  const allElements = document.getElementsByTagName('*');
  Array.prototype.forEach.call(allElements, function(el) {
      const includePath = el.dataset.includeHtml;
      if (includePath) {
          const xhttp = new XMLHttpRequest();
          xhttp.onreadystatechange = function () {
              if (this.readyState == 4 && this.status == 200) {
                  el.outerHTML = this.responseText;
              }
          };
          xhttp.open('GET', includePath, true);
          xhttp.send();
      }
  });
}

export const menuClickHandler = (e) => {
  const main = document.querySelector('main');
  const eventTarget = e.target;
  const dataset = eventTarget.dataset;

  const link = dataset.link;
  if(link) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          main.outerHTML = this.responseText;
        }
    };
    xhttp.open('GET', link, true);
    xhttp.send();
  }
}