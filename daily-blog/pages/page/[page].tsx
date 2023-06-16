import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import ListLayout from '@/layouts/ListLayout'
import { allCoreContent, sortedBlogPost } from 'pliny/utils/contentlayer'
import { POSTS_PER_PAGE } from '../index'
import { InferGetStaticPropsType } from 'next'
import { allBlogs } from 'contentlayer/generated'
import type { Blog } from 'contentlayer/generated'
import { getAllTags } from 'pliny/utils/contentlayer'
import Recommend from '@/components/Recommend'
import CommunityLink from '@/components/CommuityLink'

export const getStaticPaths = async () => {
  const totalPosts = allBlogs
  const totalPages = Math.ceil(totalPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context) => {
  const {
    params: { page },
  } = context
  const tags = await getAllTags(allBlogs)
  const posts = sortedBlogPost(allBlogs) as Blog[]
  const pageNumber = parseInt(page as string)
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )
  const pagination = {
    currentPage: pageNumber,
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

export default function PostPage({
  posts,
  initialDisplayPosts,
  pagination,
  tags,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title="博客列表" description={siteMetadata.description} />
      <div className="w-full">
        <div className="absolute left-0 right-0 top-0 w-full">
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
        <Recommend posts={posts} />
        <CommunityLink />
        <ListLayout
          posts={posts}
          initialDisplayPosts={initialDisplayPosts}
          pagination={pagination}
          title="博客列表"
          tags={tags}
        />
      </div>
    </>
  )
}
