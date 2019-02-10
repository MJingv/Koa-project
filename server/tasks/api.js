const rp = require('request-promise-native');
const basicUrl = `http://api.douban.com/v2/movie/subject`;


async function fetchMovie(item) {
	const url = `${basicUrl}/${item.doubanId}`;
	const res = await rp(url);
	return res;
}

;(async () => {
	let movies = [
		{
			doubanId: 25833233,
			title: '乐高大电影2',
			rate: 7.5,
			poster:
				'https://img3.doubanio.com/view/photo/l_ratio_poster/public/p2524021875.jpg'
		}
	];

	movies.map(async movie => {
		let movieData = await fetchMovie(movie);
		try {
			movieData = JSON.parse(movieData);
			console.log(movieData.aka, movieData.summary);
		} catch (e) {
			console.log(e);
		}
	});
})();
