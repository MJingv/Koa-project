const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Mixed = Schema.Types.Mixed;

const userSchema = new Schema({
	username: {
		unique: true,
		type: String,
	},
	email: {
		unique: true,
		type: String,
	},
	password: {
		unique: true,
		type: String,
	},
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

userSchema.pre('save', function (next) {
	//保存前预处理
	if (!user.isModified('password'))


		if (this.isNew) {
			this.meta.createAt = this.meta.updateAt = Date.now();
		} else {
			this.meta.updateAt = Date.now();
		}
	next();
});


mongoose.model('User', userSchema);
