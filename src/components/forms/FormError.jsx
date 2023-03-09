import { IconAlertTriangle, IconTriangle, IconX } from '@tabler/icons-react'
import React from 'react'

const FormError = ({ error, closeError }) => {
  return (
    <div className="w-full flex justify-start items-center p-4 rounded-xl bg-red-200 relative">
      <IconAlertTriangle stroke={1.5} size={24} className="text-red-700 mr-2" />
      <p className='text-white'>{error}</p>
      <IconX
        stroke={1.5}
        size={20}
        className="absolute top-2 right-2 text-white cursor-pointer"
        onClick={closeError}
      />
    </div>
  )
}

export default FormError