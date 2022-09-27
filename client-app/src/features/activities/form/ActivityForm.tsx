import React, { useState } from 'react';
import { act } from 'react-dom/test-utils';
import { Button, ItemDescription, Segment } from 'semantic-ui-react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import { Activity } from '../../../app/layout/model/activity';

interface Props{
    closeForm: () => void;
    activity: Activity | undefined;
}
export default function ActivityForm({activity: selectedActivity, closeForm} : Props)
{   
    
    let a : Activity = {
        id : '',
        title: '',
        date: '',
        description: '',
        category: '',
        city: '',
        venue: ''
    }

    const initialState = selectedActivity ?? a;

    const [activity, setActivity] = useState(initialState);

    function handleSubmit(){
        console.log(activity);
    }

    return (
        <Segment clearing>
        <Form onSubmit={handleSubmit} autoComplete='off'>
            <h1>Hey!</h1>
            <ItemDescription style={{marginBottom: 30 + "px"}}> Enter Activity Information below.</ItemDescription>
            <Form.Input placeholder='Title' value={activity.title} name='title'></Form.Input>
            <Form.TextArea placeholder="Description"></Form.TextArea>
            <Form.Input placeholder='Category'></Form.Input>
            <Form.Input placeholder='Date'></Form.Input>
            <Form.Input placeholder='City'></Form.Input>
            <Form.Input placeholder='Venue'></Form.Input>
            <Button floated='right' positive type='submit' content='Submit'/>
            <Button onClick={() => closeForm()} floated='right' type='button' content='Cancel'/>
            
        </Form>
        </Segment>
    )
}
