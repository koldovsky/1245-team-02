document.querySelector(".tabs__labels").addEventListener("click", function (e){
    const tabLabel = e.target.closest(".tab__label");
    const tabsLabels = document.querySelectorAll(".tab__label");
    tabsLabels.forEach((tab) => tab.classList.remove("tab__label--active"));
    tabLabel.classList.remove("tab__label--disable");
    tabLabel.classList.add("tab__label--active");

    const lang = tabLabel.dataset.tabId;
    const tabsContent = document.querySelectorAll(".tab__content");
    const tabContent = document.querySelector(`.tab__content[data-tab-content="${lang}"]`);
    tabsContent.forEach((tabContent) => tabContent.classList.add("hidden"));
    tabContent.classList.remove("hidden");
})



