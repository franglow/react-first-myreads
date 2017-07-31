import React, {Component} from 'react'

class WantToReadBooks extends Component {
    handleChange(e,book) {
        const bookModified = this.props.books.filter((bookHisory) => ((bookHisory.id === book.id)))
        {bookModified[0].shelf = e}
        const booksUnmodified = this.props.books.filter((bookHisory) => ((bookHisory.id !== book.id)))
        if (this.props.onChangeShelf) 
            this.props.onChangeShelf(e,book,booksUnmodified.concat([ bookModified[0] ]))
    }
	render() {
		return(
			<ol className="books-grid">
			{(this.props.books.filter((book) => ((book.shelf === 'wantToRead')))).map( book => 
			<li key={book.id}>
        		<div className="book">
        			<div className="book-top">
                        <div 
                        	className="book-cover" 
                            style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
                        </div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} 
                                onChange={event => this.handleChange(event.target.value, book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
            )}
            </ol>
		)
	}
}
export default WantToReadBooks