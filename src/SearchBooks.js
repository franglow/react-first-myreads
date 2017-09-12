import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
  	state = {
    	showSearchPage: false,
    	books: [],
    	query : ''
  	}

    updateQuery = (query) => {
    	this.setState({ query : query.trim() })
        if (query) {
        	BooksAPI.search(query, 20).then((books) => {        		
				if (this.state.books !== books) {
					this.setState({books: books})
				}
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
                      querys={this.state.query} 
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