function post() {
    const titleEl = document.querySelector("#title");
    localStorage.setItem("questionTitle", titleEl.value);
    window.location.href = "findquestions.html";
}