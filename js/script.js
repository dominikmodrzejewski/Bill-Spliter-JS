const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')

const countBtn = document.querySelector('.count')
const errorText = document.querySelector('.error')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const showBill = () => {
	if (price.value !== '' || (people.value !== '' && tip.value !== '')) {
		errorText.textContent = ''
		countBill()
	} else {
		errorText.textContent = 'Uzupełnij wszystkie pola'
		costInfo.style.display = 'none'
	}
}
const countBill = () => {
	const priceValue = parseInt(price.value)
	const peopleValue = parseInt(people.value)
	const tipValue = parseFloat(tip.value)

	const sum = (priceValue + priceValue * tipValue) / peopleValue

	cost.textContent = sum.toFixed(2)

	costInfo.style.display = 'block'
}

countBtn.addEventListener('click', showBill)
