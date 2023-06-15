import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { PageSEO } from '@/components/SEO'
import { sortedBlogPost, allCoreContent } from 'pliny/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import { getAllTags } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Recommend from '@/components/Recommend'
import CommunityLink from '@/components/CommuityLink'

export const POSTS_PER_PAGE = 15

export const getStaticProps = async () => {
  const tags = await getAllTags(allBlogs)
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
      tags,
    },
  }
}

export default function BlogPage({
  posts,
  initialDisplayPosts,
  pagination,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO
        title="Cloud Studio_技术博客_开发者社区_在线编程_在线IDE_WebIDE_CloudIDE_VS Code-腾讯云"
        description={siteMetadata.description}
        keywords={siteMetadata.keywords}
      />
      <div className="w-full">
        <div className="absolute left-0 right-0 top-0 w-full">
          <picture>
            <img
              src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/blog-banner.png"
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
        <Recommend posts={posts} />
        <CommunityLink />
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title=""
          tags={tags}
        />
      </div>
    </>
  )
}
