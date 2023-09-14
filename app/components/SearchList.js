import {ScrollView, Text, View} from 'react-native';
import { SearchCard } from './SearchCard';

export const SearchList = ({articles, header}) => {
  
  return (
    <View className="flex-1 items-start w-full p-4">
        <Text className="text-slate-400 font-light">
            {header}
        </Text>
        <ScrollView 
            contentContainerStyle={{
                padding: 15
            }}
            showsVerticalScrollIndicator={false}
            className="w-full pt-4"
        >
            {articles?.map((article, index) => {
                const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
                return(
                    <SearchCard 
                        key={index}
                        id={source.id} 
                        name={source.name} 
                        author={author} 
                        title={title} 
                        description={description} 
                        url={url} 
                        urlToImage={urlToImage} 
                        publishedAt={publishedAt} 
                        content={content} 
                    />
                )
            })}
        </ScrollView>
    </View>
  )
}
