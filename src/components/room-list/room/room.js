import React from 'react';
import './room.css';

function Room(props) {
	return (
	<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' onClick={() => props.RouteChange('chat')}>
		<img alt='chat-room' src={'https://i.pinimg.com/originals/14/db/65/14db65db9599cd2d5d7aa967e73031a3.jpg'}/>
		<div>
			<h2>Topic</h2>
			<p>Topic details</p>
		</div>
	</div>
	)
};

export default Room;