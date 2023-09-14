import {useLayoutEffect} from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native'

const HomeScreen = () => {

	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	})

	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text className="text-red-500">Open up App.js to start working on your app!</Text>
		</View>
	);
};

export default HomeScreen;