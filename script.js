let display = document.getElementById('result');
let historyList = document.getElementById('history-list');
let scientificPanel = document.getElementById('scientific');

// Append number to display
function appendNumber(number) {
  display.value += number;
}

// Add operator to display
function addOperator(operator) {
  display.value += operator;
}

// Add scientific functions
function addFunction(func) {
  display.value += `${func}(`;
}

// Clear display
function clearDisplay() {
  display.value = '';
}

// Backspace
function backspace() {
  display.value = display.value.slice(0, -1);
}

// Calculate
function calculate() {
  try {
    const result = eval(display.value);
    addHistory(display.value + " = " + result);
    display.value = result;
  } catch (e) {
    display.value = 'Error';
  }
}

// Calculate factorial
function calculateFactorial() {
  const number = parseInt(display.value);
  if (number >= 0) {
    let fact = 1;
    for (let i = 1; i <= number; i++) fact *= i;
    display.value = fact;
  } else {
    display.value = 'Error';
  }
}

// Add to history
function addHistory(entry) {
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.appendChild(li);
}

// Toggle scientific panel
function toggleScientific() {
  scientificPanel.style.display =
    scientificPanel.style.display === 'block' ? 'none' : 'block';
}

// Theme switcher
const themeSelector = document.getElementById('theme-selector');
themeSelector.addEventListener('change', () => {
  document.body.dataset.theme = themeSelector.value;
});
