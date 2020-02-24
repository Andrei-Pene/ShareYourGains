import {gql} from 'apollo-server';

export const typeDefs = gql`
    
    input WorkoutInput {
        name : String!
        category : String!
        workoutWalkthrough : String!
        imgUrl : String!
    }

    input UpdateWorkoutInput {
        id : ID!
        name : String!
        category : String!
        workoutWalkthrough : String!
        imgUrl : String!

    }
    
    type Workout {
        id : ID!
        name : String!
        category : String!
        workoutWalkthrough : String!
        imgUrl : String!

    }

    type Query {
        getAllWorkouts : [Workout!]!
        getOneWorkout(id : ID!) : Workout!
        

    }

    type Mutation {
        addWorkout(input: WorkoutInput!) : Workout!
        editWorkout(input : UpdateWorkoutInput!) : Workout!
        deleteWorkout(id: ID!) : Workout!

    }
    
    
`;