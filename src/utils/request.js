import axios from 'axios';
import { notification } from 'antd';

function checkStatus(response) {
  const { data: result } = response;
  if (response != null) {
      result.success = true;  // get response successfully
      return result.data;
    }else {
      const error = new Error(result);
      result.success = false;
      error.result = result;
      throw error;
  }
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
  function transformRequest(obj) {
    var str = [];
    for(var p in obj)
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
}
  const newOptions = { ...defaultOptions, ...options };
  newOptions.mode="cros"
  if (newOptions.method === 'POST' || newOptions.method === 'PUT' || newOptions.method === 'DELETE') {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.body=transformRequest(newOptions.body);
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
