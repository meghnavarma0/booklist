import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
	const { dispatch } = useContext(BookContext);
	const [book, setBook] = useState('');
	const [author, setAuthor] = useState('');
	const onSubmitHandler = e => {
		e.preventDefault();
		dispatch({
			type: 'ADD_BOOK',
			book: {
				title: book,
				author
			}
		});
		setBook('');
		setAuthor('');
	};
	return (
		<form onSubmit={onSubmitHandler}>
			<input
				type='text'
				placeholder='book name'
				value={book}
				required
				onChange={e => setBook(e.target.value)}
			/>
			<input
				type='text'
				placeholder='author'
				value={author}
				required
				onChange={e => setAuthor(e.target.value)}
			/>
			<input type='submit' />
		</form>
	);
};

export default BookForm;
