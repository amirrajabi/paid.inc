import axios from 'axios';
import { SafeAreaView, View, Image } from 'react-native';
import { useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Logo } from '../components/Logo';
import { SearchList } from '../components/SearchList';
import { SearchInput } from '../components/SearchInput';

import { API_KEY } from '../../config';

const loadingImage = require('../../assets/loading.gif');

export default HomeScreen = () => {
    const [newsData, setNewsData] = useState();
    const [loading, setLoading] = useState(false); // <-- Add a loading state
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const fetchNewsData = async (searchTerm) => {
        setLoading(true); // <-- Start loading
        const API = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`;
        try {
            const response = await axios.get(API);

            if (response.data && response.data.articles) {
                setNewsData(response.data.articles);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView className="bg-white pt-5 items-center h-full">
            <Logo />
            <SearchInput fetchNewsData={fetchNewsData} />
            {loading ? (
                <View className="flex-1 justify-center">
					<Image source={loadingImage} className="w-40 h-40" resizeMode="contain"/>
				</View>
            ) : (
                <SearchList articles={newsData} />
            )}
        </SafeAreaView>
    );
};
