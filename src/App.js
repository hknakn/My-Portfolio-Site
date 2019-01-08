import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (    
      
      // React Material Layout

      <div className="demo-big-content">
          <Layout>
              <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white', fontFamily: 'Montserrat', fontSize: '26px', fontWeight: 'bold'}} to="/">
              <i className="fa fa-code" aria-hidden="true"></i>  Hakan Akın</Link>} scroll>
                  <Navigation>
                      <Link to="/resume"><p className="navigation-text">Özgeçmiş</p></Link>
                      <Link to="/aboutme"><p className="navigation-text">Blog</p></Link>
                      <Link to="/projects"><p className="navigation-text">Projeler</p></Link>
                      <Link to="/contact"><p className="navigation-text">İletişim</p></Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black', fontFamily: 'Montserrat', fontSize: '20px', fontWeight: 'bold'}} to="/"><i className="fa fa-code" aria-hidden="true"></i>  Hakan Akın</Link>}>
                  <Navigation>
                      <Link to="/resume"><p className="drawer-text">Özgeçmiş</p></Link>
                      <Link to="/aboutme"><p className="drawer-text">Blog</p></Link>
                      <Link to="/projects"><p className="drawer-text">Projeler</p></Link>
                      <Link to="/contact"><p className="drawer-text">İletişim</p></Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main/>
              </Content>
          </Layout>
      </div>
      
    );
  }
}

export default App;
