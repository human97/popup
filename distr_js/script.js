'use strict';

function popUpShow() {
    if (document.cookie != "visit='pop-up был скрыт пользователем'") {
        document.querySelector('.popup__wrap').classList.remove('hide');
        document.onkeydown = function (e) {
            if (e.keyCode == 27) popUpClose();
        };
        document.querySelectorAll('.popup__close').forEach(function (e) {
            e.onclick = popUpClose;
        });
    }
}

setTimeout(popUpShow, 3000);

function popUpClose() {
    document.querySelector('.popup__wrap').classList.add('hide');
    document.onkeydown = null;
    var date = new Date(new Date().getTime() + 24 * 3600 * 1000);
    document.cookie = "visit='pop-up был скрыт пользователем'; path=/; expires=" + date.toUTCString();
}

document.querySelector('.popup').onclick = function (event) {
    event.stopPropagation();
};