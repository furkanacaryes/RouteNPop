import React, { useState, useEffect } from 'react';
// import fetch from 'isomorphic-unfetch';
import './style.scss';
import Note from '../../Components/Note';

const apiResponse = {
	text:
		'Hello[1], I am a mock[2] response because real API[3] does NOT respond.',
	notes: {
		1: 'Bonjour',
		2: 'Not actual, made up',
		3: 'Application Programming Interface. Meant a web service here.',
	},
};

const FOOTNOTE_REGEXP = new RegExp(/\[[0-9]\]/g);

const fetchNote = () =>
	// fetch('https://hastebin.com/wewumotepi.json').then(res => res.json());
	Promise.resolve(apiResponse);

const alignNoteIndexes = (text, notes) =>
	text.match(FOOTNOTE_REGEXP).map(placeholder => {
		const noteIndex = placeholder[1]; // '[', 'here', ']'
		return notes[noteIndex];
	});

const prepareNote = ({ text, notes }) => ({
	splittedText: text.split(FOOTNOTE_REGEXP),
	notes: alignNoteIndexes(text, notes),
});

const Products = () => {
	const [note, setNote] = useState({});

	const getInitialProps = () =>
		fetchNote().then(raw => setNote(prepareNote(raw)));

	useEffect(() => {
		getInitialProps();
	}, [note.splittedText]);

	return (
		<section className="Products flex-center">
			<Note {...note} />
		</section>
	);
};

export default Products;
