'use client'
import styles from './page.module.css'
import { useState } from "react";

// interface BMICalculatorState {
//     height: number;
//     weight: number;
//     bmi: number | null;
//     errorMessage: string;
//   }

type bmiType = number | null
  
const BMICalculator: React.FC = () => {
    const [height, setHeight] = useState<number>(180);
    const [weight, setWeight] = useState<number>(70);
    const [bmi, setBMI] = useState<bmiType>(null);
    const [errorMessage, setErrorMessage] = useState<string>('');

    const calculateBMI = () => {
        if (!weight || !height) {
            setErrorMessage('Please input your height and weight.');
            setBMI(null);
            return;
          }

        const heightInCm = height / 100;
        const calculatedBMI = (weight / (heightInCm * heightInCm));
        
        setBMI(parseFloat(calculatedBMI.toFixed(2)));
        setErrorMessage('');
    };

    return (
			<main>
				<div className={styles.bmi}>
						<h2>BMI Calculator</h2>
						<div>
								<label>Weight (kg):</label>
								<input
								type="number"
								value={weight}
								onChange={(e) => setWeight(parseFloat(e.target.value))}
								/>
						</div>
						<div>
								<label>Height (cm):</label>
								<input
								type="number"
								value={height}
								onChange={(e) => setHeight(parseFloat(e.target.value))}
								/>
								</div>
						<button className='button-global' onClick={calculateBMI}>Calculate BMI</button>
						{errorMessage && <p>{errorMessage}</p>}
						{bmi && <p>Your BMI is: {bmi}</p>}
				</div>
			</main>
        
     );
}
 
export default BMICalculator;