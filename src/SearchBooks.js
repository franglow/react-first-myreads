import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  	state = {
    	/**
     	* TODO: Instead of using this state variable to keep track of which page
     	* we're on, use the URL in the browser's address bar. This will ensure that
     	* users can use the browser's back and forward buttons to navigate between
     	* pages, as well as provide a good URL they can bookmark and share.
    	 */
    	showSearchPage: false,
    	books: [],
    	query : ''
  	}

    updateQuery = (query) => {
    	this.setState({ query : query.trim() })
        if (this.state.query) {
        	BooksAPI.search(this.state.query, 20).then((books) => {
            console.log(this.state.query)
            this.setState({books: books})
            console.log(books)
        })
        }
    }

    clearQuery = () => {
		this.setState({ query : ''})
	}

	updateShelf(shelf,book,newList) {
    	BooksAPI.update(book,shelf).then(book => {
        	this.setState({ books : newList })
    	})
  	}

	render() {
		const { query } = this.state.query

		return(
			<div className="search-books">
		        <div className="search-books-bar">
		          	<Link 
		          		className="close-search" 
		          		to="/">Close
		          	</Link>
		          	<div className="search-books-input-wrapper">
		            	<input 
		            		type="text" 
		            		placeholder="Search by title or author"
		            		value={query} 
							onChange={ (event) => this.updateQuery(event.target.value) }
						/>
		          	</div>
		        </div>
		        			{JSON.stringify(this.state.query)}
		        <div className="search-books-results">
		          	<SearchResults 
                      books={this.state.books} 
                      onChangeShelf={(shelf,book,newList) => {
                        this.updateShelf(shelf,book,newList)
                        }}
                    />
		        </div>
          </div>
		)
	}
}

export default SearchBooks