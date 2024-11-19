//let myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello World!";

//add An image switcher
let myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/firefox-icon.png")
        myImage.setAttribute("src", "images/firefox-icon2.png");
    else
        myImage.setAttribute("src", "images/firefox-icon.png");
};

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

let setUserName = function () {
    let myName = prompt("请输入你的名字:");
    if (!myName)
        setUserName();
    else {
        localStorage.setItem("name", myName);
        myHeading.textContent = "Mozilla COOL, " + myName;
    }
}

if (!localStorage.getItem("name"))
    setUserName();
else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla COOL, " + storedName;
}

myButton.onclick = function () {
    setUserName();
}

document.addEventListener("mousemove", (event) => {
    let element = document.elementFromPoint(event.clientX, event.clientY);
    if (element) {
        let color = window.getComputedStyle(element).color;
        let rgb = color.match(/\d+/g);
        if (rgb && rgb[0] > 200 && rgb[1] < 50 && rgb[2] < 50) {
            alert("你的鼠标在红色文字上!");
        }
        else if(rgb && rgb[0] > 200 && rgb[1] > 200 && rgb[2] > 200 ){
            alert("你的鼠标在白色文字上!");
        }
    }
}
);