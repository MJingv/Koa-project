const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const movieSchema = new Schema({
	doubanId: String,
	rate: Number,
	title: String,
	summary: String,
	video: String,
	poster: String,
	cover: String,

	//七牛资源key
	videoKey: String,
	posterKey: String,
	coverKey: String,

	rawTitle: String,
	movieTypes: [String],
	pubdate: Mixed,
	year: Number,

	tags: Array,

	meta: {
		createAt: {
			type: Date,
			default: Date.now(),
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

mongoose.model('Movie', movieSchema);
