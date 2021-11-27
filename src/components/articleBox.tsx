import { useNavigation } from "@react-navigation/core";
import React, { FC, useContext } from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import { ThemeContext } from "../constants/theming";
interface IArticleBox {
	title: string;
  	urlToImage: string;
  	content: string;
  	author: string;
  	publishedAt: Date;
}
const ArticleBox: FC<IArticleBox> = ({title,urlToImage,content,author,publishedAt}) => {
	const { navigate } = useNavigation();
		const {theme} = useContext(ThemeContext);

	return (
		<Pressable
			onPress={() => navigate("Article", { title,urlToImage,content ,author,publishedAt})}
			style={[styles.boxConatiner,{backgroundColor:theme.backgroundCard}]}
		>
			<Image source={{ uri: urlToImage }} style={styles.boxImage} />
			<Text style={[styles.heading,{color:theme.color}]}>{title}</Text>
		</Pressable>
	);
};
const styles = StyleSheet.create({
	boxConatiner: {
		marginVertical: 5,
		marginHorizontal: 10,
		padding: 10,
		flexDirection: "row",
		backgroundColor: "#fff",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	boxImage: {
		height: 80,
		width: 80,
		resizeMode: "contain",
		marginRight: 10,
	},
	heading: {
		flex: 1,
		fontWeight: "800",
	},
});
export default ArticleBox;
