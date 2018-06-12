import axios from 'axios';
import { notification, Alert } from 'antd';
import config from './config';

function checkStatus(response) {
  const { data: result } = response;
  if (response != null) {
      result.success = true;  // get response successfully      
      const mdata = result.data;
      switch(result.code){
        case "C00000":        
        if(result.data){
          return mdata;
        }else{
          return result;
        }
        break;
        case "C00001":
        window.location.href = config.ssoLoginLink;
        break;
        case "W00020":
        window.location.href = config.ssoLoginLink;
        break;
        default:
        return result;
        break;
      }
        
    }else {
      const error = new Error(result);
      result.success = false;
      error.result = result;
      throw error;
  }
}
/**
 * 参数格式化
 * @param {obj} obj 传进来的参数
 */
function transformRequest(obj) {
  var str = [];
  for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
  return str.join("&");
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "axios"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };

  //是否为财务分析调用接口
  var isCwfx = false;
  if(options && options.body && options.body.isCwfx){
    isCwfx = true;
  }
   
  const newOptions = { ...defaultOptions, ...options };
  
  newOptions.mode="cros"
  if (newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'DELETE') {
    if (!(newOptions.body instanceof FormData)) {
      if(!isCwfx){
        newOptions.body=transformRequest(newOptions.body);
      }
      
      newOptions.data=newOptions.body;
      newOptions.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...newOptions.headers,
      };
      // newOptions.body = JSON.stringify(newOptions.body);
    } else {
      console.log("----------------request body json-------------------")
      // newOptions.body is FormData
      newOptions.headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...newOptions.headers,
        
      };
    }
  }

  
  //财务分析
  if(isCwfx){
    newOptions.processData=false;
    newOptions.contentType=false;
    newOptions.headers={
      ...newOptions.headers,
      'Content-Type':'multipart/form-data'
    }
  }

  return axios.create().request({
    url,
    method: options && options.method ? options.method : 'GET',
    timeout: 15000, // http请求超时时间
    ...newOptions,
  })
    .then(checkStatus)
    .catch((error) => {
      if (error.code) {
        notification.error({
          message: error.name,
          description: error.message,
        });
      }
      // http请求超时处理
      if ('stack' in error && 'message' in error) {
        const { message } = error;
        if (~message.indexOf('timeout')) {
          notification.error({
            message: `请求错误: ${url}`,
            description: '很抱歉您的请求已经超时了，请稍后再试！',
          });
        } else {
          notification.error({
            message: `请求错误: ${url}`,
            description: error.message,
          });
        }
      }
      const result = { success: false };
      return result;
    });
}
