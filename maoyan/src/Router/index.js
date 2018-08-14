import React from 'react';
import {
	HashRouter as Router,
	Route,
	Redirect,
	Switch
} from 'react-router-dom';

import App from '../App.js';
import Home from '../Components/Home';
import Search from '../Components/Search';
import Nowplaying from '../Components/Home/Nowplaying';
import Comingsoon from '../Components/Home/Comingsoon';
import Detail from '../Components/Detail';
import Cinema from '../Components/Cinema';
import My from '../Components/My';

import {Provider} from 'react-redux';
import store from '../Redux';

const router=(
	<Provider store={store}>
		<Router>
			<App>
				<Switch>
					<Route path="/home" render={()=>
						<Home>
							<Switch>
								<Route path="/home/nowplaying" component={Nowplaying}/>
								<Route path="/home/comingsoon" component={Comingsoon}/>
								<Redirect from="/home" to="/home/nowplaying"/>
							</Switch>
						</Home>
					}/>
					<Route path="/search" component={Search}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/my" component={My}/>
					<Route path="/detail/:id" component={Detail}/>
					<Redirect from="*" to="/home/nowplaying"/>
				</Switch>
			</App>
		</Router>
	</Provider>
)

export default router;