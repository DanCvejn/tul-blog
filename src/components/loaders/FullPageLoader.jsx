import { IconLoader2 } from '@tabler/icons-react';

const FullPageLoader = () => {
  return (
    <div className="w-full h-max flex justify-center items-center">
      <IconLoader2 stroke={1.5} size={50} className="animate-spin" />
    </div>
  )
}

export default FullPageLoader