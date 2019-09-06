import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const apiResponse = {
	text:
		'Hello[1], I am a mock[2] response because real API[3] does NOT respond.',
	notes: {
		1: 'Bonjour',
		2: 'Not actual, made up',
		3: 'Application Programming Interface. Meant a web service here.',
	},
};



const Products = () => {
	const [{ notes, splittedText }, setData] = useState();

	const [activeNote, setActiveNote] = useState();

	useEffect(() => {
		fetchPageData().then(data => {
			const viewData = prepareData(data);
			setData(viewData);
		});
	}, [text]);

	return (
		<section className="Products">
			<div>Hello!</div>

			<div className="Note">
				{/* <div>{data.text[i]}</div>
				<div className="foot-note" onClick={() => setActiveNote(i)}>
					<div className="pop-over">{data.footNotes[i]}</div>
				</div> */}
			</div>
		</section>
	);
};

export default Products;
