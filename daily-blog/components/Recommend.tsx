import React from 'react'
import ArticleItem from './CardImg'
import Link from 'next/link'

const Recommend = ({ posts }) => {
  const recommendList = posts.filter((item) => item.isRecommend)
  // const firstRecommend = posts.filter((item) => item.isFirstRecommend)

  return (
    <div className="mt-[140px] grid w-full grid-flow-col grid-rows-3 gap-10 pcMin:flex pcMin:flex-col layer:mt-[92px] mb:mt-[87px]">
      {/* {firstRecommend &&
        firstRecommend.map((item, index) => (
          <div key={`first${index}`} className="row-span-3 pcMin:row-span-1">
            <ArticleItem
              isFirst={true}
              item={item}
              banner={item.banner}
              linkBoxClass="h-full pcMin:min-h-[640px] layer:h-[800px] mb:h-[440px]"
            />
          </div>
        ))} */}
      <Link
        href="https://cloudstudio.net/incentive"
        target="_blank"
        className="insight_article_noName_item relative row-span-3 rounded-lg bg-white px-10 py-8 pcMin:row-span-1 mb:px-5 mb:py-8"
      >
        <div className="mb-10 flex h-[360px] w-full items-center justify-center rounded-lg">
          <img
            src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/test-banner.png"
            alt=""
          />
        </div>
        <div className="mb-3 flex">
          <div key={`tag-activity`} className="mr-3 rounded bg-[#FDEAD9] px-3">
            <span className="whitespace-nowrap text-[14px] font-semibold leading-7 text-[#ED7B2F]">
              最新活动
            </span>
          </div>
        </div>
        <p className="max-w-[65%] pb-8 text-[40px] font-medium leading-[56px] text-[#232D3F] hover:text-[#0066FF] mb:max-w-full mb:text-[24px] mb:leading-8">
          云端开发激励计划
        </p>
        <p className="insight_multi_desc text-[16px] leading-[22px] text-[#4C576E]">
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
