
export const resolvers = {
    Query : {
      getAllWorkouts : async(__,_,{Workout}) => {
          const workoutList = await Workout.find({}).exec();

          return workoutList;
      },
      getOneWorkout : async(__,{id},{Workout}) => {
        const singleWorkout = await Workout.findById(id).exec();

        return singleWorkout;

      }

    },
    Mutation : {
      addWorkout: async(__,{input},{Workout}) => {
        const newWorkout = await Workout.create(input);

        return newWorkout;
      },
      editWorkout : async(__,{input},{Workout}) => {
        const editedWorkout = await Workout.findByIdAndUpdate(input.id, {
          name : input.name,
          category : input.category,
          workoutWalkthrough : input.workoutWalkthrough,
          imgUrl: input.imgUrl
        });

        return editedWorkout;

      },
      deleteWorkout : async(__,{id},{Workout}) => {
        const removedWorkout = await Workout.findOneAndRemove({_id:id});

        return removedWorkout;
      }

  }



}