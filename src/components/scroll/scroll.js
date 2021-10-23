import React from 'react';
import './scroll.css'

function Scroll(props) {
	return (
		<div className='scroll'>
      		{props.children}
    	</div>
  	);
};

export default Scroll;
