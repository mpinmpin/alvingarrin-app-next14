'use client'

import { useState , useEffect, useRef } from "react";

import ClickerButton from "./ClickerButton";
import ClickerCard from "./ClickerCard";
import ClosedCard from "./ClosedCard";

const Clicker: React.FC = () => {
	
	const [renderCount, setRenderCount] = useState<number>(0)
	const [isHidden, setHidden] = useState<boolean>(true)


	const [count, setCount] = useState<number>(0);
	const countRef = useRef<number>(0);

	const [speed, setSpeed] = useState<number>(0)

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
	const [twelfthOpened, setTwelfthOpened] = useState<boolean>(false)

	const [firstLevel, setFirstLevel] = useState<number>(0)
	const [secondLevel, setSecondLevel] = useState<number>(0)
	const [thirdLevel, setThirdLevel] = useState<number>(0)
	const [fourthLevel, setFourthLevel] = useState<number>(0)
	const [fifthLevel, setFifthLevel] = useState<number>(0)
	const [sixthLevel, setSixthLevel] = useState<number>(0)
	const [seventhLevel, setSeventhLevel] = useState<number>(0)
	const [eighthLevel, setEighthLevel] = useState<number>(0)
	const [ninthLevel, setNinthLevel] = useState<number>(0)
	const [tenthLevel, setTenthLevel] = useState<number>(0)
	const [eleventhLevel, setEleventhLevel] = useState<number>(0)
	const [twelfthLevel, setTwelfthLevel] = useState<number>(0)


	const[firstCost, setFirstCost] = useState<number>(2e1)
	const[secondCost, setSecondCost] = useState<number>(2e2)
	const[thirdCost, setThirdCost] = useState<number>(2e3)
	const[fourthCost, setFourthCost] = useState<number>(2e4)
	const[fifthCost, setFifthCost] = useState<number>(2e5)
	const[sixthCost, setSixthCost] = useState<number>(2e6)
	const[seventhCost, setSeventhCost] = useState<number>(2e7)
	const[eighthCost, setEighthCost] = useState<number>(2e8)
	const[ninthCost, setNinthCost] = useState<number>(2e9)
	const[tenthCost, setTenthCost] = useState<number>(2e10)
	const[eleventhCost, setEleventhCost] = useState<number>(2e11)
	const[twelfthCost, setTwelfthCost] = useState<number>(2e12)

	const addCake = () => {
		setCount(prevCount => prevCount + 1)
	}

	// const addSpeed = () => {
	// 	setSpeed(prevSpeed => prevSpeed + 1)
	// 	console.log("Speed Up clicked. Snowflake growth at: ", {speed})
	// }

	// const decSpeed = () => {
	// 	setSpeed(prevSpeed => prevSpeed - 1)
	// 	console.log("Speed Down clicked. Snowflake growth at: ", {speed})
	// }

	// const showAcceleratorDisplay = () => {
	// 	setHidden(!isHidden)
	// }

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
		if (count >= fourthCost){
			setFourthLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1000)
			setCount(prevCount => prevCount - fourthCost)
			setFourthCost(prevCost => prevCost + 2e4)
		}
	}

	const addFifthLevel = () => {
		if (count >= fifthCost){
			setFifthLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1e4)
			setCount(prevCount => prevCount - fifthCost)
			setFifthCost(prevCost => prevCost + 2e5)
		}
	}

	const addSixthLevel = () => {
		if (count >= sixthCost){
			setSixthLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1e5)
			setCount(prevCount => prevCount - sixthCost)
			setSixthCost(prevCost => prevCost + 2e6)
		}
	}

	const addSeventhLevel = () => {
		if (count >= seventhCost){
			setSeventhLevel(prevLevel => prevLevel + 1)
			setSpeed(prevSpeed => prevSpeed + 1e6)
			setCount(prevCount => prevCount - seventhCost)
			setSeventhCost(prevCost => prevCost + 2e7)
		}
	}

	const addEighthLevel = () => {
    if (count >= eighthCost) {
        setEighthLevel(prevLevel => prevLevel + 1)
        setSpeed(prevSpeed => prevSpeed + 1e7)
        setCount(prevCount => prevCount - eighthCost)
        setEighthCost(prevCost => prevCost + 2e8)
    }
	}

	const addNinthLevel = () => {
			if (count >= ninthCost) {
					setNinthLevel(prevLevel => prevLevel + 1)
					setSpeed(prevSpeed => prevSpeed + 1e8)
					setCount(prevCount => prevCount - ninthCost)
					setNinthCost(prevCost => prevCost + 2e9)
			}
	}

	const addTenthLevel = () => {
			if (count >= tenthCost) {
					setTenthLevel(prevLevel => prevLevel + 1)
					setSpeed(prevSpeed => prevSpeed + 1e9)
					setCount(prevCount => prevCount - tenthCost)
					setTenthCost(prevCost => prevCost + 2e10)
			}
	}

	const addEleventhLevel = () => {
			if (count >= eleventhCost) {
					setEleventhLevel(prevLevel => prevLevel + 1)
					setSpeed(prevSpeed => prevSpeed + 1e10)
					setCount(prevCount => prevCount - eleventhCost)
					setEleventhCost(prevCost => prevCost + 2e11)
			}
	}

	const addTwelfthLevel = () => {
			if (count >= twelfthCost) {
					setTwelfthLevel(prevLevel => prevLevel + 1)
					setSpeed(prevSpeed => prevSpeed + 1e11)
					setCount(prevCount => prevCount - twelfthCost)
					setTwelfthCost(prevCost => prevCost + 2e12)
			}
	}

  useEffect(() => {

		// console.log(typeof window)

    const savedCount = localStorage.getItem("count");
    const savedSpeed = localStorage.getItem("speed");

    if (savedCount) {
      setCount(parseFloat(savedCount));
    }
    if (savedSpeed) {
      setSpeed(parseInt(savedSpeed));
    }
  }, []);
	
	// useEffect(() => {
	// 	const savedCount = localStorage.getItem('count');
  //   if (savedCount) {
  //     setCount(parseFloat(savedCount));
  //   }

	// }, [])

	// useEffect(() => {
	// 	const savedSpeed = localStorage.getItem('speed');
  //   if (savedSpeed) {
  //     setSpeed(parseInt(savedSpeed));
  //   }
	// }, [])

	let roundedCount: number = parseInt(count.toFixed(0))

	useEffect(() => {
		
		if ( roundedCount >= 10 ) {
			setFirstOpened(true)
		}
		if ( roundedCount >= 100 ) {
			setSecondOpened(true)
		}
		if ( roundedCount >= 1e3 ) {
			setThirdOpened(true)
		}
		if ( roundedCount >= 1e4 ) {
			setFourthOpened(true)
		}
		if ( roundedCount >= 1e5 ) {
			setFifthOpened(true)
		}
		if (roundedCount >= 1e6) {
			setSixthOpened(true)
		}
		if (roundedCount >= 1e7) {
			setSeventhOpened(true)
		}
		if (roundedCount >= 1e8) {
			setEighthOpened(true)
		}
		if (roundedCount >= 1e9) {
			setNinthOpened(true)
		}
		if (roundedCount >= 1e10) {
			setTenthOpened(true)
		}
		if (roundedCount >= 1e11) {
			setEleventhOpened(true)
		}
		if (roundedCount >= 1e12) {
			setTwelfthOpened(true)
		}

		// console.log(count)

		
		// Save current count to localStorage
		localStorage.setItem('count', roundedCount.toString())

  }, [count]);

	useEffect(() => {
    let intervalId = setInterval(() => {

      setCount(count => count + speed/100);
			console.log('Interval running, speed:', speed)

			// Save current speed to localStorage
			localStorage.setItem('speed', speed.toString())

    }, 10);

    return () => clearInterval(intervalId);
  }, [speed]);

	

	const formatNumber = (num: number) => {
			const abbreviations = [
				{ value: 1e15, symbol: 'quadrillion' },
				{ value: 1e12, symbol: 'trillion' },
				{ value: 1e9, symbol: 'billion' },
				{ value: 1e6, symbol: 'million' },
				{ value: 1e3, symbol: 'thousand' }
		];
			for (const { value, symbol } of abbreviations) {
				if (num >= value) {
					return (num / value).toFixed(3).replace(/\.?0+$/, '') + ' ' + symbol;
				}
			}
				return num.toString();
	}

	const formatedCount = formatNumber(roundedCount)
	const formatedSpeed = formatNumber(speed)


	return (
		<main>
			
			<div className="mx-auto flex justify-center items-center">
				
				<div className="my-4 mx-4 flex">
					<ClickerButton
						handleClick = { addCake }
						label = "Add a snowflake here"
					/>
				</div>

				{/* <div className="my-4 mx-4 flex flex-col">
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
				</div> */}

			</div>

			<div className="mx-auto flex justify-center my-4 w-2/3">
				<div className="mx-auto border border-black rounded-md shadow overflow-hidden w-5/6 py-2">
					<div className="flex mx-5">
						Your snowflake is : { formatedCount } 
					</div>
					<div className="flex mx-5">
						Growth : { formatedSpeed } snowflake(s) per sec
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-4">
				{
					firstOpened ? 
					<ClickerCard 
						level = {firstLevel} 
						label = "Snowflake" 
						cost = {formatNumber(firstCost)}
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
						cost = {formatNumber(secondCost)}
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
						cost = {formatNumber(thirdCost)}
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
						cost = {formatNumber(fourthCost)}
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
						cost = {formatNumber(fifthCost)}
						handleClick={addFifthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					sixthOpened ? 
					<ClickerCard 
						level = {sixthLevel} 
						label = "Arctic Iceberg" 
						cost = {formatNumber(sixthCost)}
						handleClick={addSixthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					seventhOpened ? 
					<ClickerCard 
						level = {seventhLevel} 
						label = "Antartic Landmass" 
						cost = {formatNumber(seventhCost)}
						handleClick={addSeventhLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					eighthOpened ? 
					<ClickerCard 
							level = {eighthLevel} 
							label = "Frosty Planet" 
							cost = {formatNumber(eighthCost)}
							handleClick={addEighthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					ninthOpened ? 
					<ClickerCard 
							level = {ninthLevel} 
							label = "Icy Asteroid Belt" 
							cost = {formatNumber(ninthCost)}
							handleClick={addNinthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					tenthOpened ? 
					<ClickerCard 
							level = {tenthLevel} 
							label = "Cryogalaxy" 
							cost = {formatNumber(tenthCost)}
							handleClick={addTenthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					eleventhOpened ? 
					<ClickerCard 
							level = {eleventhLevel} 
							label = "Frozen Supercluster" 
							cost = {formatNumber(eleventhCost)}
							handleClick={addEleventhLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
				{
					twelfthOpened ? 
					<ClickerCard 
							level = {twelfthLevel} 
							label = "Glacial Multiverse" 
							cost = {formatNumber(twelfthCost)}
							handleClick={addTwelfthLevel}
					/>
					:
					<ClosedCard></ClosedCard>
				}
			</div>
			
				
		</main>
		);
}

export default Clicker;