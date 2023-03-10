function post() {
    const titleEl = document.querySelector("#textTitle");
    localStorage.setItem("questionTitle", titleEl.value);
    window.location.href = "findquestions.html";
}

//login -> post
//nameEl -> titleEl
//#name -> textTitle
//userName -> questionTitle
