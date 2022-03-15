import express from 'express';
import errorHandlerMiddleware from './middleware/error-handler.js';
import notFoundMiddleware from './middleware/not-found.js';
const app = express();

app.get('/', (req, res) => {
  throw new Error('error')
  res.send('Welcome');
});

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
