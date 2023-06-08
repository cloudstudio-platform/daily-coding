import { useState } from 'react'
import { useRouter } from 'next/router'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
// import Tag from '@/components/Tag'
import ArticleItem from '@/components/CardImg'
import AsideBar from '@/components/AsideBar'
import Code from '@/components/Code'
import { Button } from 'antd'
import classNames from 'classnames'

interface PaginationProps {
  totalPages: number
  currentPage: number
}
interface ListLayoutProps {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: PaginationProps
  tags?: any
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const router = useRouter()
  const basePath = router.pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pb-20 pt-10 md:space-y-5">
      <nav className="mx-auto flex max-w-xs justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            前一页
          </button>
        )}
        {prevPage && (
          <Link
            href={currentPage - 1 === 1 ? `/${basePath}/` : `/${basePath}/page/${currentPage - 1}`}
            rel="prev"
          >
            前一页
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            后一页
          </button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">
            后一页
          </Link>
        )}
      </nav>
    </div>
  )
}

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
  tags,
}: ListLayoutProps) {
  const [activeObj, setActiveObj] = useState({ name: '' })
  const [searchValue, setSearchValue] = useState('')
  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  const sortedTags = Object.keys(tags).sort((a, b) => a.localeCompare(b))

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  const handleClick = (e) => {
    const searchTag = e.target.innerHTML
    if (!searchTag) return
    if (document.getElementById('selected-tag')?.innerText === searchTag) {
      setActiveObj({ name: '' })
      setSearchValue('')
    } else {
      setActiveObj({ name: searchTag })
      setSearchValue(searchTag)
    }
  }

  return (
    <>
      <div className="relative">
        <div className="py-12">
          <h1 className="mb-4 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative mx-auto w-full">
            <label>
              <span className="sr-only">搜索博客</span>
              <input
                aria-label="搜索博客"
                type="text"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="搜索博客"
                className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-900"
              />
            </label>
            <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div className="mt-4 flex w-full items-start">
            <p className="mr-4 mt-2 font-medium leading-8">热门标签: </p>
            {sortedTags.map((data: string, index: number) => (
              <Button
                key={`tag${index}`}
                className={classNames(
                  'mr-3 mt-2 h-7 cursor-pointer rounded border-0 bg-[#FDEAD9] px-3',
                  activeObj.name === data && 'selected'
                )}
                id={activeObj.name === data && 'selected-tag'}
                onClick={handleClick}
              >
                <span className="whitespace-nowrap text-[14px] font-semibold leading-5 text-[#ED7B2F]">
                  {data}
                </span>
              </Button>
            ))}
          </div>
        </div>
        <div className="relative flex justify-between">
          <div className="grid grid-cols-3 gap-8 pcMin:grid-cols-2 pcMin:gap-10 layer:gap-10 mb:grid-cols-1 mb:gap-6">
            {!filteredBlogPosts.length && '没有找到所匹配的博客，请重新输入'}
            {displayPosts.map((post, index) => (
              <div key={`post${index}`} className="min-h-[320px]">
                <ArticleItem item={post} linkBoxClass="h-full" isShowName={true} />
              </div>
            ))}
          </div>
          <AsideBar newClass="absolute top-0 right-[-400px] maxEdge:right-0 maxEdge:relative maxEdge:top-[-72px] laptop:right-[-32px] pcMin:top-[-108px] layer:hidden" />
        </div>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
      <Code codeClass="mt-[92px] hidden layer:block" />
    </>
  )
}
