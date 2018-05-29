import { getNewsListData } from '../services/api';

export default {
    namespace: 'zxIndex',
    state:{
        newsListData:[],
    },
    effects:{
        *fetch({ payload }, { call, put }){
            const response = yield call(getNewsListData, payload);
            yield put({
                type: 'queryList',
                payload:Array.isArray(response)?response : [],
            });
        },
        *appendFetch({ payload }, { call, put }){
            const response = yield call(getNewsListData, payload);
            yield put({
                type: 'appendList',
                payload:Array.isArray(response) ? response : [],
            });
        },
    },

    reducers:{
        queryList(state, action) {
            return{
                ...state,
                list:action.payload,
            };
        },
        appendList(state,action){
            return{
                ...state,
                list:state.list.concat(action.payload),
            };
        },
    },
};