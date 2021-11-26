import { Dispatch } from "redux";
import { IDispatch } from "../../constants/interfaces";
import { ActionType } from "./actions";
import { store } from "../store";
import { Main_url, newsApiKey } from "../../constants/config";
/**
 * save New
 * @param data Home Articles
 */
export const SaveNews = (data: Array) => ({
	type: ActionType.SAVE_NEWS,
	payload: data,
});
export const GetHomeNewsHandler = (cb?: () => void) => {
	return async (dispatch: Dispatch<IDispatch>) => {
		try {
			const { lang } = store.getState().settings;
			await fetch(
				`${Main_url}?language=${lang}&sortBy=publishedAt&apiKey=${newsApiKey}`
			)
				.then((response) => response.json())
				.then((data) => dispatch(SaveNews(data?.articles)));
			cb && cb();
		} catch (error) {
			console.error("GetHomeJobsHandler", error.response);
		}
	};
};
export const FilterHomeNewsHandler = (text?: String) => {
	return async (dispatch: Dispatch<IDispatch>) => {
		try {
			const { lang } = store.getState().settings;
			await fetch(
				`${Main_url}?language=${lang}${
					text != "" ? "&q=" + text : ""
				}&sortBy=publishedAt&apiKey=${newsApiKey}`
			)
				.then((response) => response.json())
				.then((data) => dispatch(SaveNews(data?.articles)));
		} catch (error) {
			console.error("GetHomeJobsHandler", error.response);
		}
	};
};
