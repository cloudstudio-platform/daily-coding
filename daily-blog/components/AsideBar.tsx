import React from 'react'

import AsideCard from './AsideCard'
import Code from './Code'
import classNames from 'classnames'

const AsideBar = ({ newClass = '' }) => (
  <div className={classNames('maxEdge:scale-[80%]', newClass)}>
    <AsideCard title="订阅">
      <Code />
    </AsideCard>
  </div>
)
export default AsideBar
