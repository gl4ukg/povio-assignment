import React, { Fragment, useCallback, useEffect } from 'react';
import { 
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import './App.scss';
import Home from './containers/Home/Home.container';
import Header from './components/Header/Header';
import FlowerList from './containers/Flowers/List/FlowerList';
import FlowerFavorites from './containers/Flowers/Favorites/FlowerFavorites';
import { useDispatch } from 'react-redux';
import { loadFavoriteFlowers as loadFavoriteFlowersAction } from './store/flowers/actions';
import User from './containers/User/User';
import { loadFlowers as loadFlowersAction } from "./store/flowers/actions"
import FlowerDetail from './containers/Flowers/FlowerDetail/FlowerDetail';
import SightingList from './containers/Sighting/List/SightingList';
import SightingDetail from './containers/Sighting/SightingDetail/SightingDetail';
import NewSighting from './containers/Sighting/NewSighting/NewSighting';
import { loadAboutMeInfo as loadAboutMeInfoAction } from './store/user/actions';
import { loadAllSightings as loadAllSightingsAction } from './store/sighting/actions';
import { useIsLoggedIn } from './customHooks/auth';
import { getBearerToken } from './utils/auth';

const App:React.FC = () => {
	const token = getBearerToken();
	const dispatch = useDispatch();
	const isLoggedIn = useIsLoggedIn();

    const loadFlowers = useCallback(() => dispatch(loadFlowersAction()), [dispatch])
	const loadAboutMeInfo = useCallback(() => dispatch(loadAboutMeInfoAction()), [])
	const loadFavoriteFlowers = useCallback(() => dispatch(loadFavoriteFlowersAction()), [])
	const loadAllSightings = useCallback(() => dispatch(loadAllSightingsAction()), [dispatch])

	useEffect(() => {
		loadFlowers()
		loadAllSightings()
		if(isLoggedIn) {
			loadAboutMeInfo()
			loadFavoriteFlowers()
		}
	}, [token])

	return (
		<BrowserRouter>
			<Fragment>
				<Header />
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/user/:id"
						element={<User />}
					/>
					<Route
						path="/flowers"
						element={<FlowerList />}
					/>
					<Route
						path="/favorite-flowers"
						element={<FlowerFavorites />}
					/>
					<Route
						path="/flower/:id"
						element={<FlowerDetail />}
					/>
					<Route
						path="/sighting-list"
						element={<SightingList />}
					/>
					<Route
						path="/sighting/:id"
						element={<SightingDetail />}
					/>
					<Route
						path="/new-sighting"
						element={<NewSighting />}
					/>
				</Routes>
			</Fragment>
		</BrowserRouter>
	)
}

export default App;
