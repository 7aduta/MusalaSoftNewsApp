import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { StyleSheet } from "react-native";
import Home from "./src/screens/home";
import Article from "./src/screens/article";
const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Article" component={Article} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default App;
