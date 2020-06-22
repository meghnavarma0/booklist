import React, { createContext, useState } from 'react';
import { v1 as random } from 'uuid';

export const BookContext = createContext();

const BookContextProvider = props => {
	const [books, setBooks] = useState([
		{
			title: 'Straight From The Heart: An Autobiography',
			author: 'Kapil Dev',
			id: random()
		},
		{ title: 'The Audacity Of Hope', author: 'Barack Obama', id: random() }
	]);
	const addBook = (title, author) => {
		setBooks([...books, { title, author, id: random() }]);
	};
	const removeBook = id => {
		setBooks(books.filter(book => book.id !== id));
	};
	return (
		<BookContext.Provider value={{ books, addBook, removeBook }}>
			{props.children}
		</BookContext.Provider>
	);
};

export default BookContextProvider;
