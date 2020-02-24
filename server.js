import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'}); 
import cors from 'cors';
import {ApolloServer} from'apollo-server-express';
import Workout from './models/Workout';
import {typeDefs} from './schema';
import {resolvers} from './resolvers';

const path = require('path');




mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true })
.then(()=> console.log('db connected'))
.catch(err => console.error(err))



const app = express();
const PORT = process.env.PORT || 4000

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials : true
}

app.use(cors(corsOptions));

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
      return {
         Workout
      }
    }
    
  });

server.applyMiddleware({app, path:'/graphql', cors:false});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client','build', 'public', 'index.html'));
  })

}

app.listen(PORT,()=> {console.log(`Server running on port ${PORT}`)})