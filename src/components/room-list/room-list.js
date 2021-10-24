import React from 'react';
import Room from './room/room';
import './room-list.css'

function RoomList({RouteChange}) {
	const rooms = ['1','2','3','4','5','6','7','8','9','10','11','12']
	return (
		<div className='container'>
			{rooms.map((room) => {
				console.log(room); 
				return <Room Key={room} RouteChange={RouteChange} />
			})}
		</div>
	);
};

export default RoomList;