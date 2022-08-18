const numpad = document.querySelector('.numpad')
const numOp = document.querySelector('.numOp')
const operators = document.querySelector('.operators')
const clear = document.querySelector('.clear')
const equal = document.querySelector('.equal')
let number1 = '';
let number2 = '';
let opNumber = '';

for (let i = 0; i < 10; i++) {
  const button = document.createElement('button')
  button.setAttribute('id', `number${i}`)
  button.setAttribute('class', 'numbers')
  button.textContent = i
  numpad.append(button) 
}

for (let i = 0; i < 4; i++) {
  const button = document.createElement('button')
  button.setAttribute('id', `operator${i}`)
  button.setAttribute('class', 'operator')
  
  switch (i){
    case 0:
      button.textContent = '+';
      break;
    case 1:
      button.textContent = '-';
      break;
    case 2:
      button.textContent = '*';
      break;
    case 3:
      button.textContent = '/';
      break; 
  }
  operators.append(button)
}

for (let i = 0; i < 2;i++ ){

  const clearBtn = document.createElement('button')
  clearBtn.setAttribute('class', 'clearBtns')
  switch (i){
    case 0: 
      clearBtn.textContent = 'AC'
      clearBtn.id = 'AC'
      break;
    case 1: 
      clearBtn.textContent = 'C'
      clearBtn.id = 'C'
      break;
  }
  clear.append(clearBtn)
}

const numButtons = numpad.querySelectorAll('.numbers')
numButtons.forEach(numButton => {
  numButton.addEventListener('click', (e) => {
    if (opNumber == ''){
      if (numOp.textContent == 0 && e.target.textContent != 0){
        numOp.textContent = ''
        numOp.textContent += (e.target.textContent);
        console.log(e.target.textContent)
      }
      else if (numOp.textContent != 0){
        numOp.textContent += (e.target.textContent);
        console.log(e.target.textContent)
      }
    }
    else {
      numOp.textContent += (e.target.textContent);
      number2 = parseInt(numOp.textContent)    
      console.log(e.target.textContent) 
    } 
    
    
  })
})

const clearButtons = clear.querySelectorAll('.clearBtns')
clearButtons.forEach(button => {
  button.addEventListener('click', e => {
    if (e.target.id == 'AC') numOp.textContent = '0';
    else {
      if (numOp.textContent != '0') {
        const a = numOp.textContent.slice(0, -1)
        numOp.textContent = a}
      else numOp.textContent = '0';
    }
  }) 
}
)

const operatorButtons = operators.querySelectorAll('.operator')
operatorButtons.forEach((operatorButton) => {
  operatorButton.addEventListener('click', (e) => {
    number1 = parseInt(numOp.textContent); 
    numOp.textContent = '';
    opNumber = e.target.id;
    console.log(e.target.id)   
  })
})

equal.addEventListener('click', () => {
  console.log("equal")
  number2 = parseInt(numOp.textContent)
  console.log(number1)
  console.log(number2)
  if (number1 !== '' && number2 !== ''){
    switch(opNumber){
      case 'operator0':
        numOp.textContent = number1 + number2;
        break;
      case 'operator1':
        numOp.textContent = number1 - number2;
        break;
      case 'operator2':
        numOp.textContent = number1 * number2;
        break;
      case 'operator3':
        numOp.textContent = number1 / number2;
        break;
    }
  }
  else numOp.textContent = 'ERROR'
}) 











