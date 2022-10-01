import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  //useQuery,
  //gql
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { LOGIN_USER, ADD_USER, ADD_POST } from './utils/mutations';
import Addpost from './pages/Addpost';
import Bank from './pages/Bank';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Layout from './views/layout';
console.log('here2')

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
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
          {<Header />}
            <div className="container">
                <Routes>
                  <Route 
                    path="/" 
                    element={<Layout><Home /></Layout>} 
                  />
                  <Route
                    path='/home'
                    element={<Layout><Home /></Layout>}
                  />
                  <Route
                    path='/login'
                    element={<Layout><Login /></Layout>}
                  />
                  <Route
                    path='/Bank'
                    element={<Layout><Bank /></Layout>}
                  />
                  <Route
                    path='/Profile'
                    element={<Layout><Profile /></Layout>}
                  />
                  <Route
                    path='/Post'
                    element={<Layout><Addpost /></Layout>}
                  />
                </Routes>
            </div>
          {<Footer />}
        </div> 
      </Router>
    </ApolloProvider>
  );
}

export default App;