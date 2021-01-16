var firstName, lastName, employeeId, email, jobRole, project, address = ""
var isEmpty = false
var emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

function fetchFieldValues() {
    firstName = document.getElementById('firstName').value
    lastName = document.getElementById('lastName').value
    employeeId = document.getElementById('employeeId').value
    email = document.getElementById('email').value
    jobRole = document.getElementById('jobRole').value
    project = document.getElementById('project').value
    address = document.getElementById('address').value
}

function emptyFieldValidations() {
    if(firstName === ""){
        alert("First Name should not be empty")
        return true
    }else if(lastName === ""){
        alert("Last Name should not be empty")
        return true
    }else if(employeeId === ""){
        alert("Employee Id should not be empty")
        return true
    }else if(email === ""){
        alert("Email should not be empty")
        return true
    }else if(jobRole === ""){
        alert("Job Role should not be empty")
        return true
    }else if(project === ""){
        alert("Project should not be empty")
        return true
    }else if(address === ""){
        alert("Address should not be empty")
        return true
    }else{
        return false
    }
}

function validateForm() {
    //fetch all field values
    fetchFieldValues()
    //empty field validation
    isEmpty = emptyFieldValidations()
    isValidEmail = emailRegexp.test(email)
    if(!isEmpty && isValidEmail && !isNaN(employeeId)){
        alert("Data saved")
    }else if(isNaN(employeeId)){
        alert('Employee Id should be numerical')
    }else if(!isValidEmail){
        alert('Invalid Email Id')
    }
    
}





//localstorage and session storage demo functions

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