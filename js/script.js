const popUpClose = () => {
    document.querySelector('.popup__wrap').classList.add('hide')
    document.onkeydown = null
    let date = new Date(new Date().getTime() + 24 * 3600 * 1000)
    document.cookie = "visit='pop-up был скрыт пользователем'; path=/; expires=" + date.toUTCString()
}

const popUpShow = () => {
    if (document.cookie !== "visit='pop-up был скрыт пользователем'") {
        document.querySelector('.popup__wrap').classList.remove('hide')
        document.onkeydown = (e) => {
            if (e.keyCode === 27) {
                popUpClose()
            }
        }
        document.querySelectorAll('.popup__close').forEach((e) => {
            e.addEventListener('click', popUpClose)
        })
    }
}

setTimeout(popUpShow(), 3000)

document.querySelector('.popup').addEventListener('click', (e) => {
    e.stopPropagation()
})
