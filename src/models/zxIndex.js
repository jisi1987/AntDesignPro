import { getNewsListData } from '../services/api';

export default {
    namespace: 'zxIndex',
    state:{
        newsListData:[],
    },
    effects:{
        *getList({ payload },{ call, put}){
            console.log(payload)
            const response = yield call(getNewsListData, payload);
            yield put({
                type:'queryList',
                payload: response,
            });
        },
        *appendFetch({ payload }, { call, put }){
            const response = yield call(getNewsListData, payload);
            yield put({
                type:"appendList",
                payload:Array.isArray(response) ? response:[],
            });
        },
    },

    reducers:{
        queryList(state, action) {
            return{
                ...state,
                newsListData: action.payload.list,
            };
        },
        appendList(state, action){
            return{
                ...state,
                newsListData:action.payload,
            }
        }
    }

};