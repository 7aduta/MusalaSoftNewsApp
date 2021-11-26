import { useNavigation } from "@react-navigation/core";
import React from "react";
import { Text, View, StyleSheet, Image, Pressable } from "react-native";

const ArticleBox = (item) => {
	const { navigate } = useNavigation();
	return (
		<Pressable
			onPress={() => navigate("Article", { item })}
			style={styles.boxConatiner}
		>
			<Image source={{ uri: item?.urlToImage }} style={styles.boxImage} />
			<Text style={styles.heading}>{item?.title}</Text>
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
