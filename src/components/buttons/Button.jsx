import { IconLoader2 } from "@tabler/icons-react";
import "./Buttons.scss";

const Button = ({ text,
                  type = "button",
                  onClick,
                  className = "primary",
                  icon,
                  iconPosition = "left",
                  disabled,
                  loading
                }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={className + " flex items-center justify-center " + iconPosition + (className.includes("submit") && " font-bold")}
      disabled={disabled || loading}
    >
      {loading ?
        <IconLoader2 size={20} stroke={2} className={"animate-spin"} /> :
        <>
          {(iconPosition === "left" && icon) && icon}
          {text}
          {(iconPosition === "right" && icon) && icon}
        </>
      }
    </button>
  )
}

export default Button