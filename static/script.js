function showTab(tabId) {

    let sections =
        document.querySelectorAll(".content");

    sections.forEach(section => {
        section.classList.remove("active-content");
    });

    document
        .getElementById(tabId)
        .classList.add("active-content");

    let tabs =
        document.querySelectorAll(".tab");

    tabs.forEach(tab => {
        tab.classList.remove("active");
    });

    event.target.classList.add("active");
}