//title animation
function typeAnimation(displayString) {
    const displayChar = [...displayString]
    const totalTime = (displayChar.length * 150) + 150
    let i = 0

    const intervalID = setInterval(() => {
        title.textContent += displayChar[i]
        i++
    }, 150)

    setTimeout(() => {
        clearInterval(intervalID)
    }, totalTime)
}

function cursorAnimation() {
    let i = 0
    setInterval(() => {
        i++
        if (i % 2)
            textCursor.textContent = "_"
        else
            textCursor.textContent = ""
    }, 500)
}