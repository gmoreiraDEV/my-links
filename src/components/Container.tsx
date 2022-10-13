import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}
const Container = ({ children }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-5/6'>
      {children}
    </div>
  )
}

export default Container
