import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./src/store/store";
import App from "./App";
import { name as appName } from "./app.json";
const RNapp = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={false}>
				<App />
			</PersistGate>
		</Provider>
	);
};
AppRegistry.registerComponent(appName, () => RNapp);
