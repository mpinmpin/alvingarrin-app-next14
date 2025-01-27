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
      delay={200}
      closeDelay={200}
      className="bg-blue-300 text-black  p-2 h-12 w-16 border-2 rounded-md over overflow-hidden"
      style={{ fontSize: '10px' }}
    >
      <div 
        onClick={props.handleClick}
        className={`mx-auto h-20 w-48 p-3 border-2 hover:border-slate-300 shadow rounded-lg cursor-pointer ${props.className}`}
      >
        <p className="text-xs">Level: {props.level}</p>
        {props.label}
        <p className="text-xs">Level up: {props.cost}</p>
      </div>
    </Tooltip>

  )
}

export default ClickerCard;