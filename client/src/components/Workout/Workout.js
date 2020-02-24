import React from 'react';
import './Workout.scss';
import {withRouter} from 'react-router-dom';

const Workout = ({workout,match,history}) => (
    
    <div className='collection-item'>
            <div className='image'
                style={{backgroundImage : `url(${workout.imgUrl})` 
            }}       
            />
            <div className='collection-footer'>
                <span className='name'>{workout.name}</span>
                <span className='category'>{workout.category}</span>
            </div>
            <button className='custom-button' onClick={() => history.push(`${match.url}/${workout.id}`)} > View Workout</button> 

    </div>



)

export default withRouter(Workout);
