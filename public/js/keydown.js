const body = document.querySelector("body")
const title = document.querySelector("#title")
const textCursor = document.querySelector("#textCursor")

let keyIDs = []

class keyObject {
    constructor(code) {
        this.code = code
        this.element = document.querySelector(`#${this.code}`);
    }
}

async function getKeys() {
    try {
        await axios.get('/getKeys')
        .then(function (response) {
            keyIDs = response.data.keys

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
            if (e.code === obj.code) {
                obj.element.classList.add("is-pressed")
            }
        })

        body.addEventListener("keyup", (e) => {
            if (e.code === obj.code) {
                obj.element.classList.remove("is-pressed")
                enqueueCharacter(e.key[0])
            }
        })
    });
}

getKeys()