import React, { useEffect, useState } from "react";
import {
	FlatList,
	Text,
	View,
	StyleSheet,
	RefreshControl,
	TextInput,
	Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import ArticleBox from "../components/articleBox";
import { newsApiKey } from "../constants/config";

const Home = () => {
	const [news, setnews] = useState([]);
	const [refreshingActive, setrefreshingActive] = useState(false);
	const [text, settext] = useState("");
	useEffect(() => {
		getNews();
	}, []);
	const getNews = async () => {
		await fetch(
			`https://newsapi.org/v2/top-headlines?sources=techcrunch&language=en&sortBy=publishedAt&apiKey=${newsApiKey}`
		)
			.then((response) => response.json())
			.then((data) => setnews(data?.articles));
	};
	const onChangeText = async (text) => {
		settext(text);
		await fetch(
			`https://newsapi.org/v2/top-headlines?sources=techcrunch${
				text != "" ? "&q=" + text : ""
			}&language=en&sortBy=publishedAt&apiKey=${newsApiKey}`
		)
			.then((response) => response.json())
			.then((data) => setnews(data?.articles));
	};
	const refreshingHandel = () => {
		setrefreshingActive(true);
		getNews().then(() => {
			setrefreshingActive(false);
		});
	};
	return (
		<View>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					onChangeText={onChangeText}
					value={text}
				/>
				<Icon
					name={text == "" ? "search" : "times"}
					style={styles.Icon}
					onPress={() => {
						if (text != "") {
							settext("");
							getNews();
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
