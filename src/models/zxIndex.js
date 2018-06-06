import { getNewsListData, getCustomListData,fakeChartData } from '../services/api';

export default {
    namespace: 'zxIndex',
    state:{
        newsListData:[],
        hotsListData:[],
        customListData:[],
        hyfbData:[],
    },
    effects:{
        //获取新闻列表、行业动态
        *getNewsListData({ payload },{ call, put}){
            const response = yield call(getNewsListData, payload);
            if(payload.type==1){
                yield put({
                    type:'queryNewsList',
                    payload: response,
                });
            }else{
                yield put({
                    type:'queryHotsList',
                    payload: response,
                });
            }
            
        },
        //获取代办客户
        *getCustomList({ payload },{ call, put }){
            const response = yield call(getCustomListData, payload);
            yield put({
                type:'queryCustomList',
                payload: response,
            });
        },
        //获取行业分布
        /* *getHyfbData({ payload },{ call, put }){
            const response = yield call(fakeChartData,payload);
            yield put({
                type:'queryHyfbData',
                payload:response,
            });
        }, */
    },

    reducers:{
        //获取新闻列表
        queryNewsList(state, action) {
            var list=null;
            if(action.payload.list){
                list = action.payload.list;
            }
            return{
                ...state,
                newsListData: list,
            };
        },
        //获取行业动态
        queryHotsList(state, action) {
            var list=null;
            if(action.payload.list){
                list = action.payload.list;
            }
            return{
                ...state,
                hotsListData: list,
            };
        },
        //获取代办客户
        queryCustomList(state, action) {
            var list=null;
            if(action.payload.list){
                list = action.payload.list;
            }
            return{
                ...state,
                customListData: list,
            };
        },
        /* queryHyfbData(state, action){
            return{
                ...state,
                hyfbData:action.payload,
            }
        } */
    }

};