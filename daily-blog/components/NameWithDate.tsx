import React from 'react'

import classNames from 'classnames'

import CardWithAvatar from './CardWithAvatar'
import moment from 'moment'

const NameWithDate = ({ avatar, className = '', author, date, isDivide = false }) => (
  <div className={classNames('flex items-center', !isDivide && 'w-full justify-between')}>
    <CardWithAvatar avatar={avatar} name={author} className={className} />
    {isDivide && <div className="mx-6 h-[13px] w-[1px] bg-[#D9D9D9]"></div>}
    <span className="text-[14px] text-[#4C576E]">{moment(date).format('YYYY-MM-DD')}</span>
  </div>
)
export default NameWithDate
