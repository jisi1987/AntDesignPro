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
  'GET /api/menuData':[
    {
      permissionId: 1,
      permissionName: '首页',
      icon: 'dashboard',
      permissionUrl: '/index',
    },
    {
      permissionId: 2,
      permissionName: '贷后管理',
      icon: 'dashboard',
      permissionUrl: '/afterloan',
      childrenList: [
        {
          permissionId: 4,
          permissionName: '监控名单',
          permissionUrl: '/afterloan/monitorlists',
        },
        {
          permissionId: 5,
          permissionName: '异常监控',
          permissionUrl: '/afterloan/policymonitor',
        },
      ],
    },
    {
      permissionId: 3,
      permissionName: '工具助手',
      icon: 'dashboard',
      permissionUrl: '/creditrisk',
      childrenList: [
        {
          permissionId: 6,
          permissionName: '尽调报告',
          permissionUrl: '/creditrisk/riskcontrolreport',
        },
        {
          permissionId: 7,
          permissionName: '财务分析',
          permissionUrl: '/creditrisk/financeinfo',
        },
        {
          permissionId: 8,
          permissionName: '行业研究报告',
          permissionUrl: '/creditrisk/industryreport',
        },
        {
          permissionId: 9,
          permissionName: '财务指标参照',
          permissionUrl: '/creditrisk/firmperformance',
        },
      ],
    },
  ]
}; 

// 是否禁用代理
const noProxy = process.env.NO_PROXY === 'true';
export default noProxy ? {} : delay(proxy, 1000);
