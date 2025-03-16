// const aKey = document.querySelector("#a")

// window.addEventListener("keydown", (e) => {
//     if (e.code === "KeyA") {
//         aKey.classList.add("has-background-warning")
//     }
//     console.log(e.code)
// })

// window.addEventListener("keyup", (e) => {
//     if (e.code === "KeyA") {
//         aKey.classList.remove("has-background-warning")
//     }
// })

const body = document.querySelector("body")
class keyObject {
    constructor(name, code) {
        this.name = name
        this.code = code
        this.element = document.querySelector(`#${this.name}`);
    }
}

function generateKeyListeners(objArr) {
    objArr.forEach(obj => {
        body.addEventListener("keydown", (e) => {
            if (e.code === obj.code) {
                obj.element.classList.add("has-background-warning")
                console.log(e.code)
            }
        })

        body.addEventListener("keyup", (e) => {
            if (e.code === obj.code)
                obj.element.classList.remove("has-background-warning")
        })
    });
}

const a = new keyObject("a", "KeyA")
const b = new keyObject("b", "KeyB")
const c = new keyObject("c", "KeyC")

generateKeyListeners([a, b, c])
