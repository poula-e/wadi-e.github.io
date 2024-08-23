function toggleIcons() {
    var iconBar = document.querySelector('.icon-bar');
    if (iconBar.style.display === "flex") {
        iconBar.style.display = "none";
    } else {
        iconBar.style.display = "flex";
    }
}