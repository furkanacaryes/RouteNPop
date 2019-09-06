import React, { useState, useEffect, useRef } from 'react';
// import fetch from 'isomorphic-unfetch';
import './style.scss';

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

const fetchPageData = () =>
	// fetch('https://hastebin.com/wewumotepi.json').then(res => res.json());
	Promise.resolve(apiResponse);

const alignNoteIndexes = (text, notes) =>
	text.match(FOOTNOTE_REGEXP).map(placeholder => {
		const noteIndex = placeholder[1]; // '[', 'here', ']'
		return notes[noteIndex];
	});

const prepareData = ({ text, notes }) => ({
	splittedText: text.split(FOOTNOTE_REGEXP),
	notes: alignNoteIndexes(text, notes),
});

const Products = () => {
	const [{ notes, splittedText }, setData] = useState({});

	const [activeNote, setActiveNote] = useState();

	const footNoteRef = useRef();

	const getStatefulClass = noteIndex =>
		activeNote === noteIndex ? 'active' : '';

	const getInitialProps = () =>
		fetchPageData().then(data => setData(prepareData(data)));

	const outsideClickListener = [
		'click',
		({ target }) => {
			if (target !== footNoteRef.current) {
				setActiveNote(null);
			}
		},
	];

	useEffect(() => {
		getInitialProps();

		document.addEventListener(...outsideClickListener);

		return () => document.removeEventListener(...outsideClickListener);
	}, [splittedText, outsideClickListener]);

	return (
		<section className="Products">
			<div className="Note shadow-radius-box">
				{splittedText &&
					splittedText.map((partialText, i) => (
						<div key={i} className="partial-text">
							{partialText}
							<div
								className="foot-note"
								ref={footNoteRef}
								onClick={() => setActiveNote(i)}
							>
								<div
									className={`pop-over shadow-radius-box ${getStatefulClass(
										i,
									)}`}
								>
									{notes[i]}
								</div>
							</div>
						</div>
					))}
			</div>
		</section>
	);
};

export default Products;
