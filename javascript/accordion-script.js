const accordionItems = document.querySelectorAll(".contacts__accordion-item");
const formContainer = document.querySelector(".contacts__form-container");
const modalPopup = document.querySelector(".form__popup");

function openQuestionSection(event) {
  const currentItem = event.currentTarget;
  const accordionIcon = currentItem.querySelector(".contacts__accordion-icon");
  const accordionBody = currentItem.querySelector(
    ".contacts__accordion-collapse"
  );

  const isCurrentlyOpen = accordionIcon.classList.contains("show");

  accordionItems.forEach((item) => {
    const icon = item.querySelector(".contacts__accordion-icon");
    const body = item.querySelector(".contacts__accordion-collapse");
    icon.classList.remove("show");
    body.classList.remove("show");
  });

  if (!isCurrentlyOpen) {
    accordionIcon.classList.add("show");
    accordionBody.classList.add("show");
  }
}

accordionItems.forEach((item) => {
  item.addEventListener("click", openQuestionSection);
});

formContainer.addEventListener("submit", function (event) {
  event.preventDefault();

  formService();

  const fullName = document.getElementById("full-name").value;
  const phoneNumber = document.getElementById("phone-number").value;
  const email = document.getElementById("email").value;
  const language = document.getElementById("language").value;
  const course = document.getElementById("course").value;

  const formData = {
    fullName,
    phoneNumber,
    email,
    language,
    course,
  };

  fetch("https://formspree.io/f/movaboqr", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      modalPopup.classList.add("show");

      formService();
      formContainer.reset();
    })
    .catch((error) => {
      console.error("Error:", error);
      formService();
    });
});

function formService() {
  const submitBtn = document.querySelector(".contacts__form-submit-btn");
  const submitBtnText = document.querySelector(".contacts__form-text");
  const submitBtnCircle = document.querySelector(".load");
  

  submitBtn.hasAttribute("disabled")
    ? submitBtn.removeAttribute("disabled")
    : submitBtn.setAttribute("disabled", "");

  submitBtnText.classList.toggle("hide");
  submitBtnCircle.classList.toggle("show");
}

const popupButtons = document.querySelectorAll(
  ".form__popup-btn, .form__popup-close-btn"
);

popupButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modalPopup.classList.remove("show");
  });
});
