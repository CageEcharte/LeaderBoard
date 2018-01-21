import React from 'react';

import CamperListItem from './camper_list_item.js'

//This is where the data is being pulled from VVVV

const CamperList = (props) => {

  console.log('props?');
   const baseURL = 'https://freecodecamp.com/';

   if (props.campers.length === 0) {
   	return (
   		<div>hello world</div>
   	);
   } else {
   	console.log(props.campers.data[0]);

   	const campers = props.campers.data.map((d, index) =>
   		<li key={index.toString()} className="collection-item avatar">
   			<img src={d.img} alt="" className="circle"></img>
   			<div class="row">
   					<div className="col s3 left-align">
   						<a href={baseURL + d.username} target="_blank" className="title">{d.username}</a>
   					</div>
   				<div class="col s5">
   					<span className="green-text accent-4">{d.recent}</span>
   				</div>
   					<div class="col s4">
   						<span className="green-text accent-4">{d.alltime}</span>
   					</div>
   			</div>
   			</li>
   		)

   		return (
   			<ul className="collection with-header">
   			<li className="collection-header">
   					<div class="row valign-wrapper">
   						<div class="col s4 left-align"><h4>Leaderboard</h4></div>
   						<div class="col s4"><h5>past 30 days</h5></div>
   						<div class="col s4"><h5>all time</h5></div>
   					</div>
   				</li>
   				{campers}
   			</ul>
   		);
   	}
   	// console.log('CamperList', props.campers.data);
    }

export default CamperList
