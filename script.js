const piForm = document.getElementById('pi-form');
const piInput = document.getElementById('pi-input');
const piError = document.getElementById('pi-error');
const piCount = document.getElementById('pi-count');
const piHighscore = document.getElementById('pi-highscore');
const piDecimals = document.getElementById('pi-decimals');
const usernameInput = document.getElementById('username-input');

let enteredDecimals = '';
let username = usernameInput.value;
const PI =
  '1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235';

piForm.addEventListener('submit', (e) => {
  e.preventDefault();

  piError.textContent = '';

  const inputUsername = usernameInput.value.trim();
  const inputDecimal = piInput.value.trim();

  if (!inputUsername || !inputDecimal)
    return (piError.textContent =
      'Please enter a username and a PI decimal string');

  if (!/^\d+$/.test(inputDecimal))
    return (piError.textContent = 'Decimal string can only contain digits');

  if (!PI.startsWith(inputDecimal))
    return (piError.textContent = 'Incorrect decimals!');

  const localStorageCount = JSON.parse(localStorage.getItem(inputUsername));
  console.log(localStorageCount);

  enteredDecimals = inputDecimal;
  piDecimals.textContent = 'Decimals: ' + enteredDecimals;
  piCount.textContent = 'Count: ' + enteredDecimals.length;

  console.log(localStorageCount > enteredDecimals.length);

  if (localStorageCount > enteredDecimals.length)
    return (piHighscore.textContent = 'Highscore: ' + localStorageCount);

  piHighscore.textContent = 'Highscore: ' + enteredDecimals.length;

  localStorage.setItem(inputUsername, JSON.stringify(enteredDecimals.length));

  piDecimals.value = '';
  piCount.value = '';
});
