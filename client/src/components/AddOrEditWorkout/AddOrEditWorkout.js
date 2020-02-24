import React, { useState } from 'react';
import {useMutation} from '@apollo/react-hooks';
import Loader from 'react-loader-spinner';
import {ADD_WORKOUT,EDIT_WORKOUT} from '../../mutations';
import {ALL_WORKOUTS} from '../../queries';
import WorkoutModal from '../WorkoutModal/WorkoutModal';


const AddOrEditWorkout = ({isEditing, editedWorkout={}}) => {

    const [isModal,setModal] = useState(false);
    const [createWorkout, newWorkout] = useMutation(ADD_WORKOUT, 
    {
        update(cache, {data : {addWorkout}}) {
            const data = cache.readQuery({query : ALL_WORKOUTS})
            cache.writeQuery({
                query : ALL_WORKOUTS,
                data : {results : [addWorkout,...data.results]}
            })
        }
    })
    const [updateWorkout, updatedWorkout] = useMutation(EDIT_WORKOUT);

    const onSubmit = (input) => {
        closeModal();
        if(isEditing){
            updateWorkout({
                variables : {editedWorkout : 
                {
                    id : editedWorkout.id,
                    name : input.name,
                    category : input.category,
                    workoutWalkthrough : input.workoutWalkthrough,
                    imgUrl : input.imgUrl
                }
                
            }})
        } else
        
        createWorkout({
            variables : {newWorkout: input}

        })

    }



    if(newWorkout.loading || updatedWorkout.loading) {
        return <Loader />
    }

    if(newWorkout.error || updatedWorkout.error) {
        return <p>No Data Found</p>
    }

    const openModal = () => {
        setModal(true)

    }

    const closeModal = () => {
        setModal(false)
    }


    return (
        <React.Fragment>
            <button className='custom-button'  onClick={() => openModal()}> {isEditing ? 'Edit Workout' : 'Add Workout'} </button>
            {
                isModal ? <WorkoutModal
                onSubmit={onSubmit}
                isOpen={isModal}
                closeModal={closeModal}
                isEdit={isEditing}
                workoutToEdit={editedWorkout}
                /> : null 
            }
        
        </React.Fragment>


    )


}

export default AddOrEditWorkout;