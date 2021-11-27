import React, { FC, useContext } from "react";
import {
	Text,
	Image,
	Dimensions,
	StyleSheet,
	View,
	Pressable,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import Icon from "react-native-vector-icons/FontAwesome5";
import { RouteProp } from "@react-navigation/native";
import { ThemeContext } from "../constants/theming";

const height = Dimensions.get("screen").height;
interface IArticleBox {
	title: string;
  	urlToImage: string;
  	content: string;
  	author: string;
  	publishedAt: Date;
}
const Article: FC =  () => {
	const {
		params: { title,urlToImage,content ,author,publishedAt},
	} = useRoute<RouteProp<Record<string, IArticleBox>, string>>();
	const { goBack } = useNavigation();
			const {  theme} = useContext(ThemeContext);

	return (
		<View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
			<Pressable
				onPress={() => goBack()}
				style={styles.backButtonContainer}
			>
				<Icon name="arrow-left" solid style={styles.backButtonIcon} color={theme.color} />
			</Pressable>
			<Image source={{ uri: urlToImage }} style={styles.boxImage} />
			<Text style={[styles.heading,{color:theme.color}]}>{title}</Text>
			<View style={styles.metaBox}>
				<View style={styles.subBox}>
					<Icon name="user" solid style={styles.iconStyle} color={theme.color} />
					<Text style={{color:theme.color}}>{author}</Text>
				</View>
				<View style={styles.subBox}>
					<Icon name="calendar-alt" solid style={styles.iconStyle} color={theme.color} />
					<Text style={{color:theme.color}}>{publishedAt}</Text>
				</View>
			</View>
			<Text style={[styles.content,{color:theme.color}]}>{content}</Text>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		paddingVertical: 15,
		flex:1
   },
	backButtonContainer: {
		position: "absolute",
		top: 10,
		left: 10,
		zIndex: 1,
	},
	backButtonIcon: {
		fontSize: 23,
	},
	boxImage: {
		width: "100%",
		height: height / 3,
	},
	heading: {
		fontWeight: "800",
		margin: 10,
		fontSize: 18,
	},
	metaBox: {
		flexDirection: "row",
		justifyContent: "space-between",
		paddingHorizontal: 10,
	},
	subBox: {
		flexDirection: "row",
		paddingRight: 10,
		flex: 1,
	},
	iconStyle: {
		marginRight: 10,
		fontSize: 23,
	},
	content: {
		margin: 10,
		fontSize: 16,
	},
});
export default Article;
