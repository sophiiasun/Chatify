import React from 'react';
import './room.css';

function Room({Key, RouteChange}) {
	const changePage = () => {
		window.roomNumber = Key; 
		RouteChange('chat')
	}
	return (
	<div className='tc bg-dark-blue dib br3 pa3 ma2 grow bw2 shadow-5' onClick = {changePage} >
		<img alt='chat-room' src={'https://thumbs.dreamstime.com/b/chat-icon-filled-website-design-mobile-app-development-hobbies-freetime-collection-isolated-black-background-155409945.jpg'}/>
		<div>
			<h2>Topic</h2>
			<p>Topic details</p>
		</div>
	</div>
	)
};

export default Room;