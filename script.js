// Select all numbers and operations, along w/ equals, all clear //

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operations]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

// how to store output //
class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear() 
    }
  }


clear() {
  this.currentOperand = ''
  this.previousOperand = ''
  this.operation = undefined
}

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return 
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }
  
  chooseOperation(operation) { 
    if (this.currentOperand  === '') return 
    if (this.previousOperand === '') {
      this.compute()
    }
  }

  compute() {
  }

  updateDisplay() {
  }



  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay(this.currentOperandTextElement.innerText = this.currentOperand)
    })
  })

  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })







