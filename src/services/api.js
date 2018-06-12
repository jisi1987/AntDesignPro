import { stringify } from 'qs';
import request from '../utils/request';
import config from '../utils/config';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    
    method: 'POST',
    body: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    body: {
      ...params,
      method: 'post',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    body: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

export async function queryTags() {
  return request('/api/tags');
}

export async function queryBasicProfile() {
  return request('/api/profile/basic');
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    body: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    body: params,
  });
}

export async function queryNotices() {
  return request('/api/notices');
}

/* charge-web api start  wxj 2015-05-29*/
/**首页 */
//获取一级菜单
export async function getFirstPermissionData(params){
  return request(config.Links.firstPermissionListLink,{
    method:"POST",
    body:params,
  })
}
//获取二级菜单
export async function getSecondPermissionData(params){
  return request(config.Links.secondPermissionListLink,{
    method:"POST",
    body:params,
  })
}
//获取新闻动态
export async function getNewsListData(params){
  return request(config.Links.newsListLink,{
    method:"POST",
    body:params,
  })
}
//获取代办客户
export async function getCustomListData(params){
  return request(config.Links.customListLink,{
    method:"POST",
    body:params,
  })
}

/** 财务分析 */
//获取一级行业类别
export async function getFirstLevelSysIndustry(params){
  return request(config.Links.firstLevelSysIndustryLink,{
    method:"POST",
    body:params,
  })
}
//根据code获取下一级行业类别
export async function getIndustryByCode(params){
  return request(config.Links.sysIndustryByCodeLink,{
    method:"POST",
    body:params,
  })
}
//根据key搜索行业类别
export async function getIndustryByPath(params){
  return request(config.Links.sysIndustryByPathLink,{
    method:"POST",
    body:params,
  })
}
//上传文件
export async function uploadExcelFile(params){
  return request(config.Links.uploadExcelFileLink,{
    method:"POST",
    body:params,
  })
}
//文件处理
export async function uploadConfig(params){
  return request(config.Links.uploadConfigLink,{
    method:"POST",
    body:params,
  })
}
//获取Excel相关数据
export async function getSheet(params){
  return request(config.Links.sheetLink,{
    method:"POST",
    body:params,
  })
}
//获取表头
export async function getTitle(params){
  return request(config.Links.titleLink,{
    method:"POST",
    body:params,
  })
}
//设置titleconfig
export async function seTitleConfig(params){
  return request(config.Links.titleConfigLink,{
    method:"POST",
    body:params,
  })
}
//获取报表预览数据、目录
export async function getContent(params){
  return request(config.Links.contentLink,{
    method:"POST",
    body:params,
  })
}
//修改报表
export async function updateContent(params){
  return request(config.Links.updateContentLink,{
    method:"POST",
    body:params,
  })
}
//获取数据校验目录
export async function getFileAndSheet(params){
  return request(config.Links.fileandsheetLink,{
    method:"POST",
    body:params,
  })
}
//获取数据校验-数据简表
export async function getSubjectval(params){
  return request(config.Links.subjectvalLink,{
    method:"POST",
    body:params,
  })
}
//修改数据简表
export async function updateSubjectval(params){
  return request(config.Links.updateSubjectvalLink,{
    method:"POST",
    body:params,
  })
}
//生成报告
export async function createReport(params){
  return request(config.Links.reportPdfUrlLink,{
    method:"POST",
    body:params,
  })
}

/* charge-web api end */