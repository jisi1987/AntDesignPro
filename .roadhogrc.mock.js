import mockjs from 'mockjs';
import { getRule, postRule } from './mock/rule';
import { getActivities, getNotice, getFakeList } from './mock/api';
import { getFakeChartData } from './mock/chart';
import { getProfileBasicData } from './mock/profile';
import { getProfileAdvancedData } from './mock/profile';
import { getNotices } from './mock/notices';
import { format, delay } from 'roadhog-api-doc';

// 代码中会兼容本地 service mock 以及部署站点的静态数据
 const proxy = {
  // 支持值为 Object 和 Array
  /* 'GET /proxy-get/(.*)': 'http://wangxj.psds.com.cn:7788/',
  'POST /proxy-post/(.*)': 'http://wangxj.psds.com.cn:7788/',
  'DELETE /proxy-delete/(.*)': 'http://wangxj.psds.com.cn:7788/', */
  
}; 

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
export default noProxy ? {} : delay(proxy, 1000);
