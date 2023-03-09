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
      className={className + " flex items-center justify-center " + iconPosition}
      disabled={disabled || loading}
    >
      {loading ?
        <IconLoader2 size={20} stroke={1.5} className={"animate-spin"} /> :
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