const personForm = document.getElementById('personForm');
const personInput = document.getElementById('personInput');
const peopleList = document.getElementById('peopleList');


const people = ['John', 'Carlos', 'Maria'];

const render = () => {
    peopleList.innerHTML = '';

    people.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person;
        peopleList.appendChild(li)

        
    })
}
render();