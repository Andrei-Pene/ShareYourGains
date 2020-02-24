import React from 'react';
import {ONE_WORKOUT,ALL_WORKOUTS} from '../../queries';
import {DELETE_WORKOUT} from '../../mutations';
import {useQuery,useMutation} from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';
import './WorkoutDetails.scss';
import AddOrEditWorkout from '../AddOrEditWorkout/AddOrEditWorkout';







const WorkoutDetails = ({match,history}) => {
   
   
    const {loading,error,data} = useQuery(ONE_WORKOUT,{variables : { workoutId : match.params.id}});
    const [deleteWorkout,workout] = useMutation(DELETE_WORKOUT, {
      update(cache, {data : {deleteWorkout}}) {
          const data = cache.readQuery({query : ALL_WORKOUTS})
          cache.writeQuery({
              query : ALL_WORKOUTS,
              data : {results : data.results.filter(workout => workout.id !== deleteWorkout.id)}
          })
      }
  });
    
    if(loading || workout.loading) {
        return <Loader />
    }

    if(error || workout.error) {
      return <p>No Data Found</p>
    }

    const deleteAndRedirect = () => {
      deleteWorkout({variables : {oldWorkout : data.results.id} });
      history.push('/WorkoutShowcase');
    }
    
    return(
      <div className='wrapper'>
        <div className='workout-top'>
        <img  src={data.results.imgUrl} alt='workout' />
        <h2 className='title'>{data.results.name}</h2>
        </div>
        <div className='workout-bottom'>
          <p> {data.results.workoutWalkthrough}</p>
          <div className='button-container'>
            <AddOrEditWorkout isEditing={true} editedWorkout={data.results} />
            <button className='custom-button' onClick={deleteAndRedirect}>Delete</button>
          </div>
        </div>
        
        
      </div>
    )


}

export default WorkoutDetails;