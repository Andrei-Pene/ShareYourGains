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

export const ALL_WORKOUTS = gql`
    query getAllWorkouts {
        results : getAllWorkouts {
            ...WorkoutFields
        }

    }

    ${WORKOUT_FIELDS}
`

export const ONE_WORKOUT = gql`
    query getOneWorkout($workoutId : ID!) {
        results: getOneWorkout(id: $workoutId) {
            ...WorkoutFields
        }

    }
    ${WORKOUT_FIELDS}
`


