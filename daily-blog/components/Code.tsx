import Image from 'next/image'
import React from 'react'

import classNames from 'classnames'

interface codeProps {
  codeClass?: string
}

const Code = ({ codeClass }: codeProps) => (
  <div className={classNames('w-full', codeClass)}>
    <p className="pb-3 text-center text-[18px] font-medium leading-6 text-[#232D3F]">
      Cloud Studio 官方公众号
    </p>
    <p className="pb-6 text-center text-[14px] leading-[20px] text-[#4C576E]">
      随时获取 Cloud Studio 最新动态
    </p>
    <div className="h-[1px] w-[306px] bg-[#E6E9EF] layer:w-full"></div>
    <div className="mt-[50px] flex items-center justify-center">
      <Image
        src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/qrcode_for_cs.jpg"
        alt="code"
        priority
        width={193}
        height={193}
      />
    </div>
  </div>
)
export default Code
