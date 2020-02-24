import express from 'express';
import mongoose from'mongoose';
import dotenv from 'dotenv';
dotenv.config({path:'variables.env'}); 
import {ApolloServer} from'apollo-server-express';
import Workout from './models/Workout';
import {typeDefs} from './schema';
import {resolvers} from './resolvers'
import cors from 'cors';


const path = require('path');


const app = express();
const PORT = process.env.PORT || 4000

app.use(cors());
app.use('/graphql',(req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://shareyourgainz.herokuapp.com' );
    res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    
    next();
})



mongoose.set('useCreateIndex', true);

mongoose.connect(process.env.MONGODB_URL,{ useNewUrlParser: true })
.then(()=> console.log('db connected'))
.catch(err => console.error(err))







const server = new ApolloServer({
    typeDefs,
    resolvers,
    context() {
      return {
         Workout
      }
    }
    
  });

server.applyMiddleware({app, path:'/graphql'});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req,res) => {
    res.sendFile(path.resolve(__dirname, 'client','build','index.html'));
  })

}

app.listen(PORT,()=> {console.log(`Server running on port ${PORT}`)})