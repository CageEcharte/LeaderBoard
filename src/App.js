import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import axios from 'axios';

import CamperList from './camperlist'



export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentCampers: [],
      allTimeCampers: [],
      currentView: 'recentCampers'
    }


   }

  componentWillMount() {
     let current = this;
  axios.all([this.fetchRecent(), this.fetchAllTime()]).then(axios.spread(function(recentCampers, allTimeCampers){
    current.setState({ recentCampers: recentCampers.data, allTimeCampers: allTimeCampers.data});
  }));
}


   fetchRecent(){
     return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
   }

   fetchAllTime(){
     return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
   }

   changeView(currentView){
     this.setState({currentView})
   }

   render() {
     if(!this.state.recentCampers.length && this.state.allTimeCampers.length){
       return <div> loading... </div>
     }
     return (
<div>
<h2 className="front"> Viewing top 100 campers with the highest points: {this.state.currentView} </h2>
 <button onClick={()=> this.changeView('recentCampers')} className="funny" > Recent Points</button>
 <button onClick={() => this.changeView('allTimeCampers')} className="funny"> All Time Points</button>
<CamperList campers={this.state[this.state.currentView]}/>

 </div>
     );
   }
 }
