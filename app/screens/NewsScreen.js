import {useLayoutEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {View, Image, ScrollView, Text, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
  
export default NewsScreen = () => {
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	})

    const {
        params: {
            id, 
            name, 
            author, 
            title, 
            description, 
            url, 
            urlToImage, 
            publishedAt, 
            content
        }
    } = useRoute();

	return (
		<ScrollView className="bg-white">
            <View className="relative">
                <Image source={{uri: urlToImage}} className="w-full h-56 bg-slate-300 p-4"/>
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 bg-sky-600 rounded-full">
                    <Ionicons name="ios-chevron-back" size={24} color="#ffffff"/>
                </TouchableOpacity>
            </View>
            <View>
                <View className="px-4 pt-4">
                    <Text className="text-lg font-semibold">{title}</Text>
                </View>
            </View>
		</ScrollView>
	);
};