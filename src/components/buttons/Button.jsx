import "./Buttons.scss";

const Button = ({ text, type = "button", onClick, className = "primary", icon, iconPosition = "left" }) => {
  return (
    <button type={type} onClick={onClick} className={className + " flex items-center justify-center " + iconPosition} >
      {(iconPosition === "left" && icon) && icon}
      {text}
      {(iconPosition === "right" && icon) && icon}
    </button>
  )
}

export default Button