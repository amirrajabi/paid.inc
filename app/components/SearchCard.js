import {useNavigation} from '@react-navigation/native'
import { Text, View, TouchableOpacity, Image } from "react-native"

import { daysSince } from '../utils/convertTime'


export const SearchCard = ({id, name, author, title, description, url, urlToImage, publishedAt, content}) => {

    const navigation = useNavigation()

    const days = daysSince(publishedAt);

    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('News', {
                    id, name, author, title, description, url, urlToImage, publishedAt, content
                })
            }}
            className="bg-blue-100 mb-3 w-96 h-80 rounded-3xl">
                <Image source={{uri: urlToImage}} className="w-full h-full rounded-3xl"/>
                <View className="absolute top-40 w-full h-40 rounded-b-3xl bg-slate-900/50">
                    <View className="mx-12 my-5">
                        <Text className="font-semibold text-white text-xl max-h-16">{title}</Text>
                        <View>
                            <View className="flex-row justify-between mt-2">
                                <View className="flex-row items-center ">
                                    <View className="w-5 h-5 bg-pink-600 rounded-full mr-2"></View>
                                    <Text className="font-semibold text-white text-md">{name}</Text>
                                </View>
                                <Text className="font-light text-white text-md">{`${days}d ago`}</Text>
                            </View>
                            <Text className="font-light text-white text-md mt-5">{author}</Text>
                        </View>
                    </View>
                </View>
        </TouchableOpacity>
    )
}
