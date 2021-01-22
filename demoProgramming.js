var firstName, lastName, employeeId, email, jobRole, project, address = ""
var isEmpty = false;
var emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
var empDetails = []


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
    //invalid email validation
    isValidEmail = emailRegexp.test(email)
    //if all validation pass then data will be saved successfully else throw error message
    if(!isEmpty && isValidEmail && !isNaN(employeeId)){
        alert("Data saved")
        saveDetails(firstName, lastName, employeeId, email, jobRole, project, address)
    }else if(isNaN(employeeId)){
        alert('Employee Id should be numerical')
    }else if(!isValidEmail){
        alert('Invalid Email Id')
    }
    
}

function saveDetails(firstName, lastName, employeeId, email, jobRole, project, address){
    var obj;
    obj['firstName'] = firstName
    obj['lastName'] = lastName
    obj['employeeId'] = employeeId
    obj['email'] = email
    obj['jobRole'] = jobRole
    obj['project'] = project
    obj['address'] = address
    empDetails.push(obj)
    console.log(empDetails)

    var tbody = document.getElementById('empTableBody')
    var tr = document.createElement('tr')
        for(var key in obj){
            var td = document.createElement('td')
            td.innerHTML = obj[key]
            tr.appendChild(td)
        }
        tbody.appendChild(tr)
}

function resetValues() {
    document.getElementById('firstName').value = ""
    document.getElementById('lastName').value = ""
    document.getElementById('employeeId').value = ""
    document.getElementById('email').value = ""
    document.getElementById('jobRole').value = ""
    document.getElementById('project').value = ""
    document.getElementById('address').value = ""
}