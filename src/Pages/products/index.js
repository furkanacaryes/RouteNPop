import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

const fetchPageData = () =>
	fetch('https://hastebin.com/wewumotepi.json').then(res => res.json());

const Products = () => (
    // const [note, setNote] = useState('');

	<section className="Products">
		<div>Hello!</div>
	</section>
);

export default Products;
