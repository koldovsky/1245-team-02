const accordionItems = document.querySelectorAll(".contacts__accordion-item");

function openQuestionSection(event) {
  const currentItem = event.currentTarget;
  const accordionIcon = currentItem.querySelector(".contacts__accordion-icon");
  const accordionBody = currentItem.querySelector(".contacts__accordion-collapse");

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
