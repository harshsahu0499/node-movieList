const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const mongo_uri= "mongodb://localhost:27017/movielist";

const ratingSchema = new Schema({
    movie: {
        type: Number,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});
mongoose.connect(mongo_uri);

mongoose.connection.on("connected", () => {
    console.log("Mongoose database connected.");
});

mongoose.connection.on("error", (err) => {
    console.log("Mongoose Error.", err);
});

module.exports = mongoose.model("Ratings",ratingSchema)