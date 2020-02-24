import React from 'react';
import './WorkoutShowcase.scss';
import Workout from '../Workout/Workout';
import {useQuery} from '@apollo/react-hooks';
import {ALL_WORKOUTS} from '../../queries';
import Loader from 'react-loader-spinner'
import AddOrEditWorkout from '../AddOrEditWorkout/AddOrEditWorkout';

const WorkoutShowcase = () => {
    const {data,loading,error} = useQuery(ALL_WORKOUTS);
    
    if(loading) {
        return <Loader />
    }

    if(error) {
        return <p> There is no data available</p>
    }
    return (
        <React.Fragment>
            <div className='button-container'>
                <AddOrEditWorkout isEditing={false} />
            </div>
            <div className='cont'>
                {
                data.results.map(workout => (
                    <Workout key={workout.id} workout={workout} />
                    ))  
                }
            </div>
        </React.Fragment>

        
    
    
    )




}

export default WorkoutShowcase;