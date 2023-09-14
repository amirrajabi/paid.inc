import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, TextInput, TouchableOpacity, ScrollView, Text } from 'react-native';

export const SearchInput = ({ fetchNewsData }) => {
    const [searchText, setSearchText] = useState('');
    const [searchHistory, setSearchHistory] = useState([]);

    const handleReturnPress = () => {
        fetchNewsData(searchText);
        updateSearchHistory(searchText);
        setSearchText('');
    };

    const updateSearchHistory = (text) => {
        setSearchHistory(prevHistory => [text, ...prevHistory].slice(0, 10));
    };

    const handleHistoryClick = (text) => {
        setSearchText(text);
        fetchNewsData(text);
    };

    return (
        <View className="h-28">
            <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4 w-80">
                <View className="flex-1 flex-row space-x-2 bg-slate-100 p-3 rounded-md rounded-3xl">
                    <TouchableOpacity onPress={handleReturnPress}>
                        <Feather name="search" size={24} color="#202020" />
                    </TouchableOpacity>
                    <TextInput 
                        value={searchText}
                        placeholder='Topic, Media or journalist' 
                        keyboardType='default' 
                        onChangeText={(text) => {
                            setSearchText(text);
                        }}
                        onSubmitEditing={handleReturnPress}
                        className="flex-1"
                    />
                </View>
            </View>
            <ScrollView horizontal={true} className="mt-2">
                {searchHistory.map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => handleHistoryClick(item)}>
                        <View className="bg-blue-400 rounded-full p-3 mr-2">
                            <Text className="text-white font-semibold">{item}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
