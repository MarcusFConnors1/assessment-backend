const addPrson = document.querySelector('#addPerson', addPerson)
const deletePrson = document.querySelector('#deletePerson', deletePerson)
const changePrson = document.querySelector('#changePerson', changePerson)

function addPerson(){
    const personInput = document.querySelector('#name');
    const body = {
        person: personInput.value
    }
    axios.post('http://localhost:4000/api/people/', body)
    .then(alert("person received"))
}
function deletePerson(){
    const persondInput = document.querySelector('#dltname')
    const person = persondInput.value
    axios.delete(`http://localhost:4000/api/people/${person}`)
    .then(alert('person deleted'))
}
function changePerson(){
    const ogpersonInput = document.querySelector('#ogname')
    const ogPerson = ogpersonInput.value
    const namecInput = document.querySelector('#chgname')
    const body = {
        newName: namecInput.value
    }
    axios.put(`http://localhost:4000/api/people/${ogPerson}`, body)
    .then(alert('person changed'))
}
changePrson.addEventListener('click', changePerson)
deletePrson.addEventListener('click', deletePerson)
addPrson.addEventListener('click', addPerson)