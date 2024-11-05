const billTotalInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeople = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')


let numberOfPeopleDiv = Number(numberOfPeople.innerText)


const calculateBill = () => {
  const bill = Number(billTotalInput.value)
  const tipPercentage = Number(tipInput.value) / 100
  const tipAmount = bill * tipPercentage
  const total = tipAmount + bill
  const grandTotal = total / numberOfPeopleDiv
  perPersonTotal.innerText = `$${grandTotal.toFixed(2)}`
}

const increasePeople = () => {
  numberOfPeopleDiv += 1
  numberOfPeople.innerText = numberOfPeopleDiv

  calculateBill()
}

const decreasePeople = () => {

  if(numberOfPeopleDiv <= 1) {
    return
  }

  numberOfPeopleDiv -= 1
  numberOfPeople.innerText = numberOfPeopleDiv

  calculateBill()
}