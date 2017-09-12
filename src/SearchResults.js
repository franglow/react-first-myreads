import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchResults extends Component {	
    handleChange(e,book) {
        const bookModified = this.props.books.filter((bookHisory) => ((bookHisory.id === book.id)))
        {bookModified[0].shelf = e}
        const booksUnmodified = this.props.books.filter((bookHisory) => ((bookHisory.id !== book.id)))
        if (this.props.onChangeShelf)
            this.props.onChangeShelf(e,book,booksUnmodified.concat([ bookModified[0] ]))
    }
    updateShelf(shelf,book,newList) {
        BooksAPI.update(book,shelf).then(book => {
            this.setState({ books : newList })
        })
    }
	render() {
        if (this.props.querys && this.props.books.length) {

            return(
                <ol className="books-grid">
                {(this.props.books.map( book => 
                    <li key={book.id}>
                        <Book 
                            book={book}
                            books={this.props.books}
                            onChangeShelf={(shelf,book,newList) => {
                                this.updateShelf(shelf,book,newList)
                            }}
                        />
                    </li>
                ))}
                </ol>
            )
        } else {
            return (null)
        }
	}
}
export default SearchResults