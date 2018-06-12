import request from '../utils/request';
import config from '../utils/config';
import { getQueryString } from '../utils/utils';
//import user from '../models/user';


//获取token


export async function query() {
  return request('/api/users');
}

export async function queryCurrent() {
  return request('/api/currentUser');
}


export async function getUser(){
  const token = getQueryString("token");
  if(token && token!="" && token != undefined && token != "undefined"){
    sessionStorage.setItem("token",token);
    return request(config.Links.userLink, {
      method: 'POST',
      body: {
        token:token
      },
    });
  }else{
    //window.location.href = config.LocalhostUrl;
  }
}

//获取一级菜单
/* export async function getMenuData(){
  const token = getQueryString("token");
  if(token && token!="" && token != undefined && token != "undefined"){
    return request(config.Links.allMenuListLink,{
      method:"POST",
      body: {
        token:token
      },
    })
  }else{
   // window.location.href = config.LocalhostUrl;
  }
} */

//获取moks菜单数据
export async function getMenuData(){
  return request('/api/menuData');
}