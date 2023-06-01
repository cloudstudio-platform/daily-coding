import { FOOTER_ATOM } from 'store/footer'
import Link from './Link'
import classNames from 'classnames'
import Image from 'next/image'

// import siteMetadata from '@/data/siteMetadata'
// import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="relative flex w-full flex-col">
      <div className={classNames('common-footer-box relative w-full')}>
        <div className="m-center footer-content relative flex flex-col pt-20 mb:pb-8 mb:pt-16">
          <div className="mb-logo-content flex mb:justify-between">
            <Link
              href="https://cloud.tencent.com?fromSource=gwzcw.5565740.5565740.5565740&utm_medium=cpc&utm_id=gwzcw.5565740.5565740.5565740"
              target="_blank"
            >
              <Image
                alt="tencent-logo"
                src="https://help-assets.codehub.cn/enterprise/guanwang/tencent-logo-white.svg"
                className="mb-20 mb:mb-6"
                width={120}
                height={32}
              />
            </Link>
            <div className="mx-6 h-8 w-px bg-white mb:mx-4 mb:h-6"></div>
            <Link href="https://cloudstudio.net">
              <Image
                alt="tencent-logo"
                src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/cs-logo.svg"
                className="mb-20 mb:mb-6 "
                width={215}
                height={32}
              />
            </Link>
          </div>
          <div className="flex w-full justify-between tablet:flex-col">
            <div className="footer-content-left flex justify-between mb:flex-wrap">
              {FOOTER_ATOM.map((item) => (
                <div key={item.id} className="mb:mt-8 mb:w-2/4">
                  <p className="pb-4 text-xs leading-6 text-gray-light">{item.category}</p>
                  <ul className="list-none">
                    {item.list.map((data) => (
                      <li key={data.key}>
                        <a
                          href={data.link}
                          className="normal:text-[16px] normal:leading-[26px] inline-block pb-2 text-sm leading-6 text-gray-lighter hover:text-blue-hover layer:font-[16px]"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="flex w-[224px] flex-col tablet:mt-20 tablet:w-full tablet:flex-row tablet:justify-between mb:mt-14 mb:flex-col mb:items-start">
              <div>
                <p className="pb-4 text-right text-xs leading-5 text-gray-light tablet:text-left">
                  关注我们
                </p>
                <div className="flex justify-end">
                  <div className="flex flex-col">
                    <Image
                      alt="qrcode"
                      src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/qrcode_for_cs.jpg"
                      className="rounded-xl"
                      height={96}
                      width={96}
                    />
                    <p className="pt-3 text-center text-sm leading-6 text-gray-lighter">公众号</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <a
                  href="tel:4008306861"
                  className="mt-5 text-right text-[20px] font-medium text-white hover:text-blue-hover tablet:text-[28px] tablet:leading-10 mb:mt-6 mb:text-left mb:text-[23px] mb:leading-7"
                >
                  400-830-6861
                </a>
                <a
                  href="mailto:coding_support@tencent.com"
                  className="text-right text-base font-medium text-white hover:text-blue-hover mb:text-left"
                >
                  coding_support@tencent.com
                </a>
                <div className="mt-5 flex justify-end mb:mt-4 mb:justify-start">
                  <a href="http://weibo.com/n/coding" target="_blank" rel="noreferrer">
                    <Image
                      alt="weibo"
                      src="https://help-assets.codehub.cn/enterprise/20210907113639.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                  <a
                    href="https://zhuanlan.zhihu.com/coding-net"
                    target="_blank"
                    className="ml-4"
                    rel="noreferrer"
                  >
                    <Image
                      alt="zhihu"
                      src="https://help-assets.codehub.cn/enterprise/20210907113644.svg"
                      height={24}
                      width={24}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="common-copyright lm:h-auto my-6 flex h-16 items-center justify-between mb:pt-4">
            <div className="text-sp flex w-full items-center justify-between text-gray-bold tablet:flex-col tablet:items-start">
              <div className="pb-4 text-[13px] leading-4 mb:pb-3 mb:leading-[22px]">
                <span>Copyright © {new Date().getFullYear()} </span>
                <Link href="http://coding.net" className="hover:text-blue-hover">
                  深圳市腾云扣钉科技有限公司
                </Link>
                <span>. All rights reserved.</span>
              </div>
              <div className="flex items-center mb:flex-col mb:items-start">
                <a
                  className="text-[13px] leading-4 hover:text-blue-hover mb:leading-[22px]"
                  href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502002265"
                  target="_blank"
                  rel="noreferrer"
                >
                  粤公网安备 44030502002265号
                </a>
                <div className="bg-gray-normal mx-2 h-[6px] w-px mb:hidden"></div>
                <a
                  className="text-[13px] leading-4 hover:text-blue-hover mb:pt-2 mb:leading-[22px]"
                  target="_blank"
                  href="https://beian.miit.gov.cn/"
                  rel="noreferrer"
                >
                  粤ICP备 14029750号-1
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
