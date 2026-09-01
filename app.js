const personForm = document.getElementById('personForm');
const personInput = document.getElementById('personInput');
const peopleList = document.getElementById('peopleList');

const expenseForm = document.getElementById('expenseForm');
const descInput = document.getElementById('descInput');
const amountInput = document.getElementById('amountInput');
const paidBySelect = document.getElementById('paidBySelect');
const expenseList = document.getElementById('expenseList');


const totalSpent = document.getElementById('totalSpent');
const SplitAmount = document.getElementById('splitAmount');
const summaryList = document.getElementById('summaryList');

const people = [];
const expenses = [];

const render = () => {
    peopleList.innerHTML = '';
    paidBySelect.innerHTML ='';

    people.forEach(person => {
        const li = document.createElement('li');
        li.textContent = person;
        peopleList.appendChild(li)

        const option = document.createElement('option');
        option.value = person;
        option.textContent = person;
        paidBySelect.appendChild(option);


    })
}

personForm.addEventListener('submit', event =>{
    event.preventDefault()

    const name = personInput.value.trim();

    if(!name) return;

    people.push(name);
    personInput.value ='';

    render();
})
render();