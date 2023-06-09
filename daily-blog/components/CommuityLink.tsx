import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CommunityLink = () => (
  <div className="mt-10 flex w-full justify-between mb:mt-6 mb:flex-col">
    <div className="commuity-link-box flex w-full rounded-lg mb:flex-col">
      <div className="mr-[72px] flex h-[175px] w-[260px] items-center justify-center rounded-[20px] bg-[#F5F7FA] layer:mr-8 mb:mr-0 mb:w-full mb:rounded-lg">
        <Image
          src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/tencent-logo.png"
          width={147}
          height={34}
          alt={''}
        />
      </div>
      <div className="pt-4">
        <p className="pb-4 text-[18px] font-medium leading-[25px]">腾讯云开发者社区</p>
        <p className="pb-12 text-[16px] leading-[22px] mb:pb-6">
          腾讯云开发者社区是腾讯云官方开发者社区，致力于打造开发者的技术分享型社区。
        </p>
        <Link
          href="https://cloud.tencent.com/developer/zone/cloudstudio?from=19165"
          className="text-[#0066ff] hover:opacity-80"
        >
          立即查看 &rarr;
        </Link>
      </div>
    </div>
    {/* <div className="commuity-link-box ml-10 rounded-lg mb:ml-0 mb:mt-6">
      <p className="pb-4 text-[18px] font-medium leading-[25px]">CSDN 开发者专栏</p>
      <p className="pb-12 text-[16px] leading-[22px] mb:pb-6">
        致力于为中国软件开发者提供知识传播、在线学习、职业发展等全生命周期服务。
      </p>
      <Link href="/" className="text-[#0066ff] hover:opacity-80">
        立即查看 &rarr;
      </Link>
    </div> */}
  </div>
)
export default CommunityLink
