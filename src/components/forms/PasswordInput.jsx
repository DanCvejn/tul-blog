import { IconEye, IconEyeClosed } from '@tabler/icons-react';
import React, { useState } from 'react'

const PasswordInput = ({ label, placeholder, required, value, onChange, readonly, disabled, autoComplete }) => {
  const [type, setType] = useState("password");

  return (
    <div className={"w-full mt-2"}>
      <p className="text-sm font-bold">{label}{required && <span className="text-red-200 ml-1">*</span>}</p>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder ? placeholder : label}
          value={value}
          onChange={onChange}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          autoComplete={autoComplete}
          className="py-2 px-3 font-manrope border border-solid border-gray-50 rounded-lg w-full"
        />
        {type === "password" ?
          <IconEye stroke={1.5} size={20} className="absolute right-2 top-2 cursor-pointer" onClick={() => setType("text")} /> :
          <IconEyeClosed stroke={1.5} size={20} className="absolute right-2 top-2 cursor-pointer" onClick={() => setType("password")} />
        }
      </div>
    </div>
  )
}

export default PasswordInput