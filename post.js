function post() {
    const titleEl = document.querySelector("#titlePost");
    localStorage.setItem("titlePost", titleEl.value);

    window.location.href = "findquestions.html";
}

