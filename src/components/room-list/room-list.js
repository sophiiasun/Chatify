import React from 'react';
import Room from './room/room';

function RoomList() {
	const rooms = [1,2,3,4,5,6,7,8,9]
	return (
		rooms.map((room) => {
			return <Room key={room}/>
		})
	);
};

export default RoomList;