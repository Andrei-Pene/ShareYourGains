import React from 'react';
import './Homepage.scss'


const HomePage = ({history}) => (
    
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Share Your Gainz</h1>
          <p className="lead">
            Inspire and help eachother break through all barriers
          </p>
          <button className='custom-button' onClick={() => history.push('/WorkoutShowcase')}> View Workouts</button>
        
        </div>
      </div>
    </section>

)

export default HomePage;