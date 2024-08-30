function showTabLanguage(index) {
    var tabs = document.querySelectorAll('.language-tab');
    var contentTabs = document.querySelectorAll('.language__cards-tab');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        contentTabs[i].classList.toggle('hidden', i !== index);
    })
}