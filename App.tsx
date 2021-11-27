import React, { useContext } from "react";
import './src/localization/i18n.config';
import {useTranslation} from 'react-i18next';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5";



import { StyleSheet,Text } from "react-native";
import Home from "./src/screens/home";
import Settings from "./src/screens/settings";
import Article from "./src/screens/article";
import { ThemeContext, ThemeProvider } from "./src/constants/theming";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const TabsStack = () => {
	const { t } = useTranslation();
	const {  theme} = useContext(ThemeContext);

  return (
	  <Tab.Navigator
		  	screenOptions={{
			  	headerShown: false,
					tabBarStyle: {
					backgroundColor:theme.backgroundCard
				},
		  }}
		  
	  >
		  <Tab.Screen name="Home" component={Home}
			  options={{
				  
				  tabBarIcon: ({ focused }) => {
					  return (
						  <Icon name="home" solid size={16} color={theme.color} />
					  );
				  },
				  tabBarLabel: ({color}) => {
						return (
						<Text style={{color:theme.color}}>
							{t("News")}
						</Text>
						);
					},
				  
			  	}
			}
		/>
      <Tab.Screen name="Settings" component={Settings} options={{
				  tabBarIcon: ({ focused }) => {
					  return (
						  <Icon name="cog" solid size={16} color={theme.color} />
					  );
				  },
				  tabBarLabel: ({color}) => {
						return (
						<Text style={{color:theme.color}}>
							{t("Settings")}
						</Text>
						);
					},
				  
			  	}
			}
		/>
    </Tab.Navigator>
  );
}

const App = () => {
	return (
		<ThemeProvider>

			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen
						name="Root"
						component={TabsStack} o
						options={{ headerShown: false }}
					/>
					<Stack.Screen name="Article" component={Article} />
				</Stack.Navigator>
				</NavigationContainer>
		</ThemeProvider>
	);
};

const styles = StyleSheet.create({});

export default App;
