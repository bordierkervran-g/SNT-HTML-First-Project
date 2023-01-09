const bodyCour = document.getElementById("body_cour");
const bodyMy = document.getElementById("body_my");
const chooseButton = document.getElementById("choose_button");

bodyCour.style.display = "block";
bodyMy.style.display = "none";

chooseButton.addEventListener("change", function () {
    if (this.checked) {
        bodyCour.style.display = "none";
        bodyMy.style.display = "block";
    } else {
        bodyCour.style.display = "block";
        bodyMy.style.display = "none";
    }
});
