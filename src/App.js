import React from 'react'
import './App.css'
import SearchBooks from './SearchBooks'
import BookList from './BookList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {

  	render() {
    	return (
      	<div className="app">
        	<Route path="/search" component={SearchBooks} />
        	<Route exact path="/" component={BookList} />
      	</div>
    	)
  	}
}

export default BooksApp
