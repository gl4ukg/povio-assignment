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
import { useSelector } from 'react-redux';
import { CombinedReducersState } from './store/combinedReducers';
import { useDispatch } from 'react-redux';
import { loadFavoriteFlowers as loadFavoriteFlowersAction } from './store/flowers/actions';
import User from './containers/User/User';
import { loadFlowers as loadFlowersAction } from "./store/flowers/actions"
import FlowerDetail from './containers/Flowers/FlowerDetail/FlowerDetail';
import SightingList from './containers/Sighting/List/SightingList';
import SightingDetail from './containers/Sighting/SightingDetail/SightingDetail';
import NewSighting from './containers/Sighting/NewSighting/NewSighting';
import { loadAboutMeInfo as loadAboutMeInfoAction } from './store/user/actions';
import { ProfileType } from './types/user.types';
import { loadAllSightings as loadAllSightingsAction } from './store/sighting/actions';

interface Props {

}

const App:React.FC<Props> = (props: Props) => {

	const dispatch = useDispatch();
	const token = localStorage.getItem('bearerToken')
	const isLogin: boolean | undefined = useSelector((state: CombinedReducersState) => state.user?.isLogin)
    const loadFlowers = useCallback(() => dispatch(loadFlowersAction()), [dispatch])
	const loadAboutMeInfo = useCallback(() => dispatch(loadAboutMeInfoAction()), [])
	const loadFavoriteFlowers = useCallback(() => dispatch(loadFavoriteFlowersAction()), [])
	const loadAllSightings = useCallback(() => dispatch(loadAllSightingsAction()), [dispatch])

	useEffect(() => {
		loadFlowers()
		loadAllSightings()
		if(isLogin || token) {
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
