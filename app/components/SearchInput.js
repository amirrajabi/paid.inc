import {View, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

export const SearchInput = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4 px-4">
        <View className="flex-1 flex-row space-x-2 bg-slate-300 p-3 rounded-md">
            <Feather name="search" size={24} color="#0080ff" />
            <TextInput placeholder='Search for News..' keyboardType='default'/>
        </View>
    </View>
  )
}
