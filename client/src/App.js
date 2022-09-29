import React from 'react';
import './App.css';
import {
ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  useQuery,
  gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LOGIN_USER, ADD_USER, ADD_POST } from './utils/mutations';
import Addpost from './pages/Addpost';
import Bank from './pages/Bank';
import Home from './pages/Home';
import Login from './pages/Login.jsx';
import Profile from './pages/Profile'
import Header from './components/Header';
import Footer from './components/Footer';
console.log('here2')
// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  uri: '/graphql',
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // const { loading, error, data } = useQuery(LOGIN_USER)
//   console.log(loading)
  //  console.log(error)
//   console.log(data)

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
            <div className="container">
              {/* {loading ? <p>Loading...</p> : <p>{data}</p>} */}
              <p>earthtojava</p>
                <Routes>
                  <Route 
                    path="/" 
                    element={<Home />} 
                  />
                  <Route
                    path='/login'
                    element={<Login />}
                  />
                  <Route
                    path='/bank'
                    element={<Bank />}
                  />
                  <Route
                    path='/profile'
                    element={<Profile />}
                  />
                  <Route
                    path='/Post'
                    element={<Addpost />}
                  />
                </Routes>
            </div>
          <Footer />
        </div> 
      </Router>
    </ApolloProvider>
  );
}

export default App;