import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width: '100%', margin: 'auto'}}>
              <Grid className="landing-grid">
                <Cell col={12}>
                  <img
                    src="https://media.licdn.com/dms/image/C4D03AQHFWxpzot2tfg/profile-displayphoto-shrink_200_200/0?e=1551916800&v=beta&t=3uoPP7HJqBa8DH61XZq5qZJkAArS0RMubJJ8lHtcQj8"
                    alt="avatar"
                    className="avatar-img"/>

                  <div className="banner-text">
                    <h1>Junior Yazılım Geliştirici</h1>
                  <hr/>

                <p> C# | VB.NET | SQL Server | JavaScript | Python </p>

                <div className="social-links">

                    {/* Twitter */}
                    <a href="https://www.linkedin.com/in/cehakanakin/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square" aria-hidden="true" />
                    </a>

                    {/* Github */}
                    <a href="https://www.github.com/hknakn/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/hakanakaakin/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-instagram" aria-hidden="true" />
                    </a>  

                    {/* Twitter */}
                    <a href="https://www.github.com/hknakn/" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-twitter-square" aria-hidden="true" />
                    </a>  
                </div>                                           
                  </div>
                
                </Cell>
              </Grid>
            </div>
        )
    }
}

export default Landing;