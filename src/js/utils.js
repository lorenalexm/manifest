export function confirm(text) {
  return window.confirm(text);
};

export function setLocalStorageItem(item, value) {
  return window.localStorage.setItem(`${item}`, JSON.stringify(value));
};

export function getLocalStorageItem(item) {
  return JSON.parse(window.localStorage.getItem(item));
};

export function snapToGrid(value, grid) {
  return (grid) * Math.round(value / (grid));
};

export function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0; var v = c === "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
};

export function bringActiveMemoToTop() {
  let activeMemo;
  const memos = [...document.getElementsByClassName("memo")];
  const board = document.getElementById("board");
  const fragment = document.createDocumentFragment();

  board.innerHTML = null;

  for (const memo of memos) {
    if (memo.classList.contains("active")) {
      activeMemo = memo;
      continue;
    }
    fragment.append(memo);
  }

  fragment.append(activeMemo);
  board.append(fragment);
};
