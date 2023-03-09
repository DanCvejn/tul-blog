import { IconCheck, IconX } from '@tabler/icons-react'
import React from 'react'

const FormSuccess = ({ text, closeSuccess }) => {
  return (
    <div className="w-full flex justify-start items-center p-4 rounded-xl bg-teal-200 relative">
      <IconCheck stroke={1.5} size={24} className="text-teal-700 mr-2" />
      <p className='text-white'>{text}</p>
      <IconX
        stroke={1.5}
        size={20}
        className="absolute top-2 right-2 text-white cursor-pointer"
        onClick={closeSuccess}
      />
    </div>
  )
}

export default FormSuccess