import { useState } from 'react'
import { ImageTab } from '../../components/ImageTab'
import s from './index.module.less'

const HomePage = () => {
  const [guihuaActive, setGuihuaActive] = useState(0)

  return (
    <div className={s.main}>
      <div
        style={{
          background: '#eef1f8',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <img
          style={{ width: 1920 }}
          src='https://ydschool-online.nosdn.127.net/2023%2F02%2F01-17%3A30%3A51-8ad76324-8404-4485-96c1-72843459f1cb-web-3840+980.png'
        />
      </div>
      <img
        style={{ width: 1440 }}
        src='https://nos.netease.com/edu-image/bd939edcab604266a63e1e38082735dd.png?imageView&quality=100'
      />
      <div
        style={{
          background: 'rgb(255, 245, 242)',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <img
          style={{ width: 1920 }}
          src='https://nos.netease.com/edu-image/ac1d31d137b44aecbcf42650a9c86e7b.png?imageView&quality=100'
        />
      </div>

      <div style={{ background: '#f9fafc', width: '100%' }}>
        <div style={{ width: 1440, margin: '0 auto' }}>
          <h1>有道考研规划体系</h1>
          <h2>左手AI、右手真人，专家坐镇、精准定校</h2>
          <div className='module'>
            <div>
              <div className='title'>AI智能择校工具 大数据精准推荐</div>
              <div className='detail'>覆盖千所高校近10年报录及考纲数据</div>
              <div className='detail'>覆盖十四大学科门类117个一级学科</div>
              <div className='detail'>覆盖已设立硕士学位点的全部高校</div>
              {/* 隐藏按钮 */}
              {/* <div className="btn" onClick={handleSmart}>
                免费智能择校
              </div> */}
            </div>
            <img src='https://nos.netease.com/edu-image/4537bb6ec5014d2483e35b6be3dfe4cc.png?imageView&quality=100' />
          </div>
          <div className='module'>
            <img
              src='https://nos.netease.com/edu-image/093cfb967018497ebbcee0fc6c5d829b.png?imageView&quality=100'
              alt=''
            />
            <div>
              <div className='title'>1v1真人择校 定位高竞争力目标院校</div>
              <div className='detail'>01 初步沟通学员学习情况及考研意向</div>
              <div className='detail'>02 辅助梳理择校信息后确定选择范围</div>
              <div className='detail'>03 基于相关信息给予相关指导和建议</div>
              <div className='detail'>04 提供完整版智能择校报告电子文档</div>
              {/* 隐藏按钮 */}
              {/* <div className="btn" onClick={handle1v1}>
                预约1V1真人择校
              </div> */}
            </div>
          </div>
          <div className='module'>
            <div>
              <div className='title' style={{ marginBottom: 21 }}>
                资深专家1v1规划 精准定校
              </div>
              {['16年考研规划专家领衔', '平均5年以上规划辅导经验', '10w+海量真实学员成功案例'].map((item, index) => {
                return (
                  <div
                    className={`imgtab ${guihuaActive === index && 'guihuaActive'}`}
                    onMouseEnter={() => setGuihuaActive(index)}>
                    {item}
                  </div>
                )
              })}
              {/* 隐藏按钮 */}
              {/* <div className="btn" onClick={handleProfession}>
                预约专家号
              </div> */}
            </div>
            <div>
              {guihuaImgList.map((item, index) => (
                <img
                  src={item}
                  key={item}
                  style={{
                    display: guihuaActive === index ? 'block' : 'none',
                    ...(index === 0 ? { height: '432px', transform: 'translateY(-42px)' } : {})
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <h1>有道考研定制学习体系</h1>
        <h2 style={{ marginBottom: 42 }}>从起点到目标的定制化学习方案</h2>
        <ImageTab list={learnList} width={1440} height={648} tabWidth={310} />
        {/* 隐藏按钮 */}
        {/* <div
          className="btn center-btn"
          style={{ width: 300, bottom: 80 }}
          onClick={handleVip}
        >
          立即定制学习
        </div> */}
      </div>
      <div style={{ background: '#e6e6e6', width: '100%' }}>
        <div style={{ width: 1200, margin: '0 auto', paddingBottom: 20 }}>
          <h1>专业师资 为您保驾护航</h1>
          <h2>集结业内权威师资 助力考研备考</h2>
          <img
            width={1200}
            style={{ margin: '60px auto' }}
            src='https://nos.netease.com/edu-image/a332d91f809d4eefb0432d8ca3c264b5.png?imageView&quality=100'
          />
        </div>
      </div>
      <div>
        <h1>品牌荣誉</h1>
        <h2>值得信赖的考研品牌</h2>
        <img
          width={1200}
          style={{ margin: '80px auto' }}
          src='https://nos.netease.com/edu-image/f5d5ebc61bef490e8cc877df664e95de.png?imageView&quality=100'
        />
      </div>
    </div>
  )
}

const guihuaImgList = [
  'https://nos.netease.com/edu-image/a79a7903ade34c759bcecdf16f92a488.png?imageView&quality=100',
  'https://ydschool-online.nosdn.127.net/kaoyanfe/0f424c7f17ac1946db221a48341d026fdd16e5336b82bdf75b6a8e1d54994d51-Group_427320027_(3).png',
  'https://nos.netease.com/edu-image/fc54ecc43c864a939abc48c363362227.png?imageView&quality=100'
]
const learnList = [
  {
    label: '全科备考 全科定制VIP课表',
    imgUrl: 'https://nos.netease.com/edu-image/4e68606a67ba44e58720cbc28ed50f2b.png?imageView&quality=100'
  },
  {
    label: '政英数&统考专业课 五维定制',
    imgUrl: 'https://nos.netease.com/edu-image/d6ace7d6df274c96be6f7cf7f79d9f5c.png?imageView&quality=100'
  },
  {
    label: '专业课1V1 全程定制',
    imgUrl: 'https://nos.netease.com/edu-image/d1db4766793a4b0b974d1d688711ad04.png?imageView&quality=100'
  }
]

export default HomePage
