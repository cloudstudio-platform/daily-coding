import { MDXLayoutRenderer } from 'pliny/mdx-components'
import PageTitle from '@/components/PageTitle'
import { MDXComponents } from '@/components/MDXComponents'
import { sortedBlogPost, coreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs, allAuthors } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'

const DEFAULT_LAYOUT = 'PostSimple'

export async function getStaticPaths() {
  return {
    paths: allBlogs.map((p) => ({ params: { slug: p.slug.split('/') } })),
    fallback: false,
  }
}

export const getStaticProps = async ({ params }) => {
  const slug = (params.slug as string[]).join('/')
  const sortedPosts = sortedBlogPost(allBlogs) as Blog[]
  const postIndex = sortedPosts.findIndex((p) => p.slug === slug)
  const prevContent = sortedPosts[postIndex + 1] || null
  const prev = prevContent ? coreContent(prevContent) : null
  const nextContent = sortedPosts[postIndex - 1] || null
  const next = nextContent ? coreContent(nextContent) : null
  const post = sortedPosts.find((p) => p.slug === slug)
  const authorList = post.authors || ['default']
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author)
    return coreContent(authorResults)
  })

  return {
    props: {
      post,
      authorDetails,
      prev,
      next,
    },
  }
}

export default function BlogPostPage({
  post,
  authorDetails,
  prev,
  next,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="absolute left-0 w-full">
        <picture>
          <img
            src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/article-banner.png"
            className="xs:hidden sm:hidden"
            alt=""
          />
          <img
            className="hidden xs:block sm:block"
            src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/mb-bg.png"
            alt=""
          />
        </picture>
      </div>
      <MDXLayoutRenderer
        layout={DEFAULT_LAYOUT}
        content={post}
        MDXComponents={MDXComponents}
        toc={post.toc}
        authorDetails={authorDetails}
        prev={prev}
        next={next}
      />
    </>
  )
}
