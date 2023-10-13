import { useState } from 'react'
import s from './index.module.less'

export const ImageTab = ({
  list,
  width,
  height,
  tabWidth
}: {
  list: Array<any>
  width: number
  height: number
  tabWidth?: number
}) => {
  const [active, setActive] = useState(0)

  return (
    <div className={`${s.imgtab} imgtab`}>
      <div className='header'>
        {list.map((item, index) => {
          return (
            <div
              key={item.label}
              style={{ width: `${tabWidth}px` }}
              className={`tab ${active === index ? 'active' : ''}`}
              onMouseEnter={() => {
                setActive(index)
              }}>
              {item.label}
            </div>
          )
        })}
      </div>
      <div className='content'>
        <div style={{ width, height }}></div>
        {list.map((item, index) => {
          return (
            <img
              width={width}
              height={height}
              src={item.imgUrl}
              key={item.imgUrl}
              style={{ opacity: index === active ? 1 : 0 }}
            />
          )
        })}
      </div>
    </div>
  )
}
