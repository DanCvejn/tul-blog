import Select from "react-select";
import "./Forms.scss";

const FormSelect = ({
                label,
                placeholder,
                required,
                value,
                options,
                onChange,
                disabled,
                isMulti = false
              }) => {
  return (
    <div className='w-full mt-2'>
      <p className="text-sm font-bold">
        {label}
        {required && <span className="text-red-200 ml-1">*</span>}
      </p>
      <Select
        placeholder={placeholder}
        value={value}
        defaultValue={value}
        onChange={onChange}
        options={options}
        isMulti={isMulti}
        required={required}
        className="select"
        classNamePrefix={"select"}
      />
    </div>
  )
}

export default FormSelect