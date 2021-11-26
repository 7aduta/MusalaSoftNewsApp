import React from "react";
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

const height = Dimensions.get("screen").height;
const Article = () => {
	const {
		params: { item },
	} = useRoute();
	const { goBack } = useNavigation();
	return (
		<View>
			<Pressable
				onPress={() => goBack()}
				style={styles.backButtonContainer}
			>
				<Icon name="arrow-left" solid style={styles.backButtonIcon} />
			</Pressable>
			<Image source={{ uri: item?.urlToImage }} style={styles.boxImage} />
			<Text style={styles.heading}>{item.title}</Text>
			<View style={styles.metaBox}>
				<View style={styles.subBox}>
					<Icon name="user" solid style={styles.iconStyle} />
					<Text>{item?.author}</Text>
				</View>
				<View style={styles.subBox}>
					<Icon name="calendar-alt" solid style={styles.iconStyle} />
					<Text>{item?.publishedAt}</Text>
				</View>
			</View>
			<Text style={styles.content}>{item?.content}</Text>
		</View>
	);
};
const styles = StyleSheet.create({});
export default Article;
