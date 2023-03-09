const leaderboardTableBody = document.querySelector('#leaderboard-table-body');
const userDataArray = [];
for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
  const value = parseInt(localStorage.getItem(key));
  userDataArray.push({ username: key, count: value });
}

userDataArray.sort((a, b) => b.count - a.count);

for (let i = 0; i < userDataArray.length; i++) {
  const userData = userDataArray[i];
  const row = document.createElement('tr');
  const usernameCell = document.createElement('td');
  usernameCell.textContent = userData.username;
  const countCell = document.createElement('td');
  countCell.textContent = userData.count;
  const rankCell = document.createElement('td');
  rankCell.textContent = i + 1;
  row.appendChild(rankCell);
  row.appendChild(usernameCell);
  row.appendChild(countCell);
  leaderboardTableBody.appendChild(row);
}

window.jsPDF = window.jspdf.jsPDF;
var docPDF = new jsPDF();
function print() {
  var elementHTML = document.querySelector('table');
  docPDF.html(elementHTML, {
    callback: function (docPDF) {
      docPDF.save('PI Takmicenje - Rang lista');
    },
    x: 15,
    y: 15,
    width: 170,
    windowWidth: 650,
  });
}

document.querySelector('button').addEventListener('click', print);
