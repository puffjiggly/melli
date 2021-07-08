const path = require('path');
const express = require('express');

//middleware
const lyricController = require('../controllers/lyricController');
const youtubeController = require('../controllers/youtubeController');

// 
const app = express.Router();

app.post('/', lyricController.getTracks, youtubeController.getLink, (req, res) => {
  return res.status(200).send(res.locals);
});



module.exports = app;