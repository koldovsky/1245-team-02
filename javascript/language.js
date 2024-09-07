function showTabLanguage(index) {
    const tabs = document.querySelectorAll('.language-tab');
    const contentTabs = document.querySelectorAll('.language__cards-tab');

    tabs.forEach((tab, i) => {
        tab.classList.toggle('active', i === index);
        contentTabs[i].classList.toggle('hidden', i !== index);
    })
}

const ukrTab = document.querySelector('.ukr-tab');
ukrTab.addEventListener('click', () => showTabLanguage(0));

const frTab = document.querySelector('.fr-tab');
frTab.addEventListener('click', () => showTabLanguage(1));

const esTab = document.querySelector('.es-tab');
esTab.addEventListener('click', () => showTabLanguage(2));

const cnTab = document.querySelector('.cn-tab');
cnTab.addEventListener('click', () => showTabLanguage(3));

const enTab = document.querySelector('.en-tab');
enTab.addEventListener('click', () => showTabLanguage(4));
