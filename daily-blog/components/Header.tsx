import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Popover, Tabs, Divider, Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from 'ahooks'
import { DownOutlined } from '@ant-design/icons'
import MenuBox from './Menu'

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

  const download = (type) => {
    const down = document.createElement('a')
    down.href = downloadList[type]
    down.click()
    down.remove() //此步骤可省略
  }

  return (
    <>
      <header className={classNames('menu-header fixed', headerTop && 'header-fixed')}>
        <div className="h-full w-full xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
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

              <div className="hidden h-full items-center xl:flex xxl:flex">
                <MenuBox isInline={false} />
              </div>
            </nav>

            <nav className="flex items-center justify-end xxl:flex">
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
                    <DownOutlined />
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
                <MenuBox isInline={true} />
                <div className="nav-login flex items-center justify-center py-8 xs:px-4 sm:px-2">
                  <Button className="login" onClick={handleLogin}>
                    登录/注册
                  </Button>
                </div>
              </div>
            </nav>
          </section>
        </div>
      </header>
    </>
  )
}

export default Header
