/**
 * @Description: 版权组件
 * @Version: 1.0.0
 * @Author: housc
 * @CreateTime: 2023-07-11 16:44
 * @LastEditors: housc
 */

import { CopyrightOutlined } from '@ant-design/icons'
import styles from './index.module.scss'

const CopyRight = function () {
   return <div className={styles.copyRight}>
      <CopyrightOutlined />
      <p>2023 Build By H&D</p>
   </div>
}

export default CopyRight
