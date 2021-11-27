import React, { FC, useContext, useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert
} from "react-native";
import Switch from '../components/Switch';
import {useTranslation} from 'react-i18next';
import Selectbox from "../components/Selectbox";
import { Colors } from "../constants/styleConstants";
import { GetHomeNewsHandler } from "../store/actions/news";
import {useDispatch} from 'react-redux';
import { SaveLang } from "../store/actions/settings";
import { ThemeContext } from '../constants/theming';

const Settings: FC =  () => {
	const { t, i18n } = useTranslation();
	const dispatch = useDispatch()
	    const { dark, theme, toggle } = useContext(ThemeContext);

	const [state, setstate] = useState({
      languages: [
         {dir: 'rtl', code: 'es', label: 'Spanish'},
         {dir: 'rtl', code: 'fr', label: 'French'},
         {dir: 'ltr', code: 'en', label: 'English'},
      ],
	});
	const SaveSettings = (currentLanguage) => {
		dispatch(SaveLang(currentLanguage.code))
		i18n.changeLanguage(currentLanguage.code)
		dispatch(GetHomeNewsHandler())
   };
	return (
		<View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
			<View style={styles.settingsBox}>
				<View style={{}}>
					<Text style={{
						fontSize: 20,
						color: theme.color
					}}>{t('Status')}</Text>
				</View>
				<Switch
					isActive={!dark}
					onValueChange={status => {
						toggle()
					}}
					contentContainerStyle={{
						borderWidth: 1,
						height: 22,
					}}
				/>
			</View>
			<View style={styles.settingsBox}>
				<Selectbox
					label={t('Language')}
					data={state.languages}
					containerStyle={{
						backgroundColor: 'transparent',
						marginBottom: 0,
						flex:1
					}}
					TextStyle={{
						fontSize: 20,
						color: theme.color,
					}}
					showArrow={true}
					onselected={ret => {
						SaveSettings(ret);
					}}
				/>
			</View>
			
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
      backgroundColor: Colors.white,
      paddingHorizontal: 20,
		paddingVertical: 15,
		flex:1
   },
settingsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 15,
   },
});
export default Settings;
