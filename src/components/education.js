import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component{
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p className="info">{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={8}>
                    <h4 className="resume-h4">{this.props.schoolName}</h4>
                    <p className="info">{this.props.schoolDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Education;