import { title } from "process";
import React, { useContext, useEffect, useState } from "react";
import {
	FlatList,
	Text,
	View,
	StyleSheet,
	RefreshControl,
	TextInput,
	Pressable,
	Keyboard,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ArticleBox from "../components/articleBox";
import { useTranslation } from 'react-i18next';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import { RootState } from "../store/store";
import { FilterHomeNewsHandler, GetHomeNewsHandler } from "../store/actions/news";
import { ThemeContext } from '../constants/theming';

const Home = () => {
	const [refreshingActive, setrefreshingActive] = useState(false);
	const [text, settext] = useState("");
	const { t} = useTranslation();
	const dispatch = useDispatch();
	const {  theme} = useContext(ThemeContext);

	const {
      news
   } = useSelector((state: RootState) => state.news, shallowEqual);
	useEffect(() => {
		dispatch(GetHomeNewsHandler())

	}, []);
	
	const onChangeText = async (text) => {
		settext(text);
		dispatch(FilterHomeNewsHandler(text))
		
	};
	const refreshingHandel = () => {
		setrefreshingActive(true);
		dispatch(GetHomeNewsHandler(() => {
			setrefreshingActive(false);
		}))
	};
	return (
		<View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
			<View style={[styles.inputContainer,{borderColor: theme.color}]}>
				<TextInput
					placeholder={t("Search")}
					placeholderTextColor={theme.color}
					style={[styles.input,]}
					onChangeText={onChangeText}
					value={text}
				/>
				<Icon
					name={text == "" ? "search" : "times"}
					color={theme.color}
					style={[styles.Icon]}
					onPress={() => {
						if (text != "") {
							settext("");
							Keyboard.dismiss();
							dispatch(GetHomeNewsHandler())
						}
					}}
				/>
			</View>
			<FlatList
				data={news}
				refreshControl={
					<RefreshControl
						onRefresh={refreshingHandel}
						refreshing={refreshingActive}
						progressViewOffset={40}
						colors={["#e1e1e1", "#0000ff"]}
					/>
				}
				renderItem={({ item }) => <ArticleBox {...item} />}
				ListEmptyComponent={() => {
					return (
						<View
							style={{
								display: "flex",
								alignItems: "center",
								flex: 1,
							}}
						>
							<Text>Sorry No News To List</Text>
						</View>
					);
				}}
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	inputContainer: {
		borderWidth: 1,
		margin: 12,
		flexDirection: "row",
		alignItems: "center",
	},
	input: {
		height: 40,
		flex: 1,
		padding: 10,
	},
	Icon: {
		marginHorizontal: 10,
		fontSize: 23,
	},
});
export default Home;
