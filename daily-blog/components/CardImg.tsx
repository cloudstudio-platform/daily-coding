import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import classNames from 'classnames'

import NameWithDate from './NameWithDate'

const ArticleItem = ({
  item,
  isShowName = false,
  banner = '',
  isFirst = false,
  linkBoxClass = '',
}) => (
  <Link
    href={`/${item.path}`}
    className={classNames(
      'relative block rounded-lg bg-white',
      isShowName ? 'insight_article_item' : 'insight_article_noName_item',
      linkBoxClass
    )}
    target="_blank"
  >
    <div
      className={
        isShowName ? 'px-[26px] pt-12 maxEdge:pt-9 layer:pt-12' : 'px-10 pt-8 mb:px-5 mb:py-8'
      }
    >
      {item.tags && !isFirst && (
        <div className="mb-[30px] flex">
          {item.tags.map((data: string, index: number) => (
            <div key={`tag${index}`} className="mr-3 rounded bg-[#FDEAD9] px-3">
              <span className="whitespace-nowrap text-[14px] font-semibold leading-7 text-[#ED7B2F]">
                {data}
              </span>
            </div>
          ))}
        </div>
      )}
      {banner && (
        <Image
          src={banner}
          alt="banner"
          priority
          width={634}
          height={378}
          className="mb-[50px] layer:w-full mb:mb-6"
        />
      )}
      <p
        className={classNames(
          'font-medium text-[#232D3F] hover:text-[#0066FF]',
          !isShowName ? 'pb-8 mb:pb-4' : 'pb-4',
          !linkBoxClass && isShowName && 'min-h-[64px] maxEdge:min-h-[77px]',
          isFirst
            ? 'max-w-[65%] text-[40px] leading-[56px] mb:max-w-full mb:text-[24px] mb:leading-8'
            : 'text-[18px] leading-6'
        )}
      >
        {item.title}
      </p>
      {item.list && <div className="mb-6 h-[1px] w-full bg-[#F5F7FA]"></div>}
      {item.subTitle && (
        <p
          className={classNames(
            'text-[#4C576E]',
            !isShowName ? 'text-[16px] leading-[22px] mb:text-sm' : 'text-[14px] leading-[20px]',
            'insight_multi_desc'
          )}
        >
          {item.subTitle}
        </p>
      )}
      {item.list && (
        <ul className="insight_list_ul">
          {item.list.map((data: string, index: number) => (
            <li key={index} className="pl-3 pt-[2px] text-[14px] leading-[22px] text-[#4C576E]">
              <div className=" relative top-2 bg-[#4493FB]"></div>
              <span>{data}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
    {isShowName && (
      <div className="h-[68px] w-full">
        <div className="h-[1px] w-full bg-[#F5F7FA]"></div>
        <div className="flex h-full w-full items-center px-[26px] pr-9">
          <NameWithDate
            //isDivide={f}
            date={item.date}
            avatar={item.avatar}
            author={item.author}
          />
        </div>
      </div>
    )}
  </Link>
)

export default ArticleItem
