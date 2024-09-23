import "../styles/main.css";

const ACCORDION_TRIGGER = ".accordion-header";
const triggers = document.querySelectorAll(ACCORDION_TRIGGER);

triggers.forEach((trigger) => {
  trigger.addEventListener("click", function () {
    this.classList.toggle("active");

    const content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
});
