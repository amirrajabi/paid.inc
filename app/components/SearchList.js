import { Text, View, FlatList } from 'react-native';
import { SearchCard } from './SearchCard';

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
        {articles === undefined &&
            <Text className="italic text-slate-500">
                Start searching...
            </Text>
        }
        {articles && articles.length === 0 ? (
            <Text className="italic text-slate-500">
            {articles === undefined ? 'Start searching...' : 'No result found...'}
            </Text>
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
        )}
        </View>
  );
};
