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

    input SignUpSignInInput {
        email : String!
        password : String!
    }
    
    type Workout {
        id : ID!
        name : String!
        category : String!
        workoutWalkthrough : String!
        imgUrl : String!
        author : User!

    }

    type User {
        id : ID!
        email : String!
        password : String!
        workouts : [Workout]!

    }

    type AuthUser {
        token : String!
        user : User!
    }

    type Query {
        getAllWorkouts : [Workout!]!
        getOneWorkout(id : ID!) : Workout!
        getUser : User!
        

    }

    type Mutation {
        addWorkout(input: WorkoutInput!) : Workout!
        editWorkout(input : UpdateWorkoutInput!) : Workout!
        deleteWorkout(id: ID!) : Workout! 
        signup(input : SignUpSignInInput) : AuthUser!
        signin(input : SignUpSignInInput) : AuthUser!

    }
    
    
`;