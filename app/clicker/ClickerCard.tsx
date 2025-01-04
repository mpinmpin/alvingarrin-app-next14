"use client";

type ClickerCardProps = {
  className?: string
  handleClick?: () => void
  label?: string
  level?: number
  cost?: number
}

const ClickerCard = (props : ClickerCardProps)  => {
  return (
    <div 
      onClick={props.handleClick}
      className={`mx-auto box-border h-20 w-48 p-3 border-2 rounded-lg shadow cursor-pointer ${props.className}`}
      >
      <p className="text-xs">Level: {props.level}</p>
      {props.label}
      <p className="text-xs">Level up cost: {props.cost}</p>
    </div>
  )
}

export default ClickerCard;