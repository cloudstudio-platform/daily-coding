import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Popover, Tabs, Divider, Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from 'ahooks'
import MenuBox from './Menu'
import useWindowSize from 'hooks/windowSize'

export const getCookieValue = (name) => {
  const match = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)')
  return match ? match.pop() : null
}

const downloadList = {
  package: 'https://cloudstudio.net/docs/zips/cloud-studio-browser-extension.zip',
}

const Header = () => {
  const [mdActive, setMdActive] = useState(false)
  const [headerTop, setHeaderTop] = useState(0)
  const { width } = useWindowSize()
  const [isPcMenu, setIsPcMenu] = useState(true)
  const scroll = useScroll()

  const domain = 'https://cloudstudio.net/api/public/login'
  const handleLogin = (e) => {
    e.preventDefault()

    const cookieTeam = getCookieValue('cloudstudio-session-team')
    if (cookieTeam && cookieTeam !== 'codingcorp') {
      window.open(`https://${cookieTeam}.cloudstudio.net/dashboard`)
    } else {
      window.open(`${domain}`)
    }
  }

  useEffect(() => {
    if (!scroll) return
    setHeaderTop(scroll.top)
  }, [scroll])

  useEffect(() => {
    if (width > 1135) {
      setIsPcMenu(true)
    } else {
      setIsPcMenu(false)
    }
  }, [width])

  const download = (type) => {
    const down = document.createElement('a')
    down.href = downloadList[type]
    down.click()
    down.remove() //此步骤可省略
  }

  return (
    <>
      <header className={classNames('menu-header fixed', headerTop && 'header-fixed')}>
        <div className="h-full w-full xs:px-4 sm:px-6 md:px-8 xl:px-20 xxl:px-20">
          <section className="menu-component flex items-center justify-between">
            <nav className="flex items-center">
              <Link href="https://cloudstudio.net" className="mr-2 flex items-center">
                <Image
                  alt="cs-logo"
                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/logo.png"
                  className="rounded-xl"
                  height={30}
                  width={208}
                />
              </Link>

              <div className="h-full items-center">
                <MenuBox isInline={false} isShow={isPcMenu} />
              </div>
            </nav>

            <nav className="flex items-center justify-end">
              <div className="sm:hidden md:hidden">
                <Popover
                  placement="bottomLeft"
                  content={
                    <div className="popover-content">
                      <Tabs className="download-tabs">
                        <Tabs.TabPane tab="客户端" key="item-1">
                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/apple.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">macOS</div>
                            </div>
                            <div className="load-items-desc">X86 (适用于 inter 芯片)</div>
                          </div>

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/apple.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">macOS</div>
                            </div>
                            <div className="load-items-desc">ARM (适用于 M 系列芯片)</div>
                          </div>

                          <Divider className="load-divider" />

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/windows.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Windows</div>
                            </div>
                            <div className="load-items-desc">敬请期待</div>
                          </div>

                          <Divider className="load-divider" />

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/airplay.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">
                                <Link href="https://cloudstudio.net/download">前往下载中心</Link>
                              </div>
                            </div>
                          </div>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="浏览器插件" key="item-2">
                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/chrome.png"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Chrome</div>
                            </div>
                          </div>

                          <Divider className="load-divider" />

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/edge.png"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Edge</div>
                            </div>
                          </div>

                          <Divider className="load-divider" />

                          <Button className="load-items" onClick={() => download('package')}>
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/package.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">离线安装包</div>
                            </div>
                          </Button>

                          <Divider className="load-divider" />

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download/airplay.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">
                                <Link href="https://cloudstudio.net/download">前往下载中心</Link>
                              </div>
                            </div>
                          </div>
                        </Tabs.TabPane>
                      </Tabs>
                    </div>
                  }
                >
                  <button className="download-btn mr-4 sm:hidden md:mr-5 md:hidden">
                    <span>下载客户端</span>
                    <div className="dtn-one"></div>
                    <Image
                      src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/download-arr.png"
                      width={11}
                      height={6}
                      alt=""
                    />
                  </button>
                </Popover>
              </div>

              <button
                className="btn-try text-sm text-white sm:hidden md:mr-5 md:hidden"
                onClick={handleLogin}
              >
                登录/注册
              </button>

              <Button
                className={classNames(
                  'nav-menu flex flex-col justify-center xl:hidden xxl:hidden',
                  {
                    active: mdActive,
                  }
                )}
                onClick={() => setMdActive(!mdActive)}
              >
                <em />
                <em />
                <em />
              </Button>
            </nav>

            <nav
              className={classNames('nav-panel hidden flex-col', {
                'xs:flex sm:flex md:flex': mdActive,
              })}
            >
              <div className="nav-panel-box">
                <MenuBox isInline={true} isShow={!isPcMenu} />
                <div className="nav-login flex items-center justify-center py-8 xs:px-4 sm:px-2">
                  <Button className="login" onClick={handleLogin}>
                    登录/注册
                  </Button>
                </div>
              </div>
            </nav>
          </section>
          <div className="sticky-blur message-header">
            <section className="message-component flex w-full items-center justify-center xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
              <nav className="message-box flex items-center">
                <Image
                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/new-btn.png"
                  width={40}
                  height={20}
                  className="mr-5"
                  alt=""
                />
                <div className="message-text flex items-center text-black">
                  Cloud Studio AI 代码助手已经上线内测，用技术改变世界，用 AI 改变代码！
                </div>
              </nav>
              <nav className="flex flex-nowrap items-center justify-end pl-5 xs:pl-2 sm:pl-3">
                <Link
                  href="https://cloudstudio.net/ai-apply"
                  className="appointment-text flex items-center"
                >
                  预约申请
                </Link>
              </nav>
            </section>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
