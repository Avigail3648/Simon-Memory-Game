const iName = document.querySelector("#iName")
const iPassword = document.querySelector("#iPassword")
const tPassword = document.querySelector("#tPassword")
const iPhon = document.querySelector("#iPhon")
const email = document.querySelector("#email")
const bNewUser = document.querySelector("#bNewUser")
const form = document.querySelector("#form")
const users = JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const obj = { "name": iName.value, "password": iPassword.value, "win": 0, "lose": 0 }
    const found = users.find((user) => (user.name === iName.value && user.password === iPassword.value))
    if (found) {
        alert("הינך כבר רשום במערכת")
        localStorage.setItem("currentUser", JSON.stringify(obj))
        window.location.href = "../html/allGame.html"
    }
    else if (iPassword.value === tPassword.value) {
        users.push(obj)
        localStorage.setItem("users", JSON.stringify(users))
        localStorage.setItem("currentUser", JSON.stringify(obj))
        window.location.href = "../html/allGame.html"
    }
    else {
        alert("אימות סיסמא שגוי")
    }
})