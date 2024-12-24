"use client";

type ClickerButtonProps = {
  handleClick: () => void
  label: string
}

const ClickerButton = (props : ClickerButtonProps)  => {
  return (
    <button 
      onClick={props.handleClick}
      className="rounded-md px-4 py-2 text-white bg-blue-500 hover:bg-blue-600"
      >{props.label}
    </button>
  )
}

export default ClickerButton;


