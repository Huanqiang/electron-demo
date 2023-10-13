import moment from 'moment'

import './index.less'
export default function () {
  return (
    <div id='j-footer'>
      <div className='m-yktfoot' id='j-yktfoot'>
        <div className='m-yktfoot_wrapper f-cb g-flow '>
          <div className='m-yktfoot_lf f-fl'>
            <div className='m-yktfoot_copy'>
              &copy;<span>1997- {moment().year()}</span> 网易公司 版权所有
              <span style={{ marginLeft: '20px' }}>浙B-20210430 浙公网安备 33010802011881号</span>
              <span style={{ marginLeft: '20px' }}>
                <a className='m-yktfoot_copy_link' href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank;'>
                  工业和信息化部备案管理系统网站
                </a>
              </span>
            </div>
            <div className='m-yktfoot_copy'>
              违法和不良信息举报电话（涉未成年人）：0571-89853416 举报邮箱（涉未成年人）：youdao_jubao@rd.netease.com{' '}
              <a className='m-yktfoot_copy_link' href='https://www.12377.cn' target='_blank;'>
                网上有害信息举报专区
              </a>
            </div>
            <div className='m-yktfoot_copy'>监督举报邮箱：jb@rd.netease.com </div>
          </div>
        </div>
      </div>
    </div>
  )
}
