import { Inter } from '@next/font/google'
// import SectionContainer from './SectionContainer'
import Footer from './Footer'
import { ReactNode } from 'react'
import Header from './Header'

interface Props {
  children: ReactNode
}

const inter = Inter({
  subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
  return (
    <section className="relative flex w-full flex-col items-center bg-[#FAFAFA]">
      <div className="z-index-1000 relative flex w-full justify-center">
        <Header />
      </div>
      <section className="mx-auto mb-[180px] w-full max-w-[1440px] xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
        <div className={`${inter.className} flex flex-col justify-between font-sans`}>
          <main>{children}</main>
        </div>
      </section>
      <Footer />
    </section>
  )
}

export default LayoutWrapper
