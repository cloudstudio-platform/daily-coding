import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Menu as AntdMenu, Popover, Tabs, Divider, Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from 'ahooks'
import { DownOutlined } from '@ant-design/icons'

export const getCookieValue = (name) => {
  const match = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)')
  return match ? match.pop() : null
}

const { SubMenu } = AntdMenu

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

  const HeaderMenus = ({ className, mode }) => {
    return (
      <AntdMenu className={classNames(className)} mode={mode} selectable={false}>
        <SubMenu key="online-code" title="在线编程">
          <AntdMenu.ItemGroup title="产品特性" key="online-code-1">
            <AntdMenu.Item key="online-cloud">
              <Link href="/cde">云端开发环境</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="online-metawork">
              <Link href="/metawork">MetaWork 多人协作</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="online-deploykit">
              <Link href="/deploykit">DeployKit 云部署</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="online-ai">
              <Link href="/ai">AI 代码助手 (Beta) </Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="online-teams">
              <Link href="/teams">Teams 团队</Link>
            </AntdMenu.Item>
          </AntdMenu.ItemGroup>
        </SubMenu>
        <SubMenu key="code-design" title="开发者社区">
          <AntdMenu.ItemGroup title="开发者社区" key="code-design-1">
            <AntdMenu.Item key="design-csdn">
              <Link href="/incentive">开发者激励计划</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="tx-cloud">
              <Link
                href="https://cloud.tencent.com/developer/zone/cloudstudio?from=19165"
                target="_blank"
              >
                腾讯云
              </Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="blog">
              <Link href="https://daily-blog-eta.vercel.app/blog" target="_blank">
                博客
              </Link>
            </AntdMenu.Item>
          </AntdMenu.ItemGroup>
        </SubMenu>

        {/* <AntdMenu.Item className="alone-menu-item" key="code-teaching">
                <Link href="/code-teaching" >CODING 达人</Link>
            </AntdMenu.Item> */}
        {/* <SubMenu
                key="code-learning"
                title="CODING 达人"
            >
                <AntdMenu.ItemGroup title="CODING 达人" key="code-learning-1">
                    <AntdMenu.Item key="learn-management">
                        <Link href="/code-teaching">CODING 达人</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="learn-ai">
                        <Link href="/code-teaching">AI 助教</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="learn-classroom">
                        <Link href="/code-teaching">在线课堂</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="learn-interaction">
                        <Link href="/code-teaching">互动教程</Link>
                    </AntdMenu.Item>
                </AntdMenu.ItemGroup>
            </SubMenu> */}
        {/* <SubMenu
                key="code-solution"
                title="解决方案"
            >
                <AntdMenu.ItemGroup title="按人群">
                    <AntdMenu.Item key="solution-enterprise">企业</AntdMenu.Item>
                    <AntdMenu.Item key="solution-startup">初创团队</AntdMenu.Item>
                    <AntdMenu.Item key="solution-beginners">初学者</AntdMenu.Item>
                    <AntdMenu.Item key="solution-interaction">互动教程</AntdMenu.Item>
                </AntdMenu.ItemGroup>
                <AntdMenu.ItemGroup title="按场景">
                    <AntdMenu.Item key="solution-education">教育开发场景</AntdMenu.Item>
                    <AntdMenu.Item key="solution-cloudorigin">云原生应用开发场景</AntdMenu.Item>
                    <AntdMenu.Item key="solution-pr">PR - CODING / Github</AntdMenu.Item>
                </AntdMenu.ItemGroup>
                <AntdMenu.ItemGroup title="集成案例">
                    <AntdMenu.Item key="solution-idepages">IDE Pages</AntdMenu.Item>
                    <AntdMenu.Item key="solution-plugins">插件市场</AntdMenu.Item>
                </AntdMenu.ItemGroup>
            </SubMenu> */}
        <SubMenu key="code-language" title="编程语言">
          <AntdMenu.ItemGroup title="编程语言" key="code-language-1">
            <AntdMenu.Item key="lan-c">
              <Link href="/language/c">C</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-cpp">
              <Link href="/language/cpp">C++</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-cp">
              <Link href="/language/cp">C#</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-java">
              <Link href="/language/java">Java</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-python">
              <Link href="/language/python">Python</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-javascript">
              <Link href="/language/javascript">JavaScript</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-php">
              <Link href="/language/php">PHP</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-go">
              <Link href="/language/go">Go</Link>
            </AntdMenu.Item>
            <AntdMenu.Item key="lan-rust">
              <Link href="/language/rust">Rust</Link>
            </AntdMenu.Item>
          </AntdMenu.ItemGroup>
        </SubMenu>
        {/* <SubMenu
                key="advanced-active"
                title="进阶与活动"
            >
                <AntdMenu.ItemGroup title="进阶与活动"  key="advanced-active-1">
                    <AntdMenu.Item key="advanced-active-2">
                        <Link href="/incentive" >开发者激励计划</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="advanced-active-3">
                        <Link href="/incentive">今日技术热点</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="advanced-active-4">
                        <Link href="/incentive">优秀应用推荐</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="advanced-active-5">
                        <Link href="/incentive">代码修道院</Link>
                    </AntdMenu.Item>
                </AntdMenu.ItemGroup>
            </SubMenu> */}
        <AntdMenu.Item className="alone-menu-item" key="docs">
          <Link href="/docs" target="_blank">
            产品文档
          </Link>
        </AntdMenu.Item>
        <AntdMenu.Item className="alone-menu-item" key="mony">
          <Link href="/payment">定价</Link>
        </AntdMenu.Item>
      </AntdMenu>
    )
  }

  return (
    <>
      <header className={classNames('menu-header fixed', headerTop && 'header-fixed')}>
        <div className="h-full w-full xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
          <section className="menu-component grid grid-cols-12 items-center xxl:container">
            <h1 className="col-span-8 sm:col-span-10 md:col-span-8 xl:col-span-2 xxl:col-span-2">
              <Link href="https://cloudstudio.net" className="flex items-center">
                <Image
                  alt="cs-logo"
                  src="https://help-assets.codehub.cn/enterprise/new-static/images/cs/logo.png"
                  className="rounded-xl"
                  height={30}
                  width={208}
                />
              </Link>
            </h1>

            <nav className="hidden h-full items-center xl:col-span-6 xl:flex xxl:col-span-7 xxl:flex">
              <HeaderMenus className="menus-box" mode="horizontal" key="horizontal-menus" />
            </nav>

            <nav className="col-span-4 flex items-center justify-end sm:col-span-2 xxl:col-span-3 xxl:flex">
              {/* <Button
                className="btn-login mr-4 cursor-pointer text-sm sm:hidden md:mr-5 md:hidden"
                onClick={handleLogin}
              >
                注册/登录
              </Button> */}

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
                                <Link href="/download">前往下载中心</Link>
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
                                <Link href="/download">前往下载中心</Link>
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
                <HeaderMenus className="menus-box" mode="inline" key="inline-menus-light" />
                <div className="nav-login flex items-center justify-center py-8 xs:px-4 sm:px-2">
                  {/* <a className="hidden md:block try" onClick={() => tryout()}>
                                    云端体验
                                    </a> */}
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
