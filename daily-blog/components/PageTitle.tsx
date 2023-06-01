import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PageTitle({ children }: Props) {
  return <h1 className="text-[38px] font-medium leading-[54px] text-[#202D40]">{children}</h1>
}
