var greetCount = 0;

function Greetings(storedMap) {
var map = {};

  function storeMap(){
    if (storedMap) {
      map = storedMap;
    }
  }

  function assignName(checkedLanguage, nameInput) {
  storeMap();
  var name = nameInput.toLowerCase();

    if (name !== '' && checkedLanguage) {
      if (map[name] === undefined){
        map[name] = 0;
      }
      for (var name in map) {
        if (map[name] !== name) {
          map[name] = 0;
        }
      }
    }
  console.log(map);
  }

  function returnMap() {
    return map;
  }

  function counter() {
    greetCount = Object.keys(map).length;
    return greetCount;
    }

  function alert(nameInput, checkedLanguage) {
    if (!nameInput && !checkedLanguage) {
      return "Please enter your name and select a language!"
    }
    else if (nameInput === "") {
        return "Please enter your name!"
//change return string response. This one is for testing purposes.
    }
    else if (!checkedLanguage) {
      return "Please select a language!"
//change return string response. This one is for testing purposes.
    }
    else {
      return "";
    }
    }

  function greetPerson(checkedLanguage, nameInput) {
    var greet = ''
      if (checkedLanguage === "english") {
        greet = "Hello ";
      }
      if (checkedLanguage === "sesotho") {
        greet = "Dumela ";
      }
      if (checkedLanguage === "french") {
        greet = "Bonjour ";
      }
      if (checkedLanguage && nameInput) {
        return greet + nameInput;
      }
      else {
        return "";
      }
  }

return {
  storeMap,
  assignName,
  returnMap,
  greetPerson,
  counter,
  alert
}
}
