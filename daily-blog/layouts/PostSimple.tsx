import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import Image from 'next/image'
import Code from '@/components/Code'
import AsideBar from '@/components/AsideBar'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string; slug: string }
  prev?: { path: string; title: string; slug: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, avatar, author, tags, description, keywords } = content

  return (
    <SectionContainer>
      <BlogSEO
        keywords={keywords}
        description={description}
        url={`${siteMetadata.siteUrl}/${path}`}
        {...content}
      />
      <ScrollTopAndComment />
      <article className="relative z-10">
        <div className="pb-[104px] pt-[208px] mb:pt-[80px]">
          <header>
            <div className="flex">
              <Link href="/" className="text-[#4C576E] hover:text-blue-hover">
                首页
              </Link>
              <span className="px-4">&gt;</span>
              <span className="text-[#202D40]">文章页</span>
            </div>
            <div className="border-b border-gray-200 py-10 mb:py-8">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl>
                <div className="flex items-center pt-10 mb:pt-6">
                  <dd className="pr-3">
                    {avatar && (
                      <Image
                        className="rounded-full "
                        src={avatar}
                        width={32}
                        height={32}
                        alt={''}
                      />
                    )}
                  </dd>
                  <dd>
                    {author ? (
                      <span>{author}</span>
                    ) : (
                      <Image
                        src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/logo.png"
                        width={168}
                        height={24}
                        alt={''}
                      />
                    )}
                  </dd>
                  <div className="mx-6 h-[13px] w-[1px] bg-[#D9D9D9]"></div>
                  <dd className="text-base font-medium leading-6 text-gray-500">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
            </div>
          </header>
          <div className="">
            <div className="relative flex justify-between">
              <div className="article-content-box prose max-w-[980px] pb-[120px] pt-10 lgS:max-w-[55vw] layer:w-full layer:max-w-[none] mb:pb-20 mb:pt-4">
                {children}
              </div>
              <AsideBar newClass="absolute top-[-12px] right-[-32px] layer:hidden" />
            </div>
            <footer>
              <div className="mb-12 h-px w-full bg-gray-200"></div>
              <div className="mb-16 flex w-full items-center mb:mb-8">
                <p className="pr-8 text-[18px] font-medium leading-6 text-[#232D3F]">标签</p>
                {tags.map((data: string, index: number) => (
                  <div key={`tag${index}`} className="mr-3 rounded bg-[#FDEAD9] px-3">
                    <span className="whitespace-nowrap text-[14px] font-semibold leading-7 text-[#ED7B2F]">
                      {data}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-12 flex justify-between text-sm font-medium sm:text-base mb:flex-col">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.slug}`}
                      className="text-base text-[#0066ff] hover:opacity-80"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      <span className="pr-2">&lt;</span>
                      上一篇：{prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="self-end pt-4 xl:pt-8">
                    <Link
                      href={`/${next.slug}`}
                      className="text-base text-[#0066ff] hover:opacity-80"
                      aria-label={`Next post: ${next.title}`}
                    >
                      下一篇：{next.title}
                      <span className="pl-2">&gt;</span>
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
      <Code codeClass="hidden layer:block" />
    </SectionContainer>
  )
}
