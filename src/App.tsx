import React, { Fragment } from 'react';
import { 
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom'
import './App.scss';
import Home from './containers/Home/Home.container';
import Header from './components/Header/Header';

interface Props {

}

const App:React.FC<Props> = (props: Props) => {
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
					path="/user"
					element={<Home />}
				/>
				<Route
					path="/flower-list"
					element={<Home />}
				/>
				<Route
					path="/favorite-flowers"
					element={<Home />}
				/>
				<Route
					path="/flower/:id"
					element={<Home />}
				/>
				<Route
					path="/sighlist"
					element={<Home />}
				/>
			</Routes>
		</Fragment>
    </BrowserRouter>
  )
}

export default App;
