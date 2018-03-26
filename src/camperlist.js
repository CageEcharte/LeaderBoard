import React from 'react';

import CamperListItem from './camper_list_item.js'

//This is where the data is being pulled from VVVV
const CamperList = ({campers}) => {


const Items = campers.map((camper, index) => {
  return <CamperListItem keys={index} camper={camper} number={index + 1}/>
});
return (

<table className="table table-striped">
<thead>
</thead>
<tr>
<th> # </th>
<th> Username </th>
<th> Last 30 Days </th>
<th> All Time Points </th>
</tr>
<tbody className="bodyclass">
{Items}

</tbody>
</table>


  );
}

export default CamperList
