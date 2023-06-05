import React from 'react'

import classNames from 'classnames'

const StartAI = ({ className = '', tryout }) => {
  return (
    <section className={classNames(className, 'start-ai')}>
      <p className="free-text mb-10">开启您的编程之旅</p>
      <button className="free-btn" onClick={() => tryout()}>
        快速体验
      </button>
    </section>
  )
}

export default StartAI
