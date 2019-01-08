import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';

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
                        <CardTitle style={{ color: '#fff', height: '20em', background: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940) center / cover' }}>
                            Restoran Otomasyonu
                  </CardTitle>
                        <CardText style={{ color: 'grey', height: '5em' }}>
                            Restoranların kullanabileceği bir yönetim otomasyonu oluşturdum.
                  </CardText>
                        <CardActions border>
                        <a href="https://github.com/hknakn/Restaurant-Management-Program"><Button colored><b>GitHub</b></Button></a>
                        </CardActions>
                    </Card>
                </div>

            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project  */}
                    <Card shadow={5} className="projects-card" >
                        <CardTitle style={{ color: '#fff', height: '20em', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                            Renk Değiştiren App
                  </CardTitle>
                        <CardText style={{ color: 'grey', height: '5em' }}>
                            Renk değiştiren basit bir React Native uygulaması geliştirdim.
                  </CardText>
                        <CardActions border>
                        <a href="https://github.com/hknakn/React-Native-Sample-App"><Button colored><b>GitHub</b></Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project  */}
                    <Card shadow={5} className="projects-card" >
                        <CardTitle style={{ color: '#fff', height: '20em', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover' }}>
                            Kişisel Portfolyo Sitesi
                  </CardTitle>
                        <CardText style={{ color: 'grey', height: '5em' }}>
                            Kendim için bir portfolyo sitesi oluşturdum.
                  </CardText>
                        <CardActions border>
                        <a href="https://github.com/hknakn/My-Portfolio-Site"><Button colored><b>GitHub</b></Button></a>
                        </CardActions>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className="projects-grid">
                    {/* Project  */}
                    <Card shadow={5} className="projects-card" >
                        <CardTitle style={{ color: 'grey', height: '20em', background: 'url(https://camo.githubusercontent.com/60231b46d375a3f17fd092dc8440c54489747fd0/68747470733a2f2f7777772e736b65746368617070736f75726365732e636f6d2f7265736f75726365732f736f757263652d696d6167652f666c6176722d726563697065732d6170702d696f732d75692d6b69742e6a7067) center / cover' }}>
                            Yemek Tarifi App
                  </CardTitle>
                        <CardText style={{ color: 'grey', height: '5em' }}>
                            Yemek tarifleri yer alan bir mobil uygulama geliştirdim.
                  </CardText>
                        <CardActions border>
                        <a href="https://github.com/hknakn/Yemek-Tarifi-App"><Button colored><b>GitHub</b></Button></a>
                        </CardActions>
                    </Card>
                </div>
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
                    <Tab>React Native</Tab>
                    <Tab>React.js</Tab>
                    <Tab>Swift</Tab>
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