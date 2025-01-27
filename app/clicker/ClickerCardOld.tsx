"use client";

import { Tooltip } from "@nextui-org/tooltip";


type ClickerCardProps = {
  className?: string
  handleClick?: () => void
  label?: string
  level?: number
  cost?: number | string
}

const ClickerCard = (props : ClickerCardProps)  => {
  return (
    <Tooltip
      content="test"
      placement="bottom"
      delay={100}
      closeDelay={200}
      className="bg-blue-400 text-white  p-2 box-border h-8 w-12 rounded-md over overflow-hidden"
      // key="primary"
      style={{ fontSize: '10px' }}
    >
      <div 
        onClick={props.handleClick}
        className={`mx-auto box-border h-20 w-48 p-3 border-2 hover:border-slate-300 shadow rounded-lg cursor-pointer ${props.className}`}
        >
        <p className="text-xs">Level: {props.level}</p>
        {props.label}
        <p className="text-xs">Level up: {props.cost}</p>
      </div>
    </Tooltip>

  )
}

export default ClickerCard;