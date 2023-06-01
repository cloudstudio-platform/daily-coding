import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Menu as AntdMenu, Button } from 'antd'
import Link from 'next/link'
import Image from 'next/image'
import { useScroll } from 'ahooks'

export const getCookieValue = (name) => {
  const match = document.cookie.match('(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)')
  return match ? match.pop() : null
}

const { SubMenu } = AntdMenu

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

  return (
    <>
      <header className={classNames('menu-header fixed', headerTop && 'header-fixed')}>
        <div className="h-full w-full max-w-[1440px] xs:px-4 sm:px-6 md:px-8 xl:px-12 xxl:px-12">
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

            <nav className="hidden h-full items-center xl:col-span-6 xl:flex xxl:col-span-8 xxl:flex">
              <AntdMenu className="menus-box" mode="horizontal" selectable={false}>
                <SubMenu key="online-code" title="在线编程">
                  <AntdMenu.ItemGroup title="产品特性" key="online-code-1">
                    <AntdMenu.Item key="online-cloud">云端开发环境</AntdMenu.Item>
                    <AntdMenu.Item key="online-metawork">
                      <Link href="/metawork">MetaWork 多人协作</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="online-deploykit">
                      <Link href="/deploykit">DeployKit 云部署</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="online-ai">
                      <Link href="/ai">AI 代码助手（Beta）</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="online-teams">
                      <Link href="/teams">Teams 团队</Link>
                    </AntdMenu.Item>
                  </AntdMenu.ItemGroup>
                </SubMenu>
                <SubMenu key="code-design" title="开发者社区">
                  <AntdMenu.ItemGroup title="开发者社区">
                    <AntdMenu.Item key="design-csdn">CSDN 转区</AntdMenu.Item>
                  </AntdMenu.ItemGroup>
                </SubMenu>
                <SubMenu key="code-learning" title="代码教学">
                  <AntdMenu.ItemGroup title="代码教学">
                    <AntdMenu.Item key="learn-management">教学管理</AntdMenu.Item>
                    <AntdMenu.Item key="learn-ai">AI 助教</AntdMenu.Item>
                    <AntdMenu.Item key="learn-classroom">在线课堂</AntdMenu.Item>
                    <AntdMenu.Item key="learn-interaction">互动教程</AntdMenu.Item>
                  </AntdMenu.ItemGroup>
                </SubMenu>
                <SubMenu key="code-solution" title="解决方案">
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
                </SubMenu>
                <SubMenu key="code-language" title="编程语言">
                  <AntdMenu.ItemGroup title="编程语言">
                    <AntdMenu.Item key="lan-c">
                      <Link href="/c">C</Link>
                    </AntdMenu.Item>
                    <AntdMenu.Item key="lan-cpp">C++</AntdMenu.Item>
                    <AntdMenu.Item key="lan-c#">C#</AntdMenu.Item>
                    <AntdMenu.Item key="lan-java">Java</AntdMenu.Item>
                    <AntdMenu.Item key="lan-python">Python</AntdMenu.Item>
                    <AntdMenu.Item key="lan-html">HTML</AntdMenu.Item>
                    <AntdMenu.Item key="lan-php">PHP</AntdMenu.Item>
                    <AntdMenu.Item key="lan-go">Go</AntdMenu.Item>
                    <AntdMenu.Item key="lan-rust">Rust</AntdMenu.Item>
                  </AntdMenu.ItemGroup>
                </SubMenu>
              </AntdMenu>
            </nav>

            <nav className="col-span-4 flex items-center justify-end sm:col-span-2 xxl:col-span-2 xxl:flex">
              <Button
                className="btn-login mr-4 cursor-pointer text-sm sm:hidden md:mr-5 md:hidden"
                onClick={handleLogin}
              >
                注册/登录
              </Button>
              <button
                className="btn-try text-sm text-white sm:hidden md:mr-5 md:block md:hidden"
                onClick={() => {
                  console.log(111)
                }}
              >
                云端体验
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
                <AntdMenu mode="inline" selectable={false} theme="light">
                  {/* <PageMenus /> */}
                  <SubMenu key="online-code" title="在线编程">
                    <AntdMenu.ItemGroup title="产品特性" key="online-code-1">
                      <AntdMenu.Item key="online-cloud">云端开发环境</AntdMenu.Item>
                      <AntdMenu.Item key="online-metawork">
                        <Link href="/metawork">MetaWork 多人协作</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="online-deploykit">
                        <Link href="/deploykit">DeployKit 云部署</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="online-ai">
                        <Link href="/ai">AI 代码助手（Beta）</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="online-teams">
                        <Link href="/teams">Teams 团队</Link>
                      </AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                  </SubMenu>
                  <SubMenu key="code-design" title="开发者社区">
                    <AntdMenu.ItemGroup title="开发者社区" key="code-design-1">
                      <AntdMenu.Item key="design-csdn">CSDN 转区</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                  </SubMenu>
                  <SubMenu key="code-learning" title="代码教学">
                    <AntdMenu.ItemGroup title="代码教学" key="code-learning-1">
                      <AntdMenu.Item key="learn-management">教学管理</AntdMenu.Item>
                      <AntdMenu.Item key="learn-ai">AI 助教</AntdMenu.Item>
                      <AntdMenu.Item key="learn-classroom">在线课堂</AntdMenu.Item>
                      <AntdMenu.Item key="learn-interaction">互动教程</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                  </SubMenu>
                  <SubMenu key="code-solution" title="解决方案">
                    <AntdMenu.ItemGroup title="按人群" key="code-solution-1">
                      <AntdMenu.Item key="solution-enterprise">企业</AntdMenu.Item>
                      <AntdMenu.Item key="solution-startup">初创团队</AntdMenu.Item>
                      <AntdMenu.Item key="solution-beginners">初学者</AntdMenu.Item>
                      <AntdMenu.Item key="solution-interaction">互动教程</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                    <AntdMenu.ItemGroup title="按场景" key="code-solution-2">
                      <AntdMenu.Item key="solution-education">教育开发场景</AntdMenu.Item>
                      <AntdMenu.Item key="solution-cloudorigin">云原生应用开发场景</AntdMenu.Item>
                      <AntdMenu.Item key="solution-pr">PR - CODING / Github</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                    <AntdMenu.ItemGroup title="集成案例" key="code-solution-3">
                      <AntdMenu.Item key="solution-idepages">IDE Pages</AntdMenu.Item>
                      <AntdMenu.Item key="solution-plugins">插件市场</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                  </SubMenu>
                  <SubMenu key="code-language" title="编程语言">
                    <AntdMenu.ItemGroup title="编程语言" key="code-language-1">
                      <AntdMenu.Item key="lan-c">
                        <Link href="/c">C</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="lan-cpp">
                        <Link href="/c++">C++</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="lan-c#">
                        <Link href="/c#">C#</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="lan-java">
                        <Link href="/java">JAVA</Link>
                      </AntdMenu.Item>
                      <AntdMenu.Item key="lan-python">Python</AntdMenu.Item>
                      <AntdMenu.Item key="lan-html">HTML</AntdMenu.Item>
                      <AntdMenu.Item key="lan-php">PHP</AntdMenu.Item>
                      <AntdMenu.Item key="lan-go">Go</AntdMenu.Item>
                      <AntdMenu.Item key="lan-rust">Rust</AntdMenu.Item>
                    </AntdMenu.ItemGroup>
                  </SubMenu>
                </AntdMenu>
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
      {/* <NewMessage dark distanceFromTop></NewMessage> */}
    </>
  )
}

export default Header
