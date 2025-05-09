const body = document.querySelector("body")

class keyObject {
    constructor(code) {
        this.code = code
        this.element = document.querySelector(`#${this.code}`);
    }
}

async function getKeys() {
    try {
        await axios.get('/keys/get')
            .then(function (response) {
                let keyIDs = response.data.keys

                const keyObjectArr = keyIDs.map((obj) => {
                    return new keyObject(obj.code)
                })

                generateKeyListeners(keyObjectArr)
            })
            .catch(function (error) {
                console.log("Failed to get keys ", error);
            })
    } catch (e) {
        console.log("Couldn't make api call", e)
    }
}

function generateKeyListeners(objArr) {
    objArr.forEach(obj => {
        body.addEventListener("keydown", (e) => {
            if (e.code === obj.code && e.key.length === 1) {
                obj.element.classList.add("is-pressed")

                if (e.code === "Space")
                    checkIfPressed("Space")
                else
                    checkIfPressed(e.key)
            }
        })

        body.addEventListener("keyup", (e) => {
            if (e.code === obj.code) {
                obj.element.classList.remove("is-pressed")
            }
        })
    });
}


function checkIfPressed(pressedChar) {
    try {
        let currentChar = document.querySelector(".not-pressed")
        currentChar.classList.remove("next")

        if (pressedChar === currentChar.textContent)
            currentChar.classList.remove("not-pressed")
        if (pressedChar === "Space" && currentChar.classList.contains("Space"))
            currentChar.classList.remove("not-pressed")

        let nextChar = document.querySelector(".not-pressed")
        nextChar.classList.add("next")

    } catch (e) {
        typeHereContainer.innerHTML = ""
        getFillerParagraph()
    }
}

getKeys()

/*=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

const typeHereContainer = document.querySelector("#type-here-container")
const textCursor = document.querySelector("#text-cursor")

function generateTextElements(String) {
    let spanArray = []

    for (let i = 0; i < String.length; i++) {
        const span = document.createElement("span")
        span.textContent = String[i]

        if (String[i] === " ") {
            span.innerHTML = "&nbsp;"
            span.classList.add("Space")
        }

        span.classList.add("not-pressed")
        spanArray.push(span)
    }

    return spanArray
}

function beginTypeAnimation(titleContainer, spanArray) {
    const totalTime = (spanArray.length * 50)
    let i = 0

    const intervalID = setInterval(() => {
        if (spanArray[i]) {
            titleContainer.append(spanArray[i])
            i++
        }
    }, 10)

    setTimeout(() => {
        clearInterval(intervalID)
    }, totalTime)
}

/*=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

async function getFillerParagraph() {
    axios.get("https://baconipsum.com/api/?type=meat-and-filler&sentences=2")
        .then(res => { return generateTextElements(res.data[0]) })
        .then(res => { beginTypeAnimation(typeHereContainer, res) })
}

getFillerParagraph()