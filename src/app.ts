import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2'
import './styles/index.less'

const persistConfig = {
  key: 'qfyw',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['index', 'common', 'login'], // 白名单
}

// 数据持久化
const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(
    persistReducer(persistConfig, reducer),
    initialState,
    enhancer,
  )
  const persist = persistStore(store)
  return { ...store, persist }
}

export const dva = {
  config: {
    onError: () => console.log('dva'),
    extraEnhancers: [persistEnhancer()],
    onReducer: reducer => {
      return persistReducer(persistConfig, reducer)
    }
  },
}
