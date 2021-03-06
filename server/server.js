import express from 'express';
import bodyParser from 'body-parser';
import messages from './routes/messages';
import  users from './routes/user';

const app = express();

app.use(bodyParser.json());
app.use(express.json());



app.use(messages);
app.use(users);



app.listen(process.env.PORT || 3000, () => {console.log('App is listening on 3000...')});

export default app;