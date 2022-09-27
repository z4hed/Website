
import { Button, Container, Menu } from "semantic-ui-react";

import React from 'react';

interface Props{
    openForm: () => void;
}
export default function NavBar({openForm} : Props) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img src="/assets/" alt="" style={{marginRight: 10}}></img>
                    Reactivities
                </Menu.Item>
                <Menu.Item name='Activities'></Menu.Item>
                <Menu.Item>
                    <Button onClick={() => openForm()} positive content='Create Activity'></Button>
                </Menu.Item>
            </Container>
        </Menu>
    )
}