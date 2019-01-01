import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p className="info">{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 className="resume-h4">{this.props.companyName}</h4>
                    <h6 className="resume-h6">{this.props.title}</h6>
                    <p className="info">{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;