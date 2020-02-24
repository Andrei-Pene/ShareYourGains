import gql from 'graphql-tag';

const WORKOUT_FIELDS = gql`
    fragment WorkoutFields on Workout {
            id
            name
            category
            workoutWalkthrough
            imgUrl
    }

`

export const ADD_WORKOUT = gql`
    mutation CreateWorkout($newWorkout : WorkoutInput!) {
        addWorkout(input: $newWorkout) {
            ...WorkoutFields
        }
    }
    ${WORKOUT_FIELDS}

`
export const DELETE_WORKOUT = gql`
    mutation DeleteWorkout($oldWorkout : ID! ) {
        deleteWorkout(id: $oldWorkout) {
            ...WorkoutFields
        }
    }
    ${WORKOUT_FIELDS}
`
export const EDIT_WORKOUT = gql`
    mutation UpdateWorkout($editedWorkout : UpdateWorkoutInput! ) {
          editWorkout(input: $editedWorkout) {
            ...WorkoutFields
        }
    }
    ${WORKOUT_FIELDS}
`