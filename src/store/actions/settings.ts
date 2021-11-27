import { ActionType } from "./actions";

export const SaveLang = (code: String) => ({
	type: ActionType.SAVE_LANG,
	payload: code,
});
export const SaveDark = (value: String) => ({
	type: ActionType.SAVE_DARK,
	payload: value,
});
