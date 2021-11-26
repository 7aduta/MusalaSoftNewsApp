import { IReduser } from "../../constants/interfaces";
import { ActionType } from "../actions/actions";

const initialState = {
	news: [],
};
export default (state = initialState, { type, payload }: IReduser) => {
	switch (type) {
		case ActionType.SAVE_NEWS:
			return { ...state, news: payload };
	}
	return state;
};
