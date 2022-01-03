function refreshSite() {
    window.location.reload();
}

let darkmode = true;

function changeDarkmode() {
    switch (darkmode) {
        case true:
            document.querySelector("body").style.background = "rgb(200, 200, 200)"
            darkmode = false;
            break;
        case false:
            document.querySelector("body").style.background = "rgb(10,10,10)"
            darkmode = true;
            break;
    }
}

function hideall() {
    document.getElementById("startseite").style.display = "none";
    document.getElementById("ragemptab").style.display = "none";
    document.getElementById("altvtab").style.display = "none";
    document.getElementById("fivemtab").style.display = "none";
    document.getElementById("partnertab").style.display = "none";
    document.getElementById("uberunstab").style.display = "none";
}

function showstart() {
    hideall()
    document.getElementById("startseite").style.display = "block";
}

function showragemp() {
    hideall()
    document.getElementById("ragemptab").style.display = "block";
}

function showaltv() {
    hideall()
    document.getElementById("altvtab").style.display = "block";
}

function showfivem() {
    hideall()
    document.getElementById("fivemtab").style.display = "block";
}

function showpartner() {
    hideall()
    document.getElementById("partnertab").style.display = "block";
}

function showueberuns() {
    hideall()
    document.getElementById("uberunstab").style.display = "block";
}