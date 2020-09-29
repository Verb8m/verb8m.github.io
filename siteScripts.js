function setTitle(textIn) {
    document.getElementById("mainsubtitle").textContent = textIn;
}

function setpage1(thisFrame) {
    setTitle("Home Page");
    thisFrame.src = "homepage.html";
    thisFrame.style.height = '372px';
}

function setpage2(thisFrame) {
    setTitle("Software");
    thisFrame.src = "software.html";
    thisFrame.style.height = '500px';
}

function setpage3(thisFrame) {
    setTitle("Music");
    thisFrame.src = "music.html";
    thisFrame.style.height = '372px';
}

function setpage4(thisFrame) {
    setTitle("Other");
    thisFrame.src = "other.html";
    thisFrame.style.height = '500px';
}

