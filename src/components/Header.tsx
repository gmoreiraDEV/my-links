import { Logo } from './Logo'

const Header = () => {
  return (
    <header className='flex justify-center items-center flex-col w-5/6'>
      <Logo className='flex-1 max-w-xs' />
      <ul className='flex flex-col gap-4 mt-2 md:flex-row'>
        <li>🔥 Estratégias Poderosas</li>
        <li>💰 Sites que vendem</li>
        <li>🚦 Tráfego pago</li>
      </ul>
    </header>
  )
}

export default Header
