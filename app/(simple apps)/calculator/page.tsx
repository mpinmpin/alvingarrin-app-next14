// note: the app flow is written below the code

'use client'

import styles from './page.module.css'
import React, { useState } from 'react';

type firstValueType = number | null
type operatorType = string | null

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [firstValue, setFirstValue] = useState<firstValueType>(null);
  const [operator, setOperator] = useState<operatorType>(null);
  const [waitingForSecondValue, setWaitingForSecondValue] = useState<boolean>(false);

  const inputDigit = (digit: number) => {
    if (waitingForSecondValue) {
      setDisplayValue(String(digit));
      setWaitingForSecondValue(false);
    } else {
      setDisplayValue(displayValue === '0' ? String(digit) : displayValue + digit);
    }
  };

  const inputDecimal = () => {
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const clearDisplay = () => {
    setDisplayValue('0');
    setFirstValue(null);
    setOperator(null);
    setWaitingForSecondValue(false);
  };

  const backspace = () => {
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
   };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(displayValue);

    if (firstValue === null) {
      setFirstValue(inputValue);
    } else if (operator) {
      const currentValue = firstValue || 0;
      const result = calculate(currentValue, inputValue, operator);

      setDisplayValue(String(result));
      setFirstValue(result);
    }

    setWaitingForSecondValue(true);
    setOperator(nextOperator);
  };

  const calculate = (
    firstValue: number, 
    secondValue: number, 
    operator:string
    ) => {
        switch (operator) {
        case '+':
            return firstValue + secondValue;
        case '-':
            return firstValue - secondValue;
        case '*':
            return firstValue * secondValue;
        case '/':
            return firstValue / secondValue;
        default:
            return secondValue;
        }
    };

    let parsedDisplayValue : number = parseFloat(displayValue)

  return (
    <main>
      <div className={styles.calccontainer}>
        <h2>Calculator</h2>
        <div className={styles.calculator}>
          <input type="text" value={parsedDisplayValue.toLocaleString()} readOnly />
          <div className={styles.cbuttons}>
            <button className={styles.button} onClick={() => inputDigit(7)}>7</button>
            <button className={styles.button} onClick={() => inputDigit(8)}>8</button>
            <button className={styles.button} onClick={() => inputDigit(9)}>9</button>
            <button className={styles.button} onClick={backspace}>←</button>
            <button className={styles.button} onClick={() => inputDigit(4)}>4</button>
            <button className={styles.button} onClick={() => inputDigit(5)}>5</button>
            <button className={styles.button} onClick={() => inputDigit(6)}>6</button>
            <button className={styles.button} onClick={() => performOperation('/')}>/</button>
            <button className={styles.button} onClick={() => inputDigit(1)}>1</button>
            <button className={styles.button} onClick={() => inputDigit(2)}>2</button>
            <button className={styles.button} onClick={() => inputDigit(3)}>3</button>
            <button className={styles.button} onClick={() => performOperation('*')}>*</button>
            <button className={styles.button} onClick={inputDecimal}>.</button>
            <button className={styles.button} onClick={() => inputDigit(0)}>0</button>
            <button className={styles.button} onClick={() => performOperation('+')}>+</button>
            <button className={styles.button} onClick={() => performOperation('-')}>-</button>
            <button className={styles.ACbutton} onClick={clearDisplay}>AC</button>
            <button className={styles.button} onClick={() => performOperation('=')}>=</button>
          </div>
        </div>
      </div>
    </main>
    
    
  );
};

export default Calculator;


// steps:
// there are three parts of this calc: 
// 1. Input. 2. Output 3. and the calculator logic behind it
// Input: 0-9 , +-:x , = , del , AC, and comma
// Output: display the first number, then second number, then the result