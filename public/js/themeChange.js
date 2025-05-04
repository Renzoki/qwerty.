//character queue 
function enqueueCharacter(char) {
    characterQueue = characterQueue + char
    characterQueue.toLowerCase()
    checkThemeChange(characterQueue)
}

//check for theme change
function checkThemeChange(charArr) {
    if (charArr.indexOf("light") !== -1) {
        document.documentElement.style.setProperty("--keyBorderColor", "#393e41")
        document.documentElement.style.setProperty("--backgroundColor", "#f6f7eb")
        document.documentElement.style.setProperty("--keyPressColor", "#e94f37")
        characterQueue = ""
    } else if (charArr.indexOf("dark") !== -1) {
        document.documentElement.style.setProperty("--keyBorderColor", "#f8f7f9")
        document.documentElement.style.setProperty("--backgroundColor", "#151515")
        document.documentElement.style.setProperty("--keyPressColor", "#f2af29")
        characterQueue = ""
    }
}