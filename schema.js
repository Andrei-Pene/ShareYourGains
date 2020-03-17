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

    input SignUpInput {
        email : String!
        password : String!
        displayName : String!
    }

    input SignInInput {
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
        displayName : String!
        email : String!
        workouts : [Workout]

    }

    type AuthUser {
        token : String!
        user : User
    }

    type Query {
        getAllWorkouts : [Workout!]!
        getOneWorkout(id : ID!) : Workout!
        getUser : User
        

    }

    type Mutation {
        addWorkout(input: WorkoutInput!) : Workout!
        editWorkout(input : UpdateWorkoutInput!) : Workout!
        deleteWorkout(id: ID!) : Workout! 
        signup(input : SignUpInput!) : AuthUser!
        signin(input : SignInInput!) : AuthUser!

    }
    
    
`;