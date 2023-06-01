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
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, date, title, avatar, author } = content

  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/${path}`} {...content} />
      <ScrollTopAndComment />
      <div className="blog-article_detail_bg"></div>
      <article className="relative z-10">
        <div className="pb-[88px] pt-[128px] xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
          <header>
            <div className="flex">
              <Link href="/blog">首页</Link>
              <span className="px-4">&gt;</span>
              <span>文章页</span>
            </div>
            <div className="border-b border-gray-200 py-10">
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <dl>
                <div className="flex items-center pt-10">
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
              <div className="prose max-w-[860px] pb-8 pt-10 lgS:max-w-[55vw] layer:w-full layer:max-w-[none]">
                {children}
              </div>
              <AsideBar newClass="absolute top-0 right-[-32px] layer:hidden" />
            </div>
            <footer>
              <div className="mt-6 flex justify-between text-sm font-medium sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${prev.path}`}
                      className="text-[#0066ff] hover:opacity-80"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/${next.path}`}
                      className="self-end text-[#0066ff] hover:opacity-80"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
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
