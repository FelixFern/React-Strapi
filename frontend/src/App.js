import {
	BrowserRouter as Router,
	Routes,
	Route,
  } from 'react-router-dom'

import Category from './pages/Category';
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Header from './components/Header'

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/category/:id' element={<Category />} />
					<Route path='/review/:id' element={<ReviewDetails />} />
				</Routes>
			</div>
		</Router>
  	);
}

export default App;
