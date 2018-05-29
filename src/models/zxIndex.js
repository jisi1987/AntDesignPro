import { getNewsListData } from '../services/api';

export default {
    namespace: 'zxIndex',
    state:{
        newsListData:[],
    },
    effects:{
        *getList({ payload },{ call, put}){
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
        queryList(state, { payload }) {
            let newsListData={newsListData:payload.data}
            return{
                ...state,
                newsListData,
            };
        },
        appendList(state, action){
            return{
                ...state,
                newsListData:state.list.concat(action.payload),
            }
        }

    },
};