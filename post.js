function post() {

    const titleEl = document.querySelector("#title");
    localStorage.setItem("questionTitle", titleEl.value);

    const mainEl = document.querySelector("#form-comment");
    localStorage.setItem("questionMain", mainEl.value);

    window.location.href = "findquestions.html";
}