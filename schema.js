import mongoose, { Schema } from 'mongoose';

const CommentSchema = new mongoose.Schema(
	{
		text: { type: String, required: true },
		rate: {
			type: Number,
			min: [1, 'Rate must be min 1'],
			max: [5, 'Rate can be max 5'],
			default: 5,
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{ timestamps: true }
);

const schema = new mongoose.Schema(
	{
		category: { type: String, required: true },
		title: { type: String, required: true },
		cover: { type: String, required: true },
		readTime: {
			value: { type: Number, required: true },
			unit: { type: String, required: true },
		},
		comments: { default: [], type: [CommentSchema] },
		user: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		content: { type: String, required: true },
	},
	{ timestamps: true }
);

export default mongoose.model('Blog', schema);
