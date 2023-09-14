import {ScrollView, Text, View} from 'react-native';
import { SearchCard } from './SearchCard';

export const SearchList = ({articles}) => {
  
  return (
    <View className="flex-1 items-start w-full p-4">
        {!articles.length && 
            <Text className="text-slate-400 font-light">
                No result ...
            </Text>
        }
        <ScrollView 
            contentContainerStyle={{
                padding: 15
            }}
            showsVerticalScrollIndicator={false}
            className="w-full pt-4"
        >
            {articles?.map((article, index) => {
                const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
                const {id, name} = source;

                return(
                    <SearchCard 
                        key={index}
                        id={id} 
                        name={name} 
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
