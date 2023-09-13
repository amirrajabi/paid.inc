import {SafeAreaView, View, Text} from 'react-native';

const HomeScreen = () => {
	return (
		<SafeAreaView className="h-full">
			<View className="flex-1 items-center justify-center bg-white">
                <Text className="text-blue-500">Open up App.js to start working on your app!</Text>
            </View>
		</SafeAreaView>
	);
};

export default HomeScreen;