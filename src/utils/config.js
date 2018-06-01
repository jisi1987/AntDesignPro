import { link } from "fs";

const linkConfig = {
    ssoLoginLink:'https://login.psds.com.cn/login?service=http://wangxj.psds.com.cn:7799/sso/logined.shtml',
    //zxlink:"https://nr.psds.com.cn",
    zxlink:"http://wangxj.psds.com.cn:7788",
    cwfxlink:"https://fa.psds.com.cn",
    //ywlink:"https://fr.psds.com.cn",
    ywlink:"http://wangxj.psds.com.cn:7799",
    
}

export default {
    ssoLoginLink:linkConfig.ssoLoginLink,
    CORS:['http://wangxj.psds.com.cn:8000'],
    baseURL:linkConfig.ywlink,
    Links:{
        exitLink: linkConfig.ywlink + "/sso/ssoExit",
        userLink: linkConfig.ywlink + "/login/getUserByToken",
        todoLink: linkConfig.zxlink + '/rest/xdglWarnController/getTodoList.shtml',
        newMsgLink: linkConfig.ywlink + '/tSpotNewsController/getTSpotNews',
        newsListLink: linkConfig.zxlink + '/rest/news/getAllNewsByType',
    }
}