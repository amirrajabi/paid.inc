import axios from 'axios';
import {SafeAreaView} from 'react-native';
import {useLayoutEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native'

import {Logo} from '../components/Logo';
import { SearchList } from '../components/SearchList';
import { SearchInput } from '../components/SearchInput';

import { API_KEY } from '../../config';

export default HomeScreen = () => {
	const [newsData, setNewsData] = useState();
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	})

	const fetchNewsData = async (searchTerm) => {
		const API = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${API_KEY}`
        try {
            const response = await axios.get(API);

            if (response.data && response.data.articles) {
                setNewsData(response.data.articles);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

	return (
		<SafeAreaView className="bg-white pt-5 items-center h-full">
			<Logo />
			<SearchInput fetchNewsData={fetchNewsData} />
			<SearchList articles={newsData} />
		</SafeAreaView>
	);
};