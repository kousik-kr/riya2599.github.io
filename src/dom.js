export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  return template.content.firstElementChild;
};

export const createList = (items, mapper) => items.map(mapper).join('');
