import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class BookShelf extends Component {

  state = {
    showSearchPage: false,
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then( (books) => {
      this.setState({ books: books }) 
    })
  }

  updateShelf(shelf,book,newList) {
    BooksAPI.update(book,shelf).then(book => {
        this.setState({ books : newList })
    })
  }
	render() {
		return (
              <div>
                <div className="bookshelf">
                  	<h2 className="bookshelf-title">Currently Reading</h2>
                  	<div className="bookshelf-books">
						          <ol className="books-grid">
						          {(this.state.books.filter((book) => ((book.shelf === 'currentlyReading')))).map( book => 
							            <li key={book.id}>
                				    <Book 
                					    book={book}
                      				onChangeShelf={(shelf,book,newList) => {
	                        			this.updateShelf(shelf,book,newList)
                        			}}
                				    />
            				      </li>
            			    )}
            		      </ol>
                    </div>
                </div>
                <div className="bookshelf">
                	<h2 className="bookshelf-title">Want to Read</h2>
                	<div className="bookshelf-books">
						        <ol className="books-grid">
						        {(this.state.books.filter((book) => ((book.shelf === 'wantToRead')))).map( book => 
							         <li key={book.id}>
								        <Book 
                					book={book}
                      				onChangeShelf={(shelf,book,newList) => {
                        				this.updateShelf(shelf,book,newList)
                        			}}
                				/>
            				    </li>
            			  )}
            			  </ol>
                  </div>
                </div>
                <div className="bookshelf">
                	<h2 className="bookshelf-title">Read</h2>
                  	<div className="bookshelf-books">
						        <ol className="books-grid">
						        {(this.state.books.filter((book) => ((book.shelf === 'read')))).map( book => 
            				  <li key={book.id}>
            					 <Book 
                					book={book}
                      		onChangeShelf={(shelf,book,newList) => {
                        				this.updateShelf(shelf,book,newList)
                        			}}
                			 />
            				  </li>
            			  )}
            			  </ol>
                    </div>
                </div>
              </div>
		)
	}
}
export default BookShelf