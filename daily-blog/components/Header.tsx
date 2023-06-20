import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Popover, Divider, Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from 'ahooks'
import MenuBox from './Menu'
import useWindowSize from 'hooks/windowSize'
import { RightOutlined } from '@ant-design/icons'
import { identificationBrowser } from './../until/device'
import { Browsers } from './../until/enums'

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
  const [isPcMenu, setIsPcMenu] = useState(false)
  const scroll = useScroll()
  const [url, setUrl] = useState(null)
  const [curBrowser, setCurBrowser] = useState(null)

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

  useEffect(() => {
    const browser = identificationBrowser()
    setCurBrowser(browser)
    const data = Browsers[browser]
    setUrl(data)
  }, [])

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
                  height={width > 1135 ? 30 : 20}
                  width={width > 1135 ? 208 : 140}
                />
              </Link>

              <div className="h-full items-center">{isPcMenu && <MenuBox isInline={false} />}</div>
            </nav>

            <nav className="flex items-center justify-end">
              <div className="sm:hidden md:hidden">
                <Popover
                  placement="bottomLeft"
                  content={
                    <>
                      <div className="popover-content download-tabs">
                        <div className="electron-box">
                          <h3 className="cate-title">客户端</h3>
                          <Button
                            className="load-items"
                            onClick={() => {
                              window.open(
                                'https://cs-res.codehub.cn/cloudstudio-home/Cloud Studio-darwin-x64-1.0.0.zip'
                              )
                            }}
                          >
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/apple-grey.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">macOS</div>
                            </div>
                            <div className="load-items-desc">X86 (适用于 Intel 芯片)</div>
                          </Button>

                          <Button
                            className="load-items"
                            onClick={() => {
                              window.open(
                                'https://cs-res.codehub.cn/cloudstudio-home/Cloud Studio-darwin-arm64-1.0.0.zip'
                              )
                            }}
                          >
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/apple-grey.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">macOS</div>
                            </div>
                            <div className="load-items-desc">ARM (适用于 M 系列芯片)</div>
                          </Button>

                          <div className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/win-grey.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Windows</div>
                            </div>
                            <div className="load-items-desc">敬请期待</div>
                          </div>
                        </div>
                        <Divider className="load-divider" />
                        <div className="chrome-box">
                          <h3 className="cate-title">浏览器插件</h3>
                          <Link href={url} target="_blank" className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/chrome.png"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Chrome</div>
                            </div>
                            {curBrowser === 'chrome' && (
                              <div className="load-items-desc">当前浏览器</div>
                            )}
                          </Link>
                          <Link href={url} target="_blank" className="load-items">
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/edge.png"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">Edge</div>
                            </div>
                            {curBrowser === 'edge' && (
                              <div className="load-items-desc">当前浏览器</div>
                            )}
                          </Link>
                          <Button className="load-items" onClick={() => download('package')}>
                            <div className="load-items-title-box">
                              <picture>
                                <img
                                  className="items-icon"
                                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/downloads/package.svg"
                                  alt=""
                                />
                              </picture>
                              <div className="items-title">离线安装包</div>
                            </div>
                          </Button>
                        </div>
                      </div>
                      <div className="load-items-turn">
                        <Link href="https://cloudstudio.net/download">前往下载中心</Link>
                        <RightOutlined />
                      </div>
                    </>
                  }
                >
                  <button
                    id="download-tabs"
                    className="download-btn mr-4 sm:hidden md:mr-5 md:hidden"
                  >
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
                <span></span>
              </Button>
            </nav>

            <nav
              className={classNames('nav-panel hidden flex-col', {
                'xs:flex sm:flex md:flex': mdActive,
              })}
            >
              <div className="nav-panel-box">
                {!isPcMenu && <MenuBox isInline={true} />}
                <div className="nav-login flex items-center justify-center py-8 xs:px-4 sm:px-2">
                  <Button className="login" onClick={handleLogin}>
                    登录/注册
                  </Button>
                </div>
              </div>
            </nav>
          </section>
          <div className="sticky-blur message-header">
            <section className="message-component flex w-full items-center justify-center xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12 layer:justify-between">
              <nav className="message-box flex items-center layer:items-start">
                <Image
                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/new-btn.png"
                  width={width > 1135 ? 40 : 32}
                  height={width > 1135 ? 20 : 16}
                  className="mr-5 layer:mr-3"
                  alt=""
                />
                <div className="message-text flex items-center text-black">
                  Cloud Studio AI 代码助手已经上线内测，用技术改变世界，用 AI 改变代码！
                </div>
              </nav>
              <nav className="flex flex-nowrap items-center justify-end pl-5 xs:pl-2 sm:pl-3">
                <Link
                  href="https://cloudstudio.net/ai-apply"
                  className="appointment-text flex items-center mb:hidden"
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
