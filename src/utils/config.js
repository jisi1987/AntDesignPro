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
        //退出
        exitLink: linkConfig.ywlink + "/sso/ssoExit",
        //根据token获取用户信息
        userLink: linkConfig.ywlink + "/login/getUserByToken",

        /** 首页 */
        //获取所有菜单
        allMenuListLink: linkConfig.ywlink + '/permission/getAllPermissionList',
        //获取一级菜单
        firstPermissionListLink: linkConfig.ywlink + '/permission/getFirstPermissionList',
        //获取二级菜单
        secondPermissionListLink: linkConfig.ywlink + '/permission/getSecondPermissionList',

        //获取待办事项
        todoLink: linkConfig.zxlink + '/rest/xdglWarnController/getTodoList.shtml',
        //获取最新消息
        newMsgLink: linkConfig.ywlink + '/tSpotNewsController/getTSpotNews',
        //获取新闻动态
        newsListLink: linkConfig.zxlink + '/rest/news/getAllNewsByType',
        //获取代办客户
        customListLink: linkConfig.ywlink + "/todoCustomer/getCustomerList",


        /** 财务分析 */

        //获取一级行业类别
        firstLevelSysIndustryLink: linkConfig.ywlink + '/sysIndustry/getFirstLevelSysIndustry',
        //根据code获取下一级行业类别
        sysIndustryByCodeLink: linkConfig.ywlink + '/sysIndustry/getSysIndustryByCode/',
        //根据关键字搜索行业类别
        sysIndustryByPathLink: linkConfig.ywlink + '/sysIndustry/getSysIndustryByPath/',

        //生成报告
        reportPdfUrlLink: linkConfig.ywlink + '/tReportContentController/getTReportPdfUrl',
        //上传报表
        uploadExcelFileLink: linkConfig.cwfxlink + '/bank/fi/uploadexcelfile',
        //文件处理
        uploadConfigLink: linkConfig.cwfxlink + '/bank/fi/uploadconfig',
        //获取excel相关数据
        sheetLink: linkConfig.cwfxlink + '/bank/dt/sheet',
        //获取表头
        titleLink: linkConfig.cwfxlink + '/bank/dt/title',
        //设置titleconfig
        titleConfigLink: linkConfig.cwfxlink + '/bank/dt/titleconfig',
        //获取报表预览数据、目录
        contentLink: linkConfig.cwfxlink + '/bank/report/content',
        //修改报表
        updateContentLink: linkConfig.cwfxlink + '/bank/report/updatecontent',
        //获取数据校验的数据简表
        subjectvalLink: linkConfig.cwfxlink + '/bank/dt/subjectval',
        //获取数据校验目录
        fileandsheetLink: linkConfig.cwfxlink + '/bank/dt/fileandsheet',
        //修改数据简表
        updateSubjectvalLink: linkConfig.cwfxlink + '/bank/dt/updatesubjectval',
        


    }
}