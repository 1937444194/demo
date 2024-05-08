import * as api from '@/services'

// 全局
export default {
  namespace: 'home',

  state: {
    data: [],
    count: 0, // 总条数
  },

  reducers: {
    setData (state, payload) {
      return {
        ...state,
        data: payload,
      }
    }
  },

  effects: {
    // 上传
    *upload ({ payload }, { call, put, select }) {
      const res = yield call(api.fetchUpload, payload)

      // put
      if (!res.code) {
        return res.result
      }
    },
  },
}

