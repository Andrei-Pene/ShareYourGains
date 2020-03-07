
export const resolvers = {
    Query : {
      getAllWorkouts : async(__,_,{Workout}) => {
          const workoutList = await Workout.find({}).exec();

          return workoutList;
      },
      getOneWorkout : async(__,{id},{Workout}) => {
        const singleWorkout = await Workout.findById(id).exec();

        return singleWorkout;

      },
      getUser : (_,__,{user}) => {
        return user;
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
      },
      signup : async(_,{input},{User,createToken}) => {
        const existingUser = await User.findOne({email : input.email}).exec();

        if(existingUser) {
          throw new Error('There is already a user associated with this email address')
        }
        const user = await User.create(input);
        const token = createToken(user);
          return {user,token};
      },
      signin : async(_,{input},{User,createToken}) => {
        const user = await User.findOne({email : input.email}).exec();
        if(!user) {
          throw new Error('No user found associated with this email address')
        }
        const token = createToken(user);
          return {user,token};

      }

  },

  User : {
    workouts : async(root, _, {Workout,user}) => {
      if(root.id !== user.id) {
        throw new Error('user not authorized')
      }
      const userWorkouts = await Workout.find({id: root.id}).exec();
        return userWorkouts;
    }


  },

  Workout : {
    author : async(workout,_,{User}) => {
      const workoutAuthor = await User.findById(workout.id);
        return workoutAuthor;

    }

  }



}