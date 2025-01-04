'use client'

import { useState , useEffect } from "react";
import ClickerButton from "./ClickerButton";
import ClickerCard from "./ClickerCard";
import ClosedCard from "./ClosedCard";

const Clicker: React.FC = () => {
	
	const [renderCount, setRenderCount] = useState<number>(0)
	const [count, setCount] = useState<number>(0)
	const [speed, setSpeed] = useState<number>(0)
	const [isHidden, setHidden] = useState<boolean>(true)

	const [firstOpened, setFirstOpened] = useState<boolean>(false)
	const [secondOpened, setSecondOpened] = useState<boolean>(false)
	const [thirdOpened, setThirdOpened] = useState<boolean>(false)
	const [fourthOpened, setFourthOpened] = useState<boolean>(false)
	const [fifthOpened, setFifthOpened] = useState<boolean>(false)
	const [sixthOpened, setSixthOpened] = useState<boolean>(false)
	const [seventhOpened, setSeventhOpened] = useState<boolean>(false)
	const [eighthOpened, setEighthOpened] = useState<boolean>(false)
	const [ninthOpened, setNinthOpened] = useState<boolean>(false)
	const [tenthOpened, setTenthOpened] = useState<boolean>(false)
	const [eleventhOpened, setEleventhOpened] = useState<boolean>(false)
	const [twelvethOpened, setTwelfthOpened] = useState<boolean>(false)

	const [firstLevel, setFirstLevel] = useState<number>(0)
	const [secondLevel, setSecondLevel] = useState<number>(0)
	const [thirdLevel, setThirdLevel] = useState<number>(0)
	const [fourthLevel, setFourthLevel] = useState<number>(0)
	const [fifthLevel, setFifthLevel] = useState<number>(0)
	const [sixthLevel, setSixthLevel] = useState<number>(0)

	const[firstCost, setFirstCost] = useState<number>(20)
	const[secondCost, setSecondCost] = useState<number>(200)
	const[thirdCost, setThirdCost] = useState<number>(2000)
	const[fourthCost, setFourthCost] = useState<number>(20000)
	const[fifthCost, setFifthCost] = useState<number>(200000)
	const[sixthCost, setSixthCost] = useState<number>(2000000)

	const addCake = () => {
		setCount(prevCount => prevCount + 1)
	}

	const addSpeed = () => {
		setSpeed(prevSpeed => prevSpeed + 1)
		console.log("Speed Up clicked. Snowflake growth at: ", {speed})
	}

	const decSpeed = () => {
		setSpeed(prevSpeed => prevSpeed - 1)
		console.log("Speed Down clicked. Snowflake growth at: ", {speed})
	}

	const showAcceleratorDisplay = () => {
		setHidden(!isHidden)
	}

	const addFirstLevel = () => {
		if (count >= firstCost){
			setFirstLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1)
			setCount(prevCount => prevCount - firstCost)
			setFirstCost(prevCost => prevCost + 5)
		}
	}

	const addSecondLevel = () => {
		if (count >= secondCost){
			setSecondLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 10)
			setCount(prevCount => prevCount - secondCost)
			setSecondCost(prevCost => prevCost + 100)
		}
	}

	const addThirdLevel = () => {
		if (count >= thirdCost){
			setThirdLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 100)
			setCount(prevCount => prevCount - thirdCost)
			setThirdCost(prevCost => prevCost + 2000)
		}
	}

	const addFourthLevel = () => {
		if (count >= thirdCost){
			setFourthLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1000)
			setCount(prevCount => prevCount - fourthCost)
			setFourthCost(prevCost => prevCost + 20000)
		}
	}

	const addFifthLevel = () => {
		if (count >= thirdCost){
			setFifthLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 10000)
			setCount(prevCount => prevCount - fifthCost)
			setFifthCost(prevCost => prevCost + 200000)
		}
	}


	useEffect(() => {
    let intervalId = setInterval(() => {
      setCount(count => count + speed/100);
			console.log('Interval running, speed:', speed);
    }, 10);

    return () => clearInterval(intervalId);
  }, [speed]);

	let roundedCount: number = parseFloat(count.toFixed(0))

	useEffect(() => {
		if ( roundedCount >= 10 ) {
			setFirstOpened(true)
		}
		if ( roundedCount >= 100 ) {
			setSecondOpened(true)
		}
		if ( roundedCount >= 1000 ) {
			setThirdOpened(true)
		}
		if ( roundedCount >= 10000 ) {
			setFourthOpened(true)
		}
		if ( roundedCount >= 100000 ) {
			setFifthOpened(true)
		}
  }, [count]);

	return (
		<main>
			
			<div className="mx-auto flex justify-center items-center">
				
				<div className="my-4 mx-4 flex">
					<ClickerButton
						handleClick = { addCake }
						label = "Add a snowflake here"
					/>
				</div>

				<div className="my-4 mx-4 flex flex-col">
					<ClickerButton
						className="bg-violet-500 hover:bg-violet-600 "
						handleClick = { showAcceleratorDisplay }
						label = { isHidden ? "Show Accelerator" : "Hide Accelerator"}
					/>
					<div className={`mx-4 my-4 flex flex-col ${ isHidden ? "hidden" : "block" }`}>
						<div className="my-4 flex justify-center">
							<ClickerButton
								className="bg-green-500 hover:bg-green-600 w-full"
								handleClick = { addSpeed }
								label = "Speed up"
							/>
						</div>
						<div className="my-1 flex justify-center">
							<ClickerButton
								className="bg-red-500 hover:bg-red-600 w-full"
								handleClick = { decSpeed }
								label = "Speed down"
							/>
						</div>
					</div>
				</div>

			</div>

			<div className="mx-auto flex justify-center my-4 w-2/3">
				<div className="mx-auto border border-black rounded-md shadow overflow-hidden w-5/6 py-2">
					<div className="flex mx-5">
						Your snowflake is : { roundedCount } 
					</div>
					<div className="flex mx-5">
						Growth : { speed } snowflake(s)/s
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{
					firstOpened ? 
					<ClickerCard 
						level = {firstLevel} 
						label = "Snowflake" 
						cost = {firstCost}
						handleClick={addFirstLevel}
						/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					secondOpened ? 
					<ClickerCard 
						level = {secondLevel} 
						label = "Snowball" 
						cost = {secondCost}
						handleClick={addSecondLevel}
						/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					thirdOpened ? 
					<ClickerCard 
						level = {thirdLevel} 
						label = "Icicle" 
						cost = {thirdCost}
						handleClick={addThirdLevel}
						/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					fourthOpened ? 
					<ClickerCard 
						level = {fourthLevel} 
						label = "Gelid Pond" 
						cost = {fourthCost}
						handleClick={addFourthLevel}
						/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					fifthOpened ? 
					<ClickerCard 
						level = {fifthLevel} 
						label = "Regional Hailstorm" 
						cost = {fifthCost}
						handleClick={addFifthLevel}
						/>
					:
					<ClosedCard></ClosedCard>
				}
				<ClickerCard
					label = "Arctic Iceberg"
				/>
				<ClickerCard
					label = "Antartic Landmass"
				/>
				<ClickerCard
					label = "Frosty Planet"
				/>
				<ClickerCard
					label = "Icy Asteroid Belt"
				/>
				<ClickerCard
					label = "Galactic Ice"
				/>
				<ClickerCard
					label = "Frozen Super Cluster"
				/>
				<ClickerCard
					label = "Glacial Multiverse"
				/>
				{/* <ClosedCard></ClosedCard> */}
			</div>
			
				
		</main>
		);
}

export default Clicker;