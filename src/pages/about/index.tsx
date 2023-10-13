import { useEffect } from 'react'
import { ImageTab } from '../../components/ImageTab'
import s from './index.module.less'

const imgList = [
  {
    label: '抗疫支持',
    imgUrl: 'https://nos.netease.com/study-image/2ab30abe053b4d779214b7cb4d87d5c1.png?imageView&quality=100'
  },
  {
    label: '灾害救助',
    imgUrl: 'https://nos.netease.com/edu-image/347f9600521b4df3b9ad33512369133d.png?imageView&quality=100'
  },
  {
    label: '教育普惠',
    imgUrl: 'https://nos.netease.com/edu-image/d3b69d8a8ca1469eaa7dd8eb912a1690.png?imageView&quality=100'
  },
  {
    label: '教育信息化',
    imgUrl: 'https://nos.netease.com/edu-image/0e50316b5afb48ce82a6139bb833fae9.png?imageView&quality=100'
  },
  {
    label: '信息无障碍',
    imgUrl: 'https://nos.netease.com/edu-image/26bc0fcc71944a1db0ecbd5a8bf3ec81.png?imageView&quality=100'
  },
  {
    label: '志愿者公益',
    imgUrl: 'https://nos.netease.com/edu-image/e0f3d7e974404abc9194e29b510a0620.png?imageView&quality=100'
  }
]

const AboutPage = () => {
  useEffect(() => {
    // log({
    //     eventId: "页面展示",
    //     attributes: {
    //       pageName: "考研页",
    //       scene: "关于",
    //       itemId: 'Web'
    //     }
    //   });
  }, [])

  return (
    <div className={s.about}>
      <div
        style={{
          background: '#eef1f8',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        <img
          style={{ width: 1920, height: 490, objectFit: 'contain' }}
          src='https://ydschool-online.nosdn.127.net/2023%2F02%2F01-17%3A30%3A51-8ad76324-8404-4485-96c1-72843459f1cb-web-3840+980.png'
        />
      </div>
      <div style={{ width: 1200, padding: '100px 0' }}>
        <h1 style={{ marginBottom: 28 }} className='text-orange-600'>
          关于我们
        </h1>
        <p style={{ marginBottom: 6 }}>
          有道考研是“网易有道”旗下的考研全科定制产品品牌，作为考研行业内第一个提出并搭建出“考研全科解决方案”体系的机构，实现了考研全科一站式个性化定制解决方案，从择校辅导到学科备考，从初试到复试全面提分。
        </p>
        <br />
        <p style={{ marginBottom: 6 }}>
          在考研人数暴增和考试严重内卷的背景下，有道考研不再片面强调考试技巧和升学竞争，而是搭建考研规划与智能择校系统，衔接职业发展和学业规划、匹配个人意向和海量数据，通过AI规划+真人规划+专家规划实现“人生向前一步”。
        </p>
        <br />
        <p>
          考研是总分+单科分数的组合战役，有道考研独创全科一站式定制学习方案：基于学生的起点、目标和优势，定制最适合学生的目标分数和备考计划，通过定制VIP课表功能将考研的总目标细化为具体的、准确的、可执行的备考方案。
        </p>
      </div>
      <div style={{ width: '100%', background: '#f9fafc', padding: '100px 0' }}>
        <h1>媒体报道</h1>
        <div className='media'>
          <img
            onClick={() =>
              window.open(
                'https://m.mp.oeeee.com/a/BAAFRD000020221027733348.html?layer=2&share=chat&isndappinstalled=0'
              )
            }
            style={{ marginRight: 40 }}
            src='https://nos.netease.com/edu-image/3729236638034022ae8d048ada0f6258.png?imageView&quality=100'
          />
          <img
            onClick={() =>
              window.open('https://m.21jingji.com/article/20221023/herald/bb70af29562cc5eb2b69a9d0d5a088e9.html')
            }
            src='https://nos.netease.com/edu-image/098a39c70fa545f6addb004286dbfe38.png?imageView&quality=100'
          />
        </div>
      </div>
      <div style={{ width: 1200, margin: '0 auto', padding: '100px 0' }}>
        <h1 style={{ marginBottom: 34 }}>负责任 行公益</h1>
        <ImageTab width={1200} height={326} list={imgList} />
      </div>
      <div style={{ width: '100%', background: '#FC011A', padding: '100px 0' }}>
        <h1 style={{ color: '#fff' }}>联系我们</h1>
        <div
          style={{
            width: 1200,
            margin: '60px auto 0',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            color: '#FFF',
            fontSize: 18,
            lineHeight: '25px'
          }}>
          <div style={{ marginRight: 80 }}>
            <img
              style={{ width: 140, height: 140, borderRadius: 12 }}
              src='https://nos.netease.com/edu-image/34d2b63e99e14ed4a8fdc24727b88a82.png?imageView&quality=100'
            />
            <div style={{ marginTop: 16 }}>有道考研公众号</div>
            <div
              style={{
                marginTop: 2,
                opacity: 0.8,
                fontSize: 14,
                lineHeight: '20px'
              }}>
              打开微信扫一扫
            </div>
          </div>
          <div style={{ marginRight: 80 }}>
            <img
              style={{ width: 140, height: 140, borderRadius: 12 }}
              src='https://nos.netease.com/edu-image/436af31d1a0746bd9f7d957f4156f326.png?imageView&quality=100'
            />
            <div style={{ marginTop: 16 }}>有道考研规划师</div>
            <div
              style={{
                marginTop: 2,
                opacity: 0.8,
                fontSize: 14,
                lineHeight: '20px'
              }}>
              打开抖音扫一扫
            </div>
          </div>
          <div style={{ marginRight: 100 }}>
            <img
              style={{ width: 140, height: 140, borderRadius: 12 }}
              src='https://nos.netease.com/edu-image/c44b1dfda68440ee895ce0af1d02f5bc.png?imageView&quality=100'
            />
            <div style={{ marginTop: 16 }}>有道考研小程序</div>
            <div
              style={{
                marginTop: 2,
                opacity: 0.8,
                fontSize: 14,
                lineHeight: '20px'
              }}>
              打开微信扫一扫
            </div>
          </div>
          <div style={{ marginTop: 12, textAlign: 'left' }}>
            <div>客服电话：400902828</div>
            <div style={{ marginTop: 20 }}>接听时段：周一至周日9:00-24:00</div>
            <div style={{ marginTop: 20 }}>在线咨询时段：周一至周日9:00-24:00</div>
            <div style={{ marginTop: 20 }}>邮箱：study@service.netease.com</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
