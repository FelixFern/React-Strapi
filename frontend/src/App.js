import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Category from './pages/Category';
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
import Header from './components/Header'

// Apollo Client 
const client = new ApolloClient({
	uri : "http://localhost:1337/graphql", 
	cache: new InMemoryCache()
})

function App() {
	return (
		<Router>
			<ApolloProvider client={client}>
				<div className="App">
					<Header />
					<Routes>
						<Route path='/' element={<Homepage />} />
						<Route path='/category/:id' element={<Category />} />
						<Route path='/review/:id' element={<ReviewDetails />} />
					</Routes>
				</div>
			</ApolloProvider>
		</Router>
  	);
}

export default App;
