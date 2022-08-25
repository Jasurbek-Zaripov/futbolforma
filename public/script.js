const btnForChangelang = document.querySelector("#changeBtn");
const changeModeBtn = document.querySelector("#changeModeBtn");

function changeLang() {
    if (document.documentElement.lang == 'ru') document.documentElement.lang = 'uz';
    else document.documentElement.lang = 'ru';
}

btnForChangelang.onclick = changeLang;
changeModeBtn.onclick = () => {
    document.body.classList.toggle('dark');
};