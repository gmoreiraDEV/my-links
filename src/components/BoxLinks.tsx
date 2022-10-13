import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const BoxLinks = ({ children }: Props) => {
  return (
    <div className='flex flex-col justify-between items-center gap-8'>
      {children}
    </div>
  )
}

export default BoxLinks
