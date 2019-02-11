const puppeteer = require('puppeteer');

const base = `https://movie.douban.com/subject`;
const doubanId = '26266893';
const videoBase = `https://movie.douban.com/trailer`;


const sleep = time => new Promise(res => {
		setTimeout(res, time);
	})

;(async () => {
	const browser = await puppeteer.launch();

	const page = await browser.newPage();

	await page.goto(`${base}/${doubanId}`, {waitUntil: 'networkidle2'});

	await sleep(1000);


	const result = await page.evaluate(() => {
		let $ = window.$;
		let it = $('.related-pic-video');

		if (it && it.length > 0) {
			let link = it.attr('href');
			let cover = it.css('background-image').replace('url(', '').replace(')', '').replace(/\"/gi, "");
			return {link, cover};
		}
		return {};
	});

	let video;

	if (result.link) {
		//有视频
		await page.goto(result.link, {waitUntil: 'networkidle2'});
		await sleep(1000);

		video = await page.evaluate(() => {
			let $ = window.$;
			let it = $(' source');

			if (it && it.length) {
				return it.attr('src');
			}
			return '';
		});
	}
	const data = {
		video,
		doubanId,
		cover: result.cover
	};
	await browser.close();
	process.send({data});
	process.exit(0);

})();
