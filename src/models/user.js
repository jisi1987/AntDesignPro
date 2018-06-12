import { query as queryUsers, queryCurrent, getUser, getMenuData } from '../services/user';

export default {
  namespace: 'user',

  state: {
    list: [],
    currentUser: {},
    menuData:[],
    },

  effects: {
    *fetch(_, { call, put }) {
      const response = yield call(queryUsers);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchCurrent(_, { call, put }) {
      //const response = yield call(queryCurrent);
      const response = yield call(getUser);
      yield put({
        type: 'saveCurrentUser',
        payload: response,
      });
    },
    *getMenuData({ payload },{call, put}){
      const response = yield call(getMenuData, payload);      
      yield put({
          type:'queryMenuList',
          payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
    saveCurrentUser(state, action) {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    changeNotifyCount(state, action) {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          notifyCount: action.payload,
        },
      };
    },
    queryMenuList(state, action){
      var plist=[];
      if(action.payload.plist){
        plist = action.payload.plist;
      }else{
        plist = action.payload;
      }
      //菜单处理  
      var menuData = plist.map((item,index) => {
        var obj = {
          key:item.permissionId,
          icon: 'qrcode',
          name:item.permissionName,
          path:item.permissionUrl
        }
        if(item.childrenList && item.childrenList.length > 0){
          var children = item.childrenList;
          obj.children = [];
          children.map((child,i) => {
            var childObj = {
              key:child.permissionId,
              name:child.permissionName,
              path:child.permissionUrl
            }
            obj.children.push(childObj);
          });
        }
        return obj;
      });
      return{
          ...state,
          menuData:menuData,
      };
    },
  },
};
