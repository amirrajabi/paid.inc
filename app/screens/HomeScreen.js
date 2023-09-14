import {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native'
import {SafeAreaView} from 'react-native';

import {Logo} from '../components/Logo';
import { SearchInput } from '../components/SearchInput';
import { SearchList } from '../components/SearchList';


const data = {
	"status": "ok",
	"totalResults": 9915,
	"articles": [
	  {
		"source": {
		  "id": null,
		  "name": "Slashdot.org"
		},
		"author": "msmash",
		"title": "First Bitcoin ETF Could Be Coming Soon as Court Rules in Favor of Grayscale Over SEC",
		"description": "The U.S. Court of Appeals for the D.C. Circuit has paved the way for bitcoin exchange-traded funds. From a report: On Tuesday, the court sided with Grayscale in a lawsuit against the Securities and Exchange Commission which had denied the company's application to convert the Grayscale Bitcoin Trust to an ETF. The… [+1393 chars]",
		"url": "https://slashdot.org/story/23/08/29/1816233/first-bitcoin-etf-could-be-coming-soon-as-court-rules-in-favor-of-grayscale-over-sec",
		"urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
		"publishedAt": "2023-08-29T19:20:00Z",
		"content": "On Tuesday, the court sided with Grayscale in a lawsuit against the Securities and Exchange Commission which had denied the company's application to convert the Grayscale Bitcoin Trust to an ETF. The… [+1393 chars]"
	  },
	  {
		"source": {
		  "id": "google-news",
		  "name": "Google News"
		},
		"author": null,
		"title": "Binance Australia customers seen selling bitcoin at a discount – Reuters.com - CryptoSaurus",
		"description": "Binance Australia customers seen selling bitcoin at a discount – Reuters.com  CryptoSaurus",
		"url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vY3J5cHRvc2F1cnVzLnRlY2gvYmluYW5jZS1hdXN0cmFsaWEtY3VzdG9tZXJzLXNlZW4tc2VsbGluZy1iaXRjb2lu-+A0E%3Foc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
		"urlToImage": null,
		"publishedAt": "2023-08-14T10:04:42Z",
		"content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
	  },
	  {
		"source": {
		  "id": "business-insider",
		  "name": "Business Insider"
		},
		"author": "Matthew Fox",
		"title": "Bitcoin plunges more than 10% after Elon Musk's SpaceX reportedly sold the cryptocurrency",
		"description": "The Wall Street Journal reported that SpaceX wrote down the value of its bitcoin holdings by a total of $373 million and has sold the cryptocurrency.",
		"url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-plunge-elon-musks-spacex-sold-373-million-stake-2023-8",
		"urlToImage": "https://i.insider.com/64df7ff3b698ac0019dc43a3?width=1200&format=jpeg",
		"publishedAt": "2023-08-18T15:14:49Z",
		"content": "AP\r\n<ul><li>Bitcoin plunged about 10% after it was revealed that SpaceX sold the cryptocurrency.</li><li>The Wall Street Journal reported that SpaceX wrote down the value of bitcoin it owns by $373 m… [+1842 chars]"
	  },
	  {
		"source": {
		  "id": "business-insider",
		  "name": "Business Insider"
		},
		"author": "Phil Rosen",
		"title": "Bitcoin just had its 2nd-straight losing month as crypto sold off in August along with stocks and bonds",
		"description": "The world's biggest cryptocurrency failed to eke out a gain in August even as crypto investors cheered Grayscale's win over the SEC.",
		"url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-crypto-token-august-stocks-bonds-equities-markets-investors-2023-9",
		"urlToImage": "https://i.insider.com/64f217441e6afd00196a380f?width=1200&format=jpeg",
		"publishedAt": "2023-09-01T17:42:25Z",
		"content": "bitcoin cryptocurrency digital currencyEdward Smith/Getty Images\r\n<ul>\n<li>Bitcoin finished August about 10% lower, its second consecutive losing month. </li>\n<li>Crypto was caught up in a tough sell… [+2148 chars]"
	  },
	  {
		"source": {
		  "id": "business-insider",
		  "name": "Business Insider"
		},
		"author": "Zahra Tayeb",
		"title": "About 200 million people trade bitcoin – but only 6 are billionaires",
		"description": "The findings from the Henley & Partners' Crypto Wealth Report come as bitcoin struggles to maintain its 2023 rally.",
		"url": "https://markets.businessinsider.com/news/currencies/crypto-wealth-six-bitcoin-billionaires-globally-2023-9",
		"urlToImage": "https://i.insider.com/6418595ffa3bcb001907f72c?width=1200&format=jpeg",
		"publishedAt": "2023-09-07T08:11:22Z",
		"content": "Bitcoin is up about 55% this year.Getty Images\r\n<ul>\n<li>Of about 200 people globally who trade bitcoin, just six are billionaires, Henley & Partners found.</li>\n<li>Meanwhile, 22 people worldwide ha… [+1504 chars]"
	  },
	  {
		"source": {
		  "id": "business-insider",
		  "name": "Business Insider"
		},
		"author": "Matthew Fox",
		"title": "Bitcoin could drop to the $20,000 range if a key price level is breached",
		"description": "\"We remain long-term neutral, but we are wary of negative catalysts that could develop from a bigger retracement,\" Katie Stockton said.",
		"url": "https://markets.businessinsider.com/news/currencies/bitcoin-price-outlook-broken-support-20000-range-technical-analysis-2023-8",
		"urlToImage": "https://i.insider.com/64e62a424c17ff0019bb16bc?width=1200&format=jpeg",
		"publishedAt": "2023-08-23T16:42:26Z",
		"content": "Wenjin Chen/Getty Images\r\n<ul><li>Bitcoin is testing a key support level that, if broken, could send the cryptocurrency back to the $20,000 range.</li><li>That's according to Fairlead Strategies' Kat… [+2149 chars]"
	  }
	]
  }
  

export default HomeScreen = () => {
	const {articles, totalResults} = data;
	const navigation = useNavigation()

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false,
		})
	})

	return (
		<SafeAreaView className="bg-white pt-5 items-center h-full">
			<Logo />
			<SearchInput />
			<SearchList articles={articles} header={`${totalResults} items find`} />
		</SafeAreaView>
	);
};