import { BackTop } from 'antd'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import s from './index.module.less'

const ROUTE = {
  HOME: '/',
  ABOUT: '/about'
}

export default function () {
  const route = location.pathname
  const navigate = useNavigate()

  return (
    <div className={s.kaoyan}>
      <div className={s['kaoyan-nav']}>
        <div className={'g-flow'}>
          <div
            className={classNames({
              [s['kaoyan-nav_item']]: true,
              [s.active]: route === ROUTE.HOME
            })}
            onClick={() => navigate(ROUTE.HOME)}>
            首页
          </div>
          <div
            className={classNames({
              [s['kaoyan-nav_item']]: true,
              [s.active]: route === ROUTE.ABOUT
            })}
            onClick={() => navigate(ROUTE.ABOUT)}>
            关于
          </div>
        </div>
      </div>
      <div style={{ paddingTop: '53px' }}>{/* <router-view></router-view> */}</div>
      <div className={s['toolbar']}>
        <div
          className={classNames({
            [s.kefu]: true,
            [s['toolbar_item']]: true,
            sobotService: true
          })}
          // ref="zhichiKefu"
          // @click="dataLog"
        >
          <img src='https://ydschool-online.nosdn.127.net/kaoyanfe/2f21a7725b797e9a5ca64a33acf92ba8e5a638b71b74d579fe68e4b50278ce57-zc_icon.gif' />
        </div>
        <BackTop duration={400}>
          <div className={classNames(s.toTop, s['toolbar_item'])}>
            <img src='https://nos.netease.com/edu-image/71b87bf14ec34c5ea9dd1b45e24d5e04.png?imageView&quality=100' />
            回到顶部
          </div>
        </BackTop>
      </div>
    </div>
  )
}
