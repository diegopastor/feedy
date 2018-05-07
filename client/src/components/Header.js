import React, { Component } from 'react';

class Header extends Component {
	render(){
		return(
		<nav>
    		<div class="nav-wrapper">
      			<a href="#" class="left brand-logo">Feedy</a>
      			<ul id="nav-mobile" class="right hide-on-med-and-down">
        			<li><a>Login With Google</a></li>
      			</ul>
    		</div>
  		</nav>
		);
	}
} 

export default Header;