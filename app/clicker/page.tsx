'use client'

import { useState , useEffect } from "react";
import ClickerButton from "./ClickerButton";
import ClickerCard from "./ClickerCard";

const Clicker: React.FC = () => {
	
	const [renderCount, setRenderCount] = useState<number>(0)
	const [count, setCount] = useState<number>(0)
	const [speed, setSpeed] = useState<number>(0)
	const [isHidden, setHidden] = useState<boolean>(true)

	const addCake = () => {
		setCount(prevCount => prevCount + 1)
	}

	const addSpeed = () => {
		setSpeed(prevSpeed => prevSpeed + 1)
		console.log("Speed Up clicked. Cake growth at: ", {speed})
	}

	const decSpeed = () => {
		setSpeed(prevSpeed => prevSpeed - 1)
		console.log("Speed Down clicked. Cake growth at: ", {speed})
	}

	const showAcceleratorDisplay = () => {
		setHidden(!isHidden)
	}

	useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(count => count + speed/100);
			console.log('Interval running, speed:', speed);
    }, 10);

    return () => clearInterval(intervalId);
  }, [speed]);

	let roundedCount: number = parseFloat(count.toFixed(2))

	// useEffect(() => {
	// 	if ( roundedCount == 10 ) {
	// 		setHidden(!isHidden)
	// 	}
  // }, [count]);

	return (
		<main>
			<div className="mx-auto flex justify-center items-center">
				
				<div className="my-4 mx-4 flex">
					<ClickerButton
						handleClick = { addCake }
						label = "Add cake here"
					/>
				</div>
				<div className="my-4 mx-4 flex">
					<ClickerButton
						handleClick = { showAcceleratorDisplay }
						label = { isHidden ? "Show Accelerator" : "Hide Accelerator"}
					/>
				</div>

				
				<div className={`mx-4  flex flex-col ${ isHidden ? "hidden" : "block" }`}>
					<div className="my-4 flex justify-center">
						<ClickerButton
							handleClick = { addSpeed }
							label = "Speed up"
						/>
					</div>
					<div className="my-4 flex justify-center">
						<ClickerButton
							handleClick = { decSpeed }
							label = "Speed down"
						/>
					</div>
				</div>

				<div className="mx-4  flex flex-col hidden">
					<div className="my-4 flex justify-center">
						<ClickerButton
							handleClick = { addSpeed }
							label = "Speed up"
						/>
					</div>
					<div className="my-4 flex justify-center">
						<ClickerButton
							handleClick = { decSpeed }
							label = "Speed down"
						/>
					</div>
				</div>

			</div>

			<div className="mx-auto flex justify-center my-4 w-2/3">
				<div className="mx-auto border border-black rounded-md overflow-hidden w-1/2 py-2">
					<div className="flex justify-center items-center">
						Your cake is : { roundedCount } 
					</div>
					<div className="flex justify-center items-center">
						Your cake growth : { speed } cake/s
					</div>
				</div>
			</div>
			
				
		</main>
		);
}

export default Clicker;