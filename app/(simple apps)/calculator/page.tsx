'use client'

import React, { useState } from 'react';

interface CalculatorState {
    displayValue: string;
    firstValue: number | null;
    operator: string | null;
    waitingForSecondValue: boolean;
  }

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState<string>('0');
    const [firstValue, setFirstValue] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
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

  return (
    <main>
      <div className='bmi'>
        <h2>Calculator</h2>
        <div className="calculator">
            <input type="text" value={displayValue} readOnly />
            <div className="cbuttons">
                <button className='button-calc'onClick={() => inputDigit(7)}>7</button>
                <button className='button-calc'onClick={() => inputDigit(8)}>8</button>
                <button className='button-calc'onClick={() => inputDigit(9)}>9</button>
                <button className='button-calc'onClick={() => performOperation('/')}>/</button>
                <button className='button-calc'onClick={() => inputDigit(4)}>4</button>
                <button className='button-calc'onClick={() => inputDigit(5)}>5</button>
                <button className='button-calc'onClick={() => inputDigit(6)}>6</button>
                <button className='button-calc'onClick={() => performOperation('*')}>*</button>
                <button className='button-calc'onClick={() => inputDigit(1)}>1</button>
                <button className='button-calc'onClick={() => inputDigit(2)}>2</button>
                <button className='button-calc'onClick={() => inputDigit(3)}>3</button>
                <button className='button-calc'onClick={() => performOperation('+')}>+</button>
                <button className='button-calc'onClick={() => inputDigit(0)}>0</button>
                <button className='button-calc'onClick={inputDecimal}>.</button>
                <button className='button-calc'onClick={() => performOperation('-')}>-</button>
                <button className='button-calc'onClick={clearDisplay}>AC</button>
                <button className='button-calc'onClick={() => performOperation('=')}>=</button>
            </div>
        </div>
      </div>
    </main>
    
    
  );
};

export default Calculator;