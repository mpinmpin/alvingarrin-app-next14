"use client";

type ClosedCardProps = {
  className?: string
}

const ClosedCard = (props : ClosedCardProps)  => {
  return (
    <div 
      className={`mx-auto bg-gray-300 box-border h-20 w-48 p-4 border-2 rounded-lg shadow cursor-pointer`}
      >
    </div>
  )
}

export default ClosedCard;