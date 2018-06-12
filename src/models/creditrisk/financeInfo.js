import { 
    getFirstLevelSysIndustry, 
    getIndustryByCode, 
    getIndustryByPath,
    uploadExcelFile,
    uploadConfig,
    getSheet,
    getTitle,
    seTitleConfig,
    getContent,
    updateContent,
    getFileAndSheet,
    getSubjectval,
    updateSubjectval,
    createReport
} from '../../services/api';

export default {
    namespace: 'financeInfo',
    state:{
        reporttype:0,//上传的报表类型：0:年度报表，1:月度，2：季度，3：年中
        excelindex:0,//定位当前上传的excel位置，0：最近，1:2018,2:2017,3:2016
        
        filekey:["","","",""],//上传excel返回的key,对应页面从上到下四个文件
        
        sheetkey:["A","P","C"],//固定的报表对应sheetkey，A:资产负载表、P:损益表、C:现金流量表的顺序
        newsheetname:["","",""],//新的sheetname,按资产负载表、损益表、现金流量表的顺序
        rawSheetList:[],//返回的sheetname
        
        //原始表头列组
        zcfzbRawRow:[],//资产负债表列组
        sybRawRow:[],//损益表列组
        xjllbRawRow:[],//现金流量表列组
        
        //原始表头列组+前缀
        zcfzbRawRow_p:[],//资产负债表列组
        sybRawRow_p:[],//损益表列组
        xjllbRawRow_p:[],//现金流量表列组
        
        //表头列组fieldName  list
        zcfzbFieldName:[], //资产负载表
        sybFieldName:[],   //损益表
        xjllbFieldName:[], //现金流量表
        
        //新对应后的表头列组
        zcfzbTitleGroup:[],//资产负债表列组
        sybTitleGroup:[],//损益表列组
        xjllbTitleGroup:[],//现金流量表列组
        
        titleConfig:null,//titleconfig接口参数
        titlegroup:"",//titleconfig接口参数
        
        //获取财务报告参数
        entName: "",//企业名称
        entUid: "",//企业标识
        
        //数据预览左侧菜单
        previewNav:null,
        //数据验证左侧菜单
        checkNav:[],
        isZC:true,//当前显示的简表是否为资产负载表
        subjectval:null, //数据校验表格数据，包含整个文档的三个报表
        checkTable:null, //数据校验单个报表的数据
        checkFileKey:"",//当前显示的报表的filekey
        checkSheetKey:"", //当前显示的报表的sheetkey
        
        //行业类别
        lists: [],//按规模以上企业的行业类别：[级别1,级别2,级别3...]
        scaleid: null,//选中的行业类别id
        scaletxts: [],//选中的行业类别名称   
        path:"", //行业关键字
        pathlist:null//行业类别模糊搜索结果
    },
    effects:{
        *uploadFile({payload},{call,put}){
            const response = yield call(uploadExcelFile,payload);
            yield put({
                type:'eUploadFile',
                payload:response,
            });
        }
    },
    reducers:{
        eUploadFile(state,action){
            var mfilekey = state.filekey;
            mfilekey[state.excelindex] = action.data;
            return{
                ...state,
                filekey:mfilekey,
            };
        }
    }
};