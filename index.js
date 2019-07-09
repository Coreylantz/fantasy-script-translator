import "./styles/styles.scss";

const untraslatedScript = document.getElementById('untraslatedScript');
const translatedScript = document.getElementById('translatedScript');
const langSelector = document.getElementById('langSelector');

translatedScript.classList.add(`${langSelector.value}`);

langSelector.onchange = () => {
  translatedScript.classList = '';
  translatedScript.classList.add(`${langSelector.value}`);
};

untraslatedScript.addEventListener('keyup', () => {
  translatedScript.innerHTML = untraslatedScript.value;
});