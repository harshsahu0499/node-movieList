const express = require('express');
const cors = require('cors');
const axios = require('axios');

const PORT = 4000;
const app = express();
const usersMoviePath = ["users", "movies"];
const ratingPath = ["rating"];

const router = express.Router();

router.all('/*', (req, res) => {
  console.log("body", req.body);
  let config = {
    method: req.method,
    data: req.body || {},
  };

  const path = req.params[0];
  const pathSegments = path.split('/');

  if (usersMoviePath.includes(pathSegments[0])) {
    console.log("Expect movie or user. Got: " + path);
    config = {
      ...config,
      url: `http://localhost:3001/${path}`,
    };
  } else if (ratingPath.includes(pathSegments[0])) {
    console.log("Expect rating. Got: " + path);
    config = {
      ...config,
      url: `http://localhost:3002/${path}`,
    };
  } else {
    console.log('page does not exist');
    return res.status(404).json({ message: 'endpoint not found' });
  }

  try {
    console.log({ config });
    axios(config)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        console.log({ err });
        res.send(err);
      });
  } catch (err) {
    console.log(err);
  }
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`API GATEWAY running on port: ${PORT} at http://localhost:${PORT}`);
});
