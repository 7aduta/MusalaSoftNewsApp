import { IReduser } from "../../constants/interfaces";
import { ActionType } from "../actions/actions";

const initialState = {
	lang: "en",
	dark: false,
};
export default (state = initialState, { type, payload }: IReduser) => {
	switch (type) {
		case ActionType.SAVE_LANG:
			return { ...state, lang: payload };
	}
	return state;
};
