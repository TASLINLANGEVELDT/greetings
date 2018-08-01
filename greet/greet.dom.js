
51 lines (43 sloc)  1.78 KB
var nameBox = document.querySelector('.nameBox');
var displayAlert = document.querySelector('output[name="alertName"]');
var greetMe = document.querySelector('.buttons');
var languages = document.querySelectorAll('.languages');
var greetMeDisplay = document.querySelector('output[name="greetingResult"]');
var countNames = document.querySelector('output[name="countResult"]');
var reset = document.querySelector('button[name="resetBtn"]');

function greetDom() {
var checkedBtn = '';

for (var i = 0; i < languages.length; i++) {
if (languages[i].checked) {
  checkedBtn = languages[i].value;
  languages[i].checked = false;
}
}
greetings.alert(nameBox.value, checkedBtn);
displayAlert.innerHTML = "";
greetings.assignName(checkedBtn, nameBox.value);
greetMeDisplay.innerHTML = greetings.greetPerson(checkedBtn, nameBox.value);
displayAlert.innerHTML = greetings.alert(nameBox.value, checkedBtn);
nameBox.value = "";
countNames.innerHTML = greetings.counter();

var holdMap = greetings.returnMap();
localStorage.setItem("localMap",JSON.stringify(holdMap));
}

//var holdMap  = localStorage.getItem('localMap') ? JSON.parse(localStorage.getItem('localMap')):{};
// Note: Line above and line below does the same thing.
var holdMap = JSON.parse(localStorage.getItem('localMap'));
if (holdMap === undefined || null) {
holdMap = {};
}
var greetings = Greetings(holdMap);

greetings.storeMap();
countNames.innerHTML = greetings.counter();

function resetCount() {
localStorage.clear();
location.reload();
// Note: Line above and lines below does the same thing.
// countNames.innerHTML = "";
// greetMeDisplay.innerHTML = "";
}

greetMe.addEventListener('click', greetDom);
reset.addEventListener('click', resetCount);
