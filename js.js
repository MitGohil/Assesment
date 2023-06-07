let booking_choice = document.getElementById("booking_choice")
let choice_error = document.getElementById("choice_error")

let uname = document.getElementById("uname")
let uname_error = document.getElementById("uname_error")

let mo = document.getElementById("mo")
let mo_error = document.getElementById("mo_error")

let email = document.getElementById("email")
let email_error = document.getElementById("email_error")

let person = document.getElementById("person")
let person_error = document.getElementById("person_error")

let date = document.getElementById("date")
let date_error = document.getElementById("date_error")

let slot = document.getElementById("slot")
let slot_error = document.getElementById("slot_error")
let time = document.getElementById("time")
let time_error = document.getElementById("time_error")
let slot1 = document.getElementById("slot1")
let time1 = document.getElementById("time1")



function choice() {
    if (booking_choice.value == 0) {
        slot.style.display = "none";
        slot1.style.display = "none";
        time.style.display = "none";
        time1.style.display = "none";
    }
    else if (booking_choice.value == 1) {
        slot.style.display = "none";
        slot1.style.display = "none";
        time.style.display = "none";
        time1.style.display = "none";
    }
    else if (booking_choice.value == 2) {
        slot1.style.display = "block";
        slot.style.display = "block";
        time.style.display = "none";
        time1.style.display = "none";
    }
    else if (booking_choice.value == 3) {
        slot.style.display = "block";
        slot1.style.display = "block";
        time.style.display = "block";
        time1.style.display = "block";
    }
    else {
    }
}

function booking() {
    if (booking_choice.value == 0) {
        choice_error.innerHTML = "Please Select Your Booking Choice"
        event.preventDefault()
    }
    else {
        choice_error.innerHTML = ""
    }

    if (booking_choice.value == 2 && slot.value == 0) {
        slot_error.innerHTML = "Please choose your slot"
        time_error.innerHTML = ""
        event.preventDefault()
    }
    else if (booking_choice.value == 3 && slot.value == 0) {
        slot_error.innerHTML = "Please choose your slot"
        event.preventDefault()
    }
    else {
        slot_error.innerHTML = ""
    }

    if (booking_choice.value == 3) {
        if (time.value == "") {
            time_error.innerHTML = "Please enter your time"
            event.preventDefault()
        }
        else {
            time_error.innerHTML = ""
        }
    }


    if (uname.value == "") {
        uname_error.innerHTML = "Please Enter your Name"
        event.preventDefault()
    }
    else {
        uname_error.innerHTML = ""
    }

    if (mo.value == "") {
        mo_error.innerHTML = "Please enter your Mobile Number"
        event.preventDefault()
    }
    else if (isNaN(mo.value)) {
        mo_error.innerHTML = "Please enter only Numeric value"
        event.preventDefault()
    }
    else if (mo.value.length < 10) {
        mo_error.innerHTML = "Please enter valid Mobile number"
        event.preventDefault()
    }
    else {
        mo_error.innerHTML = ""
    }

    if (email.value == "") {
        email_error.innerHTML = "Please enter your Email"
        event.preventDefault()
    }
    else {
        email_error.innerHTML = ""
    }

    if (person.value == "") {
        person_error.innerHTML = "Please enter Person Count"
        event.preventDefault()
    }
    else if (person.value > 200) {
        person_error.innerHTML = "Our Restaurant capacity was 200 persons"
        event.preventDefault()
    }
    else if (person.value < 1) {
        person_error.innerHTML = "Please enter valid persons"
        event.preventDefault()
    }
    else {
        person_error.innerHTML = ""
    }

    if (date.value == "") {
        date_error.innerHTML = "Please choose booking date"
        event.preventDefault()
    }
    else {
        date_error.innerHTML = ""
    }




}

