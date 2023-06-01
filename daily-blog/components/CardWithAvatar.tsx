import Image from 'next/image'
import React from 'react'

import classNames from 'classnames'

interface CardWithAvatarProps {
  className?: string
  avatar?: string
  name?: string
}

const DEFAULT_AVATAR = 'https://help-assets.codehub.cn/enterprise/guanwang/coding-logo.svg'

const CardWithAvatar = ({ avatar, className = '', name }: CardWithAvatarProps) => (
  <div className={classNames('flex items-center', className)}>
    {avatar ? (
      <Image src={avatar} alt="avatar" priority width={32} height={32} className="rounded-full" />
    ) : (
      <Image src={DEFAULT_AVATAR} alt="avatar" priority width={102} height={20} />
    )}
    {name && <span className="pl-3 text-[14px] text-[#4C576E]">{name}</span>}
  </div>
)
export default CardWithAvatar
