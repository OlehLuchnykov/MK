const randomizer = (val) => Math.ceil(Math.random() * val);

const createElement = (tagName, className) => {
  const newEl = document.createElement(tagName);

  if (className) {
    newEl.classList.add(className);
  }

  return newEl
}

export { randomizer, createElement };
