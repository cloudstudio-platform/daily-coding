import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'

export default function FourZeroFour() {
  return (
    <>
      <PageSEO title="Page Not Found" description="Sorry we couldn't find this page :(" />
      <div className="md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 flex flex-col items-start justify-start">
        <div className="md:space-y-5 space-x-2 pb-8 pt-6">
          <h1 className="md:border-r-2 md:px-6 md:text-8xl md:leading-14 text-6xl font-extrabold leading-9 tracking-tight text-gray-900">
            404
          </h1>
        </div>
        <div className="max-w-md">
          <p className="md:text-2xl mb-4 text-xl font-bold leading-normal">
            很抱歉，当前页面无法正常访问
          </p>
          <p className="mb-8">我们正在全力排查中，请 点击下方返回主页 或稍后重试。</p>
          <Link
            href="/blog"
            className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none"
          >
            返回主页
          </Link>
        </div>
      </div>
    </>
  )
}
