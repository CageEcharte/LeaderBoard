import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';
import axios from 'axios';

import CamperList from './camperlist'



constructor(props) {
 		super(props);
 		this.state = {
 		recentCampers: [],
 			allTimeCampers: [],
 			currentView: 'recentCampers'
 	 }
 	}


   }

   componentWillMount() {
  	let current = this;
  		axios.all([this.fetchRecent(), this.fetchAllTime()])
  			.then(axios.spread(function (recentCampers, allTimeCampers) {
  				current.setState({ recentCampers, allTimeCampers });
  			}));
  	}


    fetchRecent() {
  	  console.log('\n');
  		console.log('fetch recent');
  		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  	}

    fetchAllTime() {
  		console.log('\n');
  		console.log('fetch all-time');
  		return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
  	}

    changeView(currentView) {
  		this.setState({ currentView })
  	}

	render() {
   		return (
   			<div>
   				<h2> viewing top {this.state.currentView} </h2>
   			<div className="row">
   					<div className='col s2 left-align'>
   						<button onClick={() => this.changeView('recentCampers')} className="btn teal accent-4"> Recent </button>
   					</div>
   				<div className='col s2 left-align'>
   						<button onClick={() => this.changeView('allTimeCampers')} className="btn teal accent-4"> All Time </button>
   				</div>
   				</div>
   				<div className="row">
   					<div className="col s12 m12 l12 center-align">
   					<CamperList campers={this.state[this.state.currentView]} />
   					</div>
   			</div>
   			</div>
   		);

   	}
    }
