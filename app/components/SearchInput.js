import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import {View, TextInput, TouchableOpacity} from 'react-native';

export const SearchInput = ({fetchNewsData}) => {
    const [searchText, setSearchText] = useState('')

    const handleReturnPress = () => {
        fetchNewsData(searchText)
        setSearchText('')
    }

    return (
        <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
            <View className="flex-1 flex-row space-x-2 bg-slate-300 p-3 rounded-md">
                <TouchableOpacity onPress={handleReturnPress}>
                    <Feather name="search" size={24} color="#0080ff" />
                </TouchableOpacity>
                <TextInput 
                    placeholder='Search for News..' 
                    keyboardType='default' 
                    onChangeText={(text) => {
                        setSearchText(text);
                    }}
                    onSubmitEditing={handleReturnPress}
                />
            </View>
        </View>
    )
}
