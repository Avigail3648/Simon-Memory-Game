const iName = document.querySelector("#iName")
const iPassword = document.querySelector("#iPassword")
const bNewUser = document.querySelector("#bNewUser")
const form = document.querySelector("#form")
const users = JSON.parse(localStorage.getItem("users")) || []
const b = document.querySelector("#b")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const found = users.find((user) => user.name === iName.value && user.password === iPassword.value)
    if (!found) {
        alert("אינך רשום במערכת, נא נסה שוב או הכנס כמשתמש חדש")
    }
    else {
        localStorage.setItem("currentUser", JSON.stringify(found))
        window.location.href = "../html/allGame.html"
    }
})

b.addEventListener("click", (e) => {
    e.preventDefault()
    window.location.href = "../html/signIn.html"
})