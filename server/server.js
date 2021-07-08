const path = require('path');
const express = require('express');
const lyricRouter = require('./router/lyricRouter');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

// sign up endpoint

// login endpoint

// endpoint for requests to the musixmatch API 
// Input = string
// in betweeen = send request to Youtube API to retrieve URLs for each result
// output = JSON object, with ten most popular artists/songs based on search
app.use('/lyrics', lyricRouter); 

app.use((err, req, res, next) => {
  return res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})