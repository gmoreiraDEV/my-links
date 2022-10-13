import { ReactNode } from 'react'
import Header from './Header'
import Container from './Container'
import Footer from './Footer'

interface PageProps {
  children: ReactNode
}

const Layout = ({ children }: PageProps) => {
  return (
    <div className='flex justify-around items-center flex-col gap-4 bg-brand-purple-900 text-brand-white-50 w-full h-full'>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  )
}

export default Layout
