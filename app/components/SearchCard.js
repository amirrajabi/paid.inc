import {useNavigation} from '@react-navigation/native'
import { Text, View, TouchableOpacity, Image } from "react-native"


export const SearchCard = ({id, name, author, title, description, url, urlToImage, publishedAt, content}) => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity 
            onPress={() => {
                navigation.navigate('News', {
                    id, name, author, title, description, url, urlToImage, publishedAt, content
                })
            }}
            className="bg-slate-100 mb-3 p-2 shadow"
        >
                <Image source={{uri: urlToImage}} className="h-44 rounded-md"/>
                <View className="w-full">
                    <Text className="font-medium text-stone-900">{name}</Text>
                </View>
        </TouchableOpacity>
    )
}
