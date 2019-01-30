var Start;

function test(){
    Start = setTimeout(showPage,2500);
}

function showPage() {
    document.getElementById("loader").style.display="none";
    document.getElementById("after").style.display="block";
}