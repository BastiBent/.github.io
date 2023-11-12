/*const myHeading = document.querySelector("h1"); 
// querySelector verweist auf einen Bereich -> hier H1
myHeading.textContent = "Hello World!"

Irgendwo clicken und PopUp fenster erscheint
document.querySelector("html").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});*/

let myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "C:\Users\Basti B\Desktop\web-projects\images\test-side\emoji-test.jpg") {
    myImage.setAttribute("src", "C:\Users\Basti B\Desktop\web-projects\test-side\cat.jpg");
  } else {
    myImage.setAttribute("src", "C:\Users\Basti B\Desktop\web-projects\images\test-side\emoji-test.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please, enter your Name:");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Chrome is cool, ${myName}`;
    }
}
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Chrome is cool, ${storedName}`;
}
myButton.onclick = () => {
  setUserName();
};
