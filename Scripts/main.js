let myImage = document.querySelector("img");

myImage.onclick = function()
{
    let mySrc = myImage.getAttribute("src");
    if(mySrc === "Images/MILLENNIUM.png")
    {
        myImage.setAttribute("src", "Images/chair.png");
    }
    else
    {
        myImage.setAttribute("src", "Images/MILLENNIUM.png");
    }
}

let myBnt = document.querySelector('button');
let myHead = document.querySelector('a');

function SetUserName()
{
    let myName = prompt("Enter the name");
    while(!myName || myName === null)
    {
        myName = prompt("다시");
    }
    localStorage.setItem("name", myName);
    myHead.textContent = myHead.textContent + " " + myName;
}

if(!localStorage.getItem('name'))
{
    SetUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHead.textContent = myHead.textContent + " " + storedName;
}

myBnt.onclick = function ()
{
    SetUserName();
}