const body = document.querySelector("body")

const keyIDs = [
    { code: "Escape", label: "esc" },
    { code: "F1", label: "F1" }, { code: "F2", label: "F2" }, { code: "F3", label: "F3" }, { code: "F4", label: "F4" },
    { code: "F5", label: "F5" }, { code: "F6", label: "F6" }, { code: "F7", label: "F7" }, { code: "F8", label: "F8" },
    { code: "F9", label: "F9" }, { code: "F10", label: "F10" }, { code: "F11", label: "F11" }, { code: "F12", label: "F12" },
    { code: "PrintScreen", label: "print/scr" }, { code: "ScrollLock", label: "scroll lock" }, { code: "Pause", label: "pause break" },

    { code: "Backquote", label: "~" },
    { code: "Digit1", label: "1" }, { code: "Digit2", label: "2" }, { code: "Digit3", label: "3" }, { code: "Digit4", label: "4" },
    { code: "Digit5", label: "5" }, { code: "Digit6", label: "6" }, { code: "Digit7", label: "7" }, { code: "Digit8", label: "8" },
    { code: "Digit9", label: "9" }, { code: "Digit0", label: "0" },
    { code: "Minus", label: "-" }, { code: "Equal", label: "=" },
    { code: "Delete", label: "del" }
];

class keyObject {
    constructor(code) {
        this.code = code
        this.element = document.querySelector(`#${this.code}`);
    }
}

const keyObjectArr = keyIDs.map((obj) => {
    return new keyObject(obj.code)
})

function generateKeyListeners(objArr) {
    objArr.forEach(obj => {
        body.addEventListener("keydown", (e) => {
            if (e.code === obj.code) {
                console.log(obj)
                obj.element.classList.add("is-pressed")
            }
        })

        body.addEventListener("keyup", (e) => {
            if (e.code === obj.code)
                obj.element.classList.remove("is-pressed")
        })
    });
}

generateKeyListeners(keyObjectArr)