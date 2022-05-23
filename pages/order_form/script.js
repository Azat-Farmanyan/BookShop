const form = document.getElementById('form')
const name = document.getElementById('name')
const surname = document.getElementById('surname')
const deliveryDate = document.getElementById('delivery-date')
const street = document.getElementById('street')
const houseNumber = document.getElementById('house-number')
const flatNumber = document.getElementById('flat-number')


form.addEventListener('submit', e => {
   e.preventDefault()

   validateInputs()
})

function setError(element, message) {
   const inputControl = element.parentElement
   const errorDisplay = inputControl.querySelector('.error')

   errorDisplay.innerText = message
   inputControl.classList.add('error')
   errorDisplay.style.marginBottom = '10px'

   inputControl.classList.remove('success')
}

function setSuccess(element) {
   const inputControl = element.parentElement
   const errorDisplay = inputControl.querySelector('.error')

   errorDisplay.innerText = ''
   inputControl.classList.add('success')
   errorDisplay.style.marginBottom = '0px'

   inputControl.classList.remove('error')
}

function validateInputs() {
   const nameValue = name.value.trim()
   const surnameValue = surname.value.trim()
   const deliveryDateValue = deliveryDate.value.trim()
   const streetValue = street.value.trim()
   const houseNumberValue = houseNumber.value.trim()
   const flatNumberValue = flatNumber.value.trim()


   // Name Validation 
   if (nameValue === '') {
      setError(name, 'Name is required')
   }
   else if (nameValue.length < 4) {
      setError(name, 'Length is less than 4 symbols')
   }
   else if (!nameValue.toLowerCase().split('').every(el => {
      return el.charCodeAt() > 96 & el.charCodeAt() < 123 || el.charCodeAt() === 32
   })) {
      setError(name, 'Enter only alphabetic value')
   }
   else {
      setSuccess(name)
   }

   // Surname Validation 
   if (surnameValue === '') {
      setError(surname, 'Surname is required')
   }
   else if (surnameValue.length < 5) {
      setError(surname, 'Length is less than 5 symbols')
   }
   else if (!surnameValue.toLowerCase().split('').every(el => {
      return el.charCodeAt() > 96 & el.charCodeAt() < 123 || el.charCodeAt() === 32
   })) {
      setError(surname, 'Enter only alphabetic value')
   }
   else {
      setSuccess(surname)
   }


   // Delivery Date Validation 
   const deliveyDayFromOrder = deliveryDateValue.split('-')
   const today = new Date()
   const delivetDateMIlliseconds = new Date()
   delivetDateMIlliseconds.setFullYear(+deliveyDayFromOrder[0])
   delivetDateMIlliseconds.setMonth(+deliveyDayFromOrder[1] - 1)
   delivetDateMIlliseconds.setDate(+deliveyDayFromOrder[2])
   function checkDeliveyDate(delDate) {
      if (delDate.getTime() - today.getTime() < 86400) {
         return true
      } return false
   }
   if (deliveryDateValue === '') {
      setError(deliveryDate, 'Delivery date is required')
   }
   else if (checkDeliveyDate(delivetDateMIlliseconds)) {
      setError(deliveryDate, 'Delivery date must be not earlier than tommorow')
   }
   else {
      setSuccess(deliveryDate)
   }

   // Street Validation 
   if (streetValue === '') {
      setError(street, 'Street is required')
   }
   else if (streetValue.length < 5) {
      setError(street, 'Length is less than 5 symbols')
   }
   else {
      setSuccess(street)
   }

   // House number Validation 
   if (houseNumberValue === '') {
      setError(houseNumber, 'House number is required')
   }
   else if (+houseNumberValue < 0) {
      setError(houseNumber, 'Enter only positive numbers')
   }
   else {
      setSuccess(houseNumber)
   }

   // Flat number Validation 
   if (flatNumberValue === '') {
      setError(flatNumber, 'Flat number is required')
   }
   else if (flatNumberValue.startsWith('-')) {
      setError(flatNumber, 'Enter only positive numbers')
   }
   else if (!isNumber(flatNumberValue)) {
      setError(flatNumber, 'Enter only numbers (the dash symbol is allowed)')
   }
   else if (flatNumberValue.endsWith('-')) {
      setError(flatNumber, 'Number cannot end with a dash')
   }
   else {
      setSuccess(flatNumber)
   }
   function isNumber(a) {
      const result = a.split('')
         .map(char => char.charCodeAt())
         .every((charCode) => {
            return charCode > 47 & charCode < 58 || charCode === 45
         })
      return result
   }
}






const CompleteButton = document.querySelector(".complete-button");
document.getElementById("form").addEventListener("submit", (e) => {


   e.preventDefault();

   const orderForm = e.target;
   const personInfo = {
      name: firstCharToUppercase(orderForm.querySelector("#name").value),
      surname: firstCharToUppercase(orderForm.querySelector("#surname").value),
      deliveryDate: orderForm.querySelector("#delivery-date").value,
      street: orderForm.querySelector("#street").value,
      houseNumber: orderForm.querySelector("#house-number").value,
      flatNumber: orderForm.querySelector("#flat-number").value
   };

   function firstCharToUppercase(str) {
      if (str != '')
         return str[0].toUpperCase() + str.slice(1)
   }

   function renderModal(elem) {
      const htmlElement = `
      <div class="modal-block">
      <div class="modal-block-body">
         <img class="checked-icon" src="../../assets/icons/checked.png" alt="complete-icon">
         <h3 class="modal-title">The order created</h3>
         <p class="order-description">
            The delivery address is
            ${elem.street},
            house ${elem.houseNumber},
            flat ${elem.flatNumber}.
            Customer ${elem.name} ${elem.surname}.
         </p>
         <a class="back-to-main" href="https://azat-farmanyan.github.io/BookShop/pages/main/">
            <button close-modal class="modal-block-close-button" type="button">Back to main</button>
         </a>
      </div>
   </div>`;
      document.body.insertAdjacentHTML("beforeend", htmlElement);
   }

   const succesArray = form.querySelectorAll('.success')
   if (succesArray.length === 6) {
      renderModal(personInfo);
      window.addEventListener("click", (closeEvent) => {
         if (closeEvent.target.hasAttribute("close-modal")) {
            const card = document.querySelector(".modal-block");
            if (card != null) {
               document.body.removeChild(card);
            }
         }
      });
   }
});