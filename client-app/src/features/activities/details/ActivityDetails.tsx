import React from 'react';
import { Button, Image } from 'semantic-ui-react';
import { Activity } from '../../../app/layout/model/activity';

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;

}
export default function ActivityDetails({activity, cancelSelectActivity, openForm} : Props)
{
  return (
  <div className="ui link cards">
  <div className="card fluid">
      {/* <Image /> */}
    <div className="content">
      <div className="header">{activity.title}</div>
      <div className="meta">
        <a>{activity.date}</a>
      </div>
      <div className="description">
        {activity.description}
      </div>
    </div>
    <div className="extra content">
      <Button.Group widths='2'>
          <Button onClick={() => openForm(activity.id)} basic color="blue" content='Edit'/>
          <Button onClick={cancelSelectActivity} basic color="red" content='Cancel'/>
      </Button.Group>
    </div>
  </div>
  </div>
  )
}