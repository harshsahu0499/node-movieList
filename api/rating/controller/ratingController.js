const Rating = require('../../models/rating');
const Movie = require('../../models/movie');
const httpError = require('http-errors')

const rateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { rating } = req.body;
    const movie = await Movie.findByPk(id);

    if (!movie) {
      return next(httpError(404, "Movie not found"));
    }

    if (!rating) {
      return res.status(400).json({ message: "Please specify rating" });
    } else {
      const rate = new Rating({
        movie: id,
        rating,
      });
      await rate.save();
    }

    const ratings = await Rating.find({ movie: id });
    const total = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    const average = total / ratings.length;
    await movie.update({
      rating: average.toFixed(2),
    });
    res.status(200).send(movie);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { rateMovie };
