import React from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Link from 'next/link'

const items: MenuProps['items'] = [
  {
    label: '在线编程',
    key: 'online-code',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: <Link href="https://cloudstudio.net/cde">云端开发环境</Link>,
            key: 'online-cloud',
          },
          {
            label: <Link href="https://cloudstudio.net/metawork">Metawork 多人协作</Link>,
            key: 'online-metawork',
          },
          {
            label: <Link href="https://cloudstudio.net/deploykit">DeployKit 云部署</Link>,
            key: 'online-deploykit',
          },
          {
            label: <Link href="https://cloudstudio.net/ai">AI 助手 (内测)</Link>,
            key: 'online-ai',
          },
          {
            label: <Link href="https://cloudstudio.net/teams">Teams 团队</Link>,
            key: 'online-teams',
          },
        ],
      },
    ],
  },
  {
    label: <Link href="https://club.cloudstudio.net?channel=blog" target="_blank" rel="noopener noreferrer">开发者社区</Link>,
    key: 'code-design',
  },
  {
    label: '编程语言',
    key: 'language',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: <Link href="https://cloudstudio.net/language/c">C</Link>,
            key: 'c',
          },
          {
            label: <Link href="https://cloudstudio.net/language/cpp">C++</Link>,
            key: 'c++',
          },
          {
            label: <Link href="https://cloudstudio.net/language/cp">C#</Link>,
            key: 'c#',
          },
          {
            label: <Link href="https://cloudstudio.net/language/java">Java</Link>,
            key: 'java',
          },
          {
            label: <Link href="https://cloudstudio.net/language/python">Python</Link>,
            key: 'python',
          },
          {
            label: <Link href="https://cloudstudio.net/language/javascript">JavaScript</Link>,
            key: 'javascript',
          },
          {
            label: <Link href="https://cloudstudio.net/language/go">Go</Link>,
            key: 'go',
          },
          {
            label: '',
            key: '',
          },
          {
            label: '',
            key: '',
          },
          {
            label: '',
            key: '',
          },
          {
            label: '',
            key: '',
          },
        ],
      },
    ],
  },
  {
    label: (
      <Link
        href="https://cloudstudio.net/docs"
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 layerMax:px-0 mb:relative"
      >
        产品文档
      </Link>
    ),
    key: 'docs',
  },
  {
    label: (
      <Link href="https://cloudstudio.net/payment" target="_blank" rel="noopener noreferrer">
        定价
      </Link>
    ),
    key: 'payment',
  },
  {
    label: '更多',
    key: 'more',
    children: [
      {
        type: 'group',
        label: '',
        children: [
          {
            label: <Link href="https://cloudstudio.net/incentive">开发者激励计划</Link>,
            key: 'incentive',
          },
          {
            label: (
              <Link href="https://cloud.tencent.com/developer/zone/cloudstudio?from=19165">
                腾讯云开发者社区
              </Link>
            ),
            key: 'community',
          },
          {
            label: <Link href="https://cloudstudio.net/blog">博客</Link>,
            key: 'blog',
          },
        ],
      },
    ],
  },
]

const MenuBox = ({ isInline }) => {
  return <Menu className="menus-box" mode={isInline ? 'inline' : 'horizontal'} items={items} />
}

export default MenuBox
