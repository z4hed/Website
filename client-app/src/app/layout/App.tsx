import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Header, List } from 'semantic-ui-react';
import { Activity } from './model/activity';
import NavBar from './navbar';

function App() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
    setActivities(response.data)
    })
  }, [])
  /***always include the empty square brackets- otherwise the state will keep updating by default*/

  return (
    <div className="App">
      <NavBar></NavBar>
        <List>
          {activities.map((activity) => (
            <List.Item key={activity.id}>
              {activity.title}   
            </List.Item>
          ))}
        </List>
      
    </div>
  );
}

export default App;
