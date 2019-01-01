import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hakan Akın</h2>
                        <img src="https://media.licdn.com/dms/image/C4D03AQHFWxpzot2tfg/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=3uoPP7HJqBa8DH61XZq5qZJkAArS0RMubJJ8lHtcQj8" alt="avatar" style={{ height: '250px' }} />

                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras accumsan nulla eget augue suscipit varius. Proin iaculis eget ex vel mattis. Suspendisse elementum nibh vitae dignissim condimentum. Nam dapibus pellentesque justo, eget venenatis lorem consectetur a. Proin egestas dignissim erat ut dignissim.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        05XX XXX-XX-XX
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-fax" aria-hidden="true" />
                                        05XX XXX-XX-XX
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        cehakanakin@gmail.com
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '30px', fontFamily: 'Montserrat'}}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        My Skype Address
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;