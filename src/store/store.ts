import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import settings from "../store/reducers/settings";
import { PersistConfig } from "../constants/helpers";
import news from "../store/reducers/news";
const settingsConfig: any = new PersistConfig("lang");
const rootReducer = combineReducers({
	settings: persistReducer(settingsConfig, settings),
	news: news,
});
export const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
