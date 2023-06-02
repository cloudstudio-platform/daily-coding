import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import Recommand from '@/components/Recommand'
import CommunityLink from '@/components/CommuityLink'

export const POSTS_PER_PAGE = 15

export const getStaticProps = async () => {
  const posts = sortedBlogPost(allBlogs) as Blog[]
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)
  const pagination = {
    currentPage: 1,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  }

  return {
    props: {
      initialDisplayPosts: allCoreContent(initialDisplayPosts),
      posts: allCoreContent(posts),
      pagination,
    },
  }
}

export default function BlogPage({
  posts,
  initialDisplayPosts,
  pagination,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title="博客中心 -- Cloud Studio" description={siteMetadata.description} />
      <div className="w-full">
        <div className="insight_mb_index_bg absolute left-0 right-0 top-0 w-full">
          <img
            src="https://help-assets.codehub.cn/enterprise/new-static/images/insight/index_bg.png"
            className="tablet:hidden"
            alt=""
          />
        </div>
        <Recommand posts={posts} />
        <CommunityLink />
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title=""
        />
      </div>
    </>
  )
}
