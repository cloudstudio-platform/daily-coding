import React from 'react'
import ArticleItem from './CardImg'
import Link from 'next/link'

const Recommend = ({ posts }) => {
  const recommendList = posts.filter((item) => item.isRecommend)

  return (
    <div className="mt-[220px] grid w-full grid-flow-col grid-rows-3 gap-10 pcMin:flex pcMin:flex-col layer:mt-[152px] mb:mt-[127px]">
      <Link
        href="https://cloudstudio.net/incentive"
        target="_blank"
        className="cloudstudio_article_noName_item relative row-span-3 rounded-lg bg-white px-10 py-8 pcMin:row-span-1 mb:px-5 mb:py-8"
      >
        <div className="mb-10 flex h-[360px] w-full items-center justify-center overflow-hidden rounded-lg mb:h-auto">
          <picture>
            <img
              src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/blog-banner-pc.png"
              alt=""
              className="layer:hidden"
            />
            <img
              src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/blog-banner-mb.png"
              alt=""
              className="hidden layer:block"
            />
          </picture>
        </div>
        <div className="mb-3 flex">
          <div key={`tag-activity`} className="mr-3 rounded bg-[#FDEAD9] px-3">
            <span className="whitespace-nowrap text-[14px] font-semibold leading-7 text-[#ED7B2F]">
              最新活动
            </span>
          </div>
        </div>
        <p className="max-w-[65%] pb-8 text-[40px] font-medium leading-[56px] text-[#232D3F] hover:text-[#0066FF] mb:max-w-full mb:pb-4 mb:text-[24px] mb:leading-8">
          云端开发激励计划
        </p>
        <p className="cloudstudio_multi_desc text-[16px] leading-[22px] text-[#4C576E] mb:text-sm">
          诚邀您加入“腾讯云 Cloud Studio 文档内容共建计划”，与广大开发者一起 “共建、共赢、共成长”
        </p>
      </Link>
      {recommendList &&
        recommendList.map((item, index) => (
          <div key={`recommend${index}`} className="">
            <ArticleItem item={item} />
          </div>
        ))}
    </div>
  )
}

export default Recommend
