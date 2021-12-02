const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

document.querySelector('html') . onclick = function()
    {alert('stop poking me ');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png') {
      myImage.setAttribute('src','https://www.freeiconspng.com/thumbs/mozilla-firefox-icon/mozilla-firefox-icon-3.png');
    } else {
      myImage.setAttribute('src','https://upload.wikimedia.org/wikipedia/commons/e/e7/Mozilla_Firefox_3.5_logo_256.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
  function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
  }  