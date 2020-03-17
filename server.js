import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'}); 
import {ApolloServer} from'apollo-server-express';
import Workout from './models/Workout';
import User from './models/User';
import {typeDefs} from './schema';
import {resolvers} from './resolvers'
import cors from 'cors';
import {createToken, getUserFromToken} from './auth';


const path = require('path');


const app = express();
const PORT = process.env.PORT || 4000


const corsOptions = {
  origin: 'https://shareyourgainz.herokuapp.com/',
  credentials : true
}

app.use(cors(corsOptions));




mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true })
.then(()=> console.log('db connected'))
.catch(err => console.error(err))




if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  })

}``


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({req}) {
      const token = req.headers.authorization || '';
      const userr = getUserFromToken(token);
        return {
          Workout,
          User,
          createToken,
          userr
        }
      }
    }
    
  );

server.applyMiddleware({app, path:'/graphql'});



app.listen(PORT,()=> {console.log(`Server running on port ${PORT}`)})