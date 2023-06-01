import React from 'react'
import ArticleItem from './CardImg'

const Recommand = ({ posts }) => {
  const recommendList = posts.filter((item) => item.isRecommend)
  const firstRecommend = posts.filter((item) => item.isFirstRecommend)

  return (
    <div className="mt-[140px] grid w-full grid-flow-col grid-rows-3 gap-10 pcMin:flex pcMin:flex-col layer:mt-[92px] mb:mt-[87px]">
      {firstRecommend &&
        firstRecommend.map((item, index) => (
          <div key={`first${index}`} className="row-span-3 pcMin:row-span-1">
            <ArticleItem
              isFirst={true}
              item={item}
              banner={item.banner}
              linkBoxClass="h-full pcMin:min-h-[640px] layer:h-[800px] mb:h-[440px]"
            />
          </div>
        ))}
      {recommendList &&
        recommendList.map((item, index) => (
          <div key={`recommend${index}`} className="">
            <ArticleItem item={item} />
          </div>
        ))}
    </div>
  )
}

export default Recommand
