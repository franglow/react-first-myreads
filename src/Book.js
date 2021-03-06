import React, {Component} from 'react'

class Book extends Component {	
    handleChange(e,book) {
        const bookModified = this.props.books.filter((bookHisory) => ((bookHisory.id === book.id)))
        {bookModified[0].shelf = e}
        const booksUnmodified = this.props.books.filter((bookHisory) => ((bookHisory.id !== book.id)))
        if (this.props.onChangeShelf) 
            this.props.onChangeShelf(e,book,booksUnmodified.concat([ bookModified[0] ]))
    }
	render() {
		return(
                <div className="book">
                    <div className="book-top">
                        {((this.props.book.imageLinks) ? 
                                <div 
                                    className="book-cover" 
                                    style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}>
                                </div> : 
                                <div className="book-cover">No Cover</div>
                            )}
                        <div className="book-shelf-changer">
                            <select value={this.props.book.shelf} 
                                onChange={event => this.handleChange(event.target.value, this.props.book)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    <div className="book-authors">{this.props.book.authors}</div>
                </div>
		)
	}
}
export default Book