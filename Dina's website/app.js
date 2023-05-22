let firstName = document.getElementById("firstName")
let lastName = document.getElementById("lastName")
let userName = document.getElementById("userName")
let password = document.getElementById("password")
//
let inputEmail = document.getElementById("inputEmail")
let labelEmail = document.getElementById("labelEmail")
let logInBtn = document.querySelector(".login")
let updatedContent = document.querySelector(".content")
let formMap = document.querySelector(".form-map")
let footer = document.querySelector(".footer")

function firstNameCheck() {
  let firstNameInput = firstName.value
  console.log(firstNameInput)
  for (let i = 0; i < firstNameInput.length; i++) {
    if (
      firstNameInput[0] == firstNameInput[0].toUpperCase() &&
      firstNameInput.length > 3
    ) {
      console.log("Unos imena je dobar")
    } else {
      console.log("Unos imena nije dobar")
      document.querySelector(".ime").innerHTML = "Uneto ime nije dobro"
    }
  }
}

function lastNameCheck() {
  let lastNameInput = lastName.value
  console.log(lastNameInput)
  for (let i = 0; i < lastNameInput.length; i++) {
    if (
      lastNameInput[0] == lastNameInput[0].toUpperCase() &&
      lastNameInput.length > 4
    ) {
      console.log("Unos prezimena je dobar")
    } else {
      document.querySelector(".prezime").innerHTML = "Uneto ime nije dobro"
      console.log("Unos prezimena je los")
    }
  }
}

function userNameCheck() {
  let userNameInput = userName.value
  console.log(userNameInput)
  for (let i = 0; i < userNameInput.length; i++) {
    if (userNameInput.length !== 4) {
    }
    document.querySelector(".korisnicko-ime").innerHTML =
      "Uneto korisnicko ime mora biti duze od 4 karakt"
    if (userNameInput[0] !== userNameInput[0].toUpperCase()) {
    }
    document.querySelector(".korisnicko-ime").innerHTML =
      "Vase korisnicko ime mora zadrzati prvo slovo veliko"
    if (userNameInput[1] !== ".") {
      document.querySelector(".korisnicko-ime").innerHTML =
        "Vase korisnicko ime mora zadrzati tacku(.) posle prvog velikog slova"
    }
    if (userNameInput.slice(2).toUpperCase() !== userNameInput.slice(2)) {
      document.querySelector(".korisnicko-ime").innerHTML =
        "Jedno od Vasa dva poslednja slova mora biti veliko slovo"
    } else console.log("Uneli ste dobro korisnicko ime")
  }
}

// function emailCheck() {
//   let inputValue = inputEmail.value
//   inputEmail.value = ""
//   if (inputValue.includes("@")) {
//     inputEmail.placeholder = "Uspesno ste uneli email"
//     // document.body.removeChild(document.body.firstChild)
//     formMap.classList.add("displayNone")
//     footer.classList.add("displayNone")
//     updatedContent.style.marginTop = "25rem"

//     updatedContent.innerHTML = `<h2>Congratulations!</h2>
//   <p>You've signed up succesesfuly!</p>
//   <p class="fine-print">We'll never share your information without your permission</p>`
//   } else if (inputValue === "") {
//     inputEmail.placeholder = "Unesite email"
//   } else {
//     inputEmail.placeholder = "Pogresno ste uneli email"
//     inputEmail.classList.add("incorrect")
//     labelEmail.classList.add("incorrect")
//     inputEmail.classList.add("incorrect")
//   }
// }

function emailCheck() {
  let emailInput = inputEmail.value
  let regex = /^[a-zA-Z.-]+@[a-zA-Z]+\.[a-zA-Z]+$/
  if (regex.test(emailInput)) {
    // document.body.removeChild(document.body.firstChild)
    formMap.classList.add("displayNone")
    footer.classList.add("displayNone")
    updatedContent.style.marginTop = "25rem"

    updatedContent.innerHTML = `<h2>Congratulations!</h2>
  <p>You've signed up succesesfuly!</p>
  <p class="fine-print">We'll never share your information without your permission</p>`
  } else {
    document.querySelector(".imejl").innerHTML = "Niste dobro uneli email"
    console.log("Niste dobro uneli email")
  }
}

function checkPassword() {
  let inputPassword = password.value
  const upperCaseRegex = /[A-Z]/
  const specialCharRegex = /[!@#$%^&*:"']/

  if (inputPassword.length < 8) {
    document.querySelector(".imejl").innerHTML =
      "Sifra mora imate vise od 8 karaktera"
  }
  if (!upperCaseRegex.test(inputPassword)) {
    document.querySelector(".imejl").innerHTML =
      "Sifra mora imati barem jedno veliko slovo"
  }

  if (!specialCharRegex.test(inputPassword)) {
    document.querySelector(".imejl").innerHTML =
      "Sifra mora imati barem jedan specijalni karakter"
  }
  console.log("Sifra je dobra")
}

if (logInBtn) {
  logInBtn.addEventListener("click", function () {
    firstNameCheck()
    lastNameCheck()
    userNameCheck()
    emailCheck()
    checkPassword()
  })
}

/* Ime: mora pocinjati velikim slovom i mora sadrzati vise od 3 slova
Prezime: mora pocinjati velikim slovom i sadrzati vise od 4 slova
Kor. ime: mora sadrzati prvo slovo veliko, potom znak tacka i potom jos 
2 karaktera od kojih je drugi odnosno poslednji opet veliko slovo 
Email: Nekoliko slova i barem jedan znak. Moze doci i srednja crta
ili tacka od znakova, nakon cega dolazi znak '@', nakon koga dolazi
nekoliko karaktera '.', pa nekoliko karaktera
Sifra: Lozinka mora sadrzati barem jedno veliko slovo bilo gde.
Mora biti duza od 8 karaktera i da ima barem jedan znak

*/
