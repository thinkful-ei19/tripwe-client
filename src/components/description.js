import React from 'react';

const mockData = {
    "trip": {
        "id": 1,
        "user_id": 1,
        "name": "US Trip",
        "destination": "Los Angeles",
        "description": "fun in the sun",
        "arrival": "2018-09-30T04:00:00.000Z",
        "departure": "2018-10-30T04:00:00.000Z"
    }
}
export default function Description(props) {
   // console.log(props);
    return (
        <div className="dashboard-description">
            <p className="dash-header_countdown">{mockData.trip.description}</p>
        </div>

    )
}