async function getUsers() {
    let response = await fetch('/users?results=100');
    let users = await response.json();
    console.log(users[0])
    
    for (let user of users) {
        ListUsers(user)
        console.log(user);
    }
}

function ListUsers(user) {
    const table = document.querySelector("table")
    const row = table.insertRow(-1)
    const cell1 = row.insertCell(0)
    const cell2 = row.insertCell(1)
    const cell3 = row.insertCell(2)
    const cell4 = row.insertCell(3)
    const cell5 = row.insertCell(4)

    cell1.innerHTML = user.name.first
    cell2.innerHTML = user.name.last
    cell3.innerHTML = user.login.username
    cell4.innerHTML = user.email
    cell5.innerHTML = user.phone

    row.classList.add("bruker-row")
    row.addEventListener("click", () => {
        let pfp = document.getElementById("brukerPfp")
        let fname = document.getElementById("brukerFornavn")
        let lname = document.getElementById("brukerEtternavn")
        let username = document.getElementById("brukerBrukernavn")
        let email = document.getElementById("brukerEpost")
        let phone = document.getElementById("brukerTelefon")
        let street = document.getElementById("brukerStreet")
        pfp.src = user.picture.large
        fname.innerHTML = "Fornavn: " + user.name.first
        lname.innerHTML = "Etternavn: " + user.name.last
        username.innerHTML = "Brukernavn: " + user.login.username
        email.innerHTML = "Epost: " + user.email
        phone.innerHTML = "Telefon: " + user.phone
        street.innerHTML = "Addresse" + user.location.street.name
    })
}

getUsers()
