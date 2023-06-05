import React, { useEffect, useState } from 'react'
import { message, Modal, notification } from 'antd'
import { instancePost } from '../until/http'
import statusSvg from '../public/static/images/icon.svg'
import FingerprintJS from '@fingerprintjs/fingerprintjs'

const fpPromise = FingerprintJS.load()

const useExperienceSpace = () => {
  const [confirmLoading, setConfirmLoading] = useState(false)
  const [canvasId, setCanvasId] = useState(null)
  const [isModalVisible, setIsModalVisible] = useState(false)

  const openNotification = (description) => {
    notification.info({
      key: 'updatable',
      message: '提醒',
      description: `${description}`,
      placement: 'bottomRight',
      className: 'cs-notification',
      icon: <img src={statusSvg} />,
    })
  }

  const makeCanvas = async () => {
    const fp = await fpPromise
    const result = await fp.get()
    const visitorId = result.visitorId
    console.log('visitorId:', visitorId)
    setCanvasId(visitorId)
  }

  const handleOk = async () => {
    setConfirmLoading(true)
    const getData = (id) => {
      const sourceAPI = `/api/public/experience?fingerprint=${id}`
      console.log('sourceAPI:', sourceAPI)
      return instancePost(sourceAPI)
    }
    const res: any = await getData(canvasId)
    setConfirmLoading(false)
    const isBrowser = typeof window !== 'undefined'
    if (!isBrowser) return
    const ua = navigator.userAgent
    // 判断平板
    const isIphone = ua.indexOf('iPhone') != -1
    const isTablet = !isIphone && 'ontouchend' in document
    switch (+res.code) {
      case 0:
        isTablet || isIphone ? (window.location.href = res.data) : window.open(res.data)
        break
      case 1080:
        openNotification('超过每日试用空间的创建数量！')
        break
      case 1081:
        openNotification('您今天的体验时长已用完，若想继续使用请先登录。')
        break
      default:
        message.error('请求失败。')
    }
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const TipsModal = () => (
    <Modal
      title={'创建试用空间'}
      open={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      confirmLoading={confirmLoading}
      cancelText="取消"
      okText="确定"
    >
      <p>每台设备每天可试用一小时，点击确认继续创建。</p>
    </Modal>
  )

  useEffect(() => {
    makeCanvas()
  }, [])

  return {
    TipsModal,
    handleOk,
  }
}

export default useExperienceSpace
