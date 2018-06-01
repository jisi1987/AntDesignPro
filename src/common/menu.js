import { isUrl } from '../utils/utils';

const menuData = [
  {
    name: '首页',
    icon: 'dashboard',
    path: 'index',
  },
  {
    name: '精准营销',
    icon: 'form',
    path: 'form',
    children: [
      {
        name: '精准营销',
        path: 'basic-form',
      },
    ],
  },
  {
    name: '尽调助手',
    icon: 'dashboard',
    path: 'list',
    children: [
      {
        name: '企业信用查询',
        path: 'table-list',
      },
      {
        name: '智能财务分析',
        path: 'basic-list',
      },
      {
        name: '企业信用报告',
        path: 'card-list',
      },
      {
        name: '行业研究报告',
        path: 'search',
      },
      {
        name: '财务指标参照',
        path: 'search',
      },
    ],
  },
  {
    name: '风险监控',
    icon: 'dashboard',
    path: 'profile',
    children: [
      {
        name: '监控企业名单',
        path: 'basic',
      },
      {
        name: '核心信息监控',
        path: 'advanced',
      },
      {
        name: '风险动态预警',
        path: 'advanced',
      },
      {
        name: '舆情查询',
        path: 'advanced',
      },
      {
        name: '舆情简报',
        path: 'advanced',
      },
    ],
  },
  {
    name: '业务管理',
    icon: 'dashboard',
    path: 'result',
    children: [
      {
        name: '授信申请处理',
        path: 'success',
      },
      {
        name: '业务智能提醒',
        path: 'fail',
      },
      {
        name: '信贷产品发布',
        path: 'fail',
      },
    ],
  },
  {
    name: '我的文库',
    icon: 'dashboard',
    path: 'exception',
    children: [
      {
        name: '财务分析报告',
        path: '403',
      },
      {
        name: '企业信用报告',
        path: '404',
      },
      {
        name: '行业研究报告',
        path: '500',
      },
      {
        name: '新闻资讯收藏',
        path: 'trigger',
      },
    ],
  },
];

function formatter(data, parentPath = '/', parentAuthority) {
  return data.map(item => {
    let { path } = item;
    if (!isUrl(path)) {
      path = parentPath + item.path;
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    };
    if (item.children) {
      result.children = formatter(item.children, `${parentPath}${item.path}/`, item.authority);
    }
    return result;
  });
}

export const getMenuData = () => formatter(menuData);
