import jwt from 'jsonwebtoken';
import {config} from './config';
import User from './models/User';

export const createToken = ({id}) => jwt.sign({id}, config.secretOrKey);


export const getUserFromToken = token => {
  try {
    const user = jwt.verify(token, config.secretOrKey)
    return User.findOne({id: user.id})
  } catch (e) {
    return null
  }

};

export const authenticated = next => (root,args,context,info) =>{
  if(!context.user) {
    throw new Error('not authorized')
  }

  return next(root,args,context,info);

}

