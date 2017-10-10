// ページについてのツイートを Yahoo!リアルタイムツイート検索で調べる
javascript: (() => {
	const current_url = window.location.href;
	const encoded_current_url = encodeURI(current_url);
	const twitter_search_url =
		'https://search.yahoo.co.jp/realtime/search?ei=UTF-8&fr=rts_top&aq=-1&oq=&ts=4&p=' +
		encoded_current_url;
	window.open(twitter_search_url);
})();
