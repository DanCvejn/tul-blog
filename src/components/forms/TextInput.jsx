const TextInput = ({ label, required, value, onChange, readonly, disabled, mt }) => {
  return (
    <div className={"w-full mt-" + mt}>
      <p className="text-sm font-bold">{label}{required && <span className="text-red-200 ml-1">*</span>}</p>
      <input
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className="p-2 font-manrope border border-solid border-gray-50 rounded-lg w-full"
      />
    </div>
  )
}

export default TextInput