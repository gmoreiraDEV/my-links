import { ReactNode } from 'react'

interface Props {
  url: string
  label: string
  icon: ReactNode
}

const Link = ({ url, label, icon }: Props) => {
  return (
    <div className='flex justify-center items-center gap- p-2 bg-brand-purple-100 border-brand-pink border-2 border-custom relative hover:bg-brand-purple-900 hover:border-brand-white-50 hover:after:border-t-brand-white-50 transition-all'>
      <div>{icon}</div>
      <a href={url}>{label}</a>
    </div>
  )
}

export default Link
