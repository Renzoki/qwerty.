const aKey = document.querySelector("#a")

window.addEventListener("keydown", (e) => {
    if (e.key === "a" || e.key === "A") {
        aKey.classList.add("has-background-warning")
    }
})

window.addEventListener("keyup", (e) => {
    if (e.key === "a" || e.key === "A") {
        aKey.classList.remove("has-background-warning")
    }
})