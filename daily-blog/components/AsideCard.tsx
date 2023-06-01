import React from 'react'

interface AsideCardProps {
  title: string
  children: React.ReactNode
}

const AsideCard = ({ title, children }: AsideCardProps) => (
  <div className="insight_aside_box mb-12 w-full bg-white">
    <div className="mb-11 flex items-center">
      <div className="h-6 w-1 bg-[#0066FF]"></div>
      <p className="pl-4 text-[24px] font-medium text-[#0066FF]">{title}</p>
    </div>
    {children}
  </div>
)
export default AsideCard
