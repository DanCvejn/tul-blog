const TextArea = ({
                  label,
                  placeholder,
                  required,
                  value,
                  onChange,
                  readonly,
                  disabled,
                  autoComplete,
                  minRows,
                }) => {

  return (
    <div className={"w-full mt-2"}>
      <p className="text-sm font-bold">{label}{required && <span className="text-red-200 ml-1">*</span>}</p>
      <textarea
        placeholder={placeholder ? placeholder : label}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        readOnly={readonly}
        className="py-2 px-3 font-manrope border border-solid border-gray-50 rounded-lg w-full"
        rows={minRows}
      />
    </div>
  )
}

export default TextArea