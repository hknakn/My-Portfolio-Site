import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 }
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project  */}
                    <Card shadow={5} className="projects-card" >
                        <CardTitle style={{ color: '#fff', height: '20em', background: 'url(https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg) center / cover' }}>
                            Restoran Otomasyonu
                  </CardTitle>
                        <CardText style={{ color: 'grey', height: '5em' }}>
                            Restoranların kullanabileceği bir yönetim otomasyonu oluşturdum
                  </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                    </Card>
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">

                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is SQL Server</h1></div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div><h1>This is JavaScript</h1></div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div><h1>This is Python</h1></div>
            )
        }

    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab>VB.NET</Tab>
                    <Tab>SQL Server</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Python</Tab>
                </Tabs>


                <Grid className="projects-grid">
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>
        )
    }
}

export default Projects;