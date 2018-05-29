import request from '../utils/request';
import config from '../utils/config';
import { getQueryString } from '../utils/utils';

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
    const userData = request(config.Links.userLink, {
      method: 'POST',
      body: {
        token:token,
        method: 'delete',
      },
    });
    console.log(userData);
  }else{
    window.location.href = config.LocalhostUrl;
  }
}