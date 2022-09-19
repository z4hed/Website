import React, { Fragment, useEffect, useState } from 'react';

import axios from 'axios';
import { Container, Header, List } from 'semantic-ui-react';
import { Activity } from './model/activity';
import NavBar from './navbar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedActivity, setSelectedActivity] = useState< Activity | undefined>(undefined);
  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    setActivities(response.data)
    })
  }, [])
  /***always include the empty square brackets- otherwise the state will keep updating by default*/

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x => (x.id === id) ))
  }

  function handleCancelSelectActivity()
  {
    setSelectedActivity(undefined)
  }

  return (
    <Fragment>
      <NavBar></NavBar>

      <Container style={{marginTop: "7em"}}>
        
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
        ></ActivityDashboard>
        
      </Container>
      
    </Fragment>
  );
}

export default App;
