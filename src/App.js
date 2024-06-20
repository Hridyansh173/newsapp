import React, { Component } from 'react';
import {HashRouter} from "react-router-dom";
import {Route} from "react-router-dom";
import {Routes} from "react-router-dom";

import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
          <Navbar />
          <Routes basename="/newswebapp">
            {/* Redirect to the home route automatically */}
            <Route path='/*' element={<News key='general' pageSize={5} country='in' category='general' />} />
            <Route path='/home' element={<News key='general' pageSize={5} country='in' category='general' />} />
            <Route path='/business' element={<News key='business' pageSize={5} country='us' category='business' />} />
            <Route path='/entertainment' element={<News key='entertainment' pageSize={5} country='us' category='entertainment' />} />
            <Route path='/health' element={<News key='health' pageSize={5} country='us' category='health' />} />
            <Route path='/science' element={<News key='science' pageSize={5} country='us' category='science' />} />
            <Route path='/sports' element={<News key='sports' pageSize={5} country='us' category='sports' />} />
            <Route path='/technology' element={<News key='technology' pageSize={5} country='us' category='technology' />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}