import React from 'react';
import { Route, Switch }  from 'react-router-dom';
import Home from "../views/Home"

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	);
}
