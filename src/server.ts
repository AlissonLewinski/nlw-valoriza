import express from 'express';
const app = express();

app.get('/test', (req, res) => {
  res.send('Hey Universe!')
});

app.post('/test-post', (req, res) => {
  return res.send('Post Universe!')
})

app.listen(3001, () => console.log('Server is running'));