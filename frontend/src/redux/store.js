import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { instrumentsApi } from '@/api-services/instrumentsService';
// import { projectsApi } from '@/api-services/projectsService';
// import { storageApi } from '@/api-services/storageService';
import * as apis from '@/api-services';

const reducers = {};
const middlewares = [];

Object.values(apis).forEach((api) => {
  reducers[api.reducerPath] = api.reducer;
  middlewares.push(api.middleware);
});

const reducer = combineReducers(reducers);

export const store = configureStore({
  reducer: reducer,
  middleware: (defaultMiddleware) => defaultMiddleware().concat(middlewares),
});

setupListeners(store.dispatch);
