


function submitFunction() {
    localStorage.setItem("firstName", document.getElementById('firstName').value)
    localStorage.setItem("lastName", document.getElementById('lastName').value)
    var firstName = localStorage.getItem("firstName")
    var lastName = localStorage.getItem("lastName")
    console.log("localstorage" ,  firstName + " " + lastName)
}



function sessionStorageFunction() {
    sessionStorage.setItem("firstName", document.getElementById('firstName').value)
    sessionStorage.setItem("lastName", document.getElementById('lastName').value)
    var firstName = sessionStorage.getItem("firstName")
    var lastName = sessionStorage.getItem("lastName")
    console.log("session storage", firstName + " " + lastName)
}