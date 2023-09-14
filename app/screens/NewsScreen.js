import {useLayoutEffect} from 'react';
import { Ionicons } from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native'
import {View, Image, ScrollView, Text, TouchableOpacity, Linking} from 'react-native';

import { daysSince } from '../utils/convertTime'
  
export default NewsScreen = () => {

	const navigation = useNavigation();

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

    const days = daysSince(publishedAt);

    const handlePress = () => {
        Linking.canOpenURL(url).then(supported => {
          if (supported) {
            Linking.openURL(url);
          } else {
            console.log(`Don't know how to open URL: ${url}`);
          }
        });
      };

	return (
		<ScrollView className="bg-white">
            <View className="relative">
                <Image source={{uri: urlToImage}} className="w-full h-64 bg-slate-300 p-4"/>
                <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 bg-sky-600 rounded-full">
                    <Ionicons name="ios-chevron-back" size={24} color="#ffffff"/>
                </TouchableOpacity>
            </View>
            <View>
                <View className="px-4 pt-4">
                    <Text className="text-xl font-semibold mb-8">{title}</Text>
                    <View className="flex-row justify-between">
                        <Text className="text-lg font-semibold">{name}</Text>
                        <Text className="text-lg font-thin">{author}</Text>
                    </View>
                    <Text className="font-light text-md mb-10">{`${days}d ago`}</Text>
                    <Text className="text-lg font-semibold mb-2">Description</Text>
                    <Text className="text-lg mb-8">{description}</Text>
                    <Text className="text-lg font-semibold">Content</Text>
                    <Text className="text-md mb-10">{content}</Text>
                    <TouchableOpacity onPress={handlePress} className="w-full items-center">
                        <View className="bg-blue-400 w-52 rounded-full py-3">
                            <Text className=" text-white font-semibold text-lg w-full text-center">Open Webpage News</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
		</ScrollView>
	);
};