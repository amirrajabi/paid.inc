import { Text, View, FlatList, Image } from 'react-native';

import { SearchCard } from './SearchCard';

const startImage = require('../../assets/start.jpg');
const notFindImage = require('../../assets/notFind.jpg');

export const SearchList = ({ articles }) => {

  const renderItem = ({ item }) => {
    const { source, author, title, description, url, urlToImage, publishedAt, content } = item;
    const { id, name } = source;

    return (
      <SearchCard
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
    );
  };

  return (
    <View className="flex-1 pl-2">
        {articles === undefined ? (
            <View className="flex-1 justify-end">
                <Image source={startImage}/>
            </View>
        ):(
            articles && articles.length === 0 ? (
                <View className="flex-1 justify-end">
                    <Image source={notFindImage}/>
                </View>
                
            ) : (
                <FlatList
                data={articles}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
                contentContainerStyle={{
                    padding: 15
                }}
                showsVerticalScrollIndicator={false}
                />
            )
        )}
        
        </View>
  );
};
