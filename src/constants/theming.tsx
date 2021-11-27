import React, { createContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { SaveDark } from "../store/actions/settings";
const themes = {
	dark: {
		backgroundColor: "#151618",
		backgroundCard: "#25282c",
		color: "white",
	},
	light: {
		backgroundColor: "#EFF0F3",
		backgroundCard: "#fff",
		color: "#1d1d1d",
	},
};

const initialState = {
	dark: false,
	theme: themes.light,
	toggle: () => {},
};
const ThemeContext = createContext(initialState);

const ThemeProvider = ({ children }) => {
	const dispatch = useDispatch()
	const [dark, setDark] = useState(false); // Default theme is light

	// To toggle between dark and light modes
	const toggle = () => {
		setDark(!dark);
		
		dispatch(SaveDark())
	};

	// Filter the styles based on the theme selected
	const theme = dark ? themes.dark : themes.light;

	return (
		<ThemeContext.Provider value={{ dark, theme, toggle }}>
			{children}
		</ThemeContext.Provider>
	);
}

export { ThemeProvider, ThemeContext };
