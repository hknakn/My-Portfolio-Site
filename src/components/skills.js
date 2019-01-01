import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component{
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <div>
                    <p className="skill-name">{this.props.skill}</p>
                    <ProgressBar className="progress" progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>
        )
    }
}

export default Skills;