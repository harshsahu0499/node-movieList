const Movie = require('../../models/movie');
const SeenMovie = require('../../models/seenMovie');
const readAllMovies = async (req, res, next) => {
    try {
      let order = "release";
      if (req.query && req.query.order) {
        order = req.query.order;
      }
      const movies = await Movie.findAll({
        order: [order],
      });
      if (!movies) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      res.status(200).send(movies);
    } catch (error) {
      console.log({error})
      return res.json({error: {errorType:"ERROR"} })
    }
};
  
const readMovie = async (req, res, next) => {
    try {
      const id = req.params.id;
      const movie = await Movie.findByPk(id);
      if (!movie) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      res.status(200).send(movie);
    } catch (error) {
      return res.json({error: {errorType:"ERROR"} })
    }
  };
  
const watchMovie = async (req, res, next) => {
    try {
      
      const { userId, movieId } = req.body;
      const movie = await Movie.findByPk(movieId);
         
      if (!movie) {
        return res.json({error: {errorType:"NOT_FOUND"} })
      }
      await movie.update({
        count: ++movie.count,
      });
  
      await SeenMovie.create({
        movieId,
        userId
      });
  
      return res.status(200).send(movie);
   

    } catch (error) {
      return res.json({error: {errorType:"ERROR"} })
    }
  };
  
  const recentMovies = async(req, res, next) => {
    const { id } = req.params;
    try {
        const seenMovies = await SeenMovie.findAll({
            where: {
                userId: id,
            },
        });
        const ids = seenMovies.map((e) => e.movieId);
        console.log(seenMovies);
        console.log(ids);
        const movies = await Movie.findAll({
            where: {
                id: ids,
            },
        });
        if (!movies) {
            return next(createError(404, "Movies Not Found!"));
        }
        res.status(200).send(movies);
    } catch (error) {
        next(createError(400, error.message));
    }
};

module.exports = { recentMovies, watchMovie, readMovie, readAllMovies }
