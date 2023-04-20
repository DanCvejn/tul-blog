import React from 'react'

const Switch = ({ state, onClick }) => {
  return (
    <div
      className={`w-12 h-6 ${state ? "bg-teal-800" : "bg-gray-400"} rounded-full relative cursor-pointer duration-300 ease-in-out`}
      onClick={() => onClick(!state)}
    >
      <div className={`w-6 h-6 rounded-full ${state ? "bg-teal-400" : "bg-gray-200"} absolute top-0 ${state ? "left-1/2" : "left-0"} duration-300 ease-in-out`}></div>
    </div>
  )
}

export default Switch