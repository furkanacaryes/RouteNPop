import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import './style.scss';
import hero from '../../Assets/big-photo.png';
import hero2x from '../../Assets/big-photo@2x.png';

const headings = ['Features', 'Architecture', 'Insights'];

const description = `
    Ea perspiciatis accusantium nobis pariatur.
    Assumenda enim nisi qui enim.
    Veniam aut sit hic soluta non debitis et officiis.
    Omnis et maiores a id placeat veniam odit molestias.
    Consequatur voluptas ipsa dolores dolorem et ullam qui saepe.
    Omnis non quibusdam veniam autem sint.
`;

const fetchPageData = async () =>
	await fetch('https://jsonplaceholder.typicode.com/photos?_limit=3')
		.then(res => res.json())
		.then(data => data.map(({ thumbnailUrl }) => thumbnailUrl));

const MainPage = () => {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetchPageData().then(setImages);
	}, [images]);

	return (
		<section className="MainPage">
			<div className="hero">
				<img
					srcSet={`${hero} 1x, ${hero2x} 2x`}
					src={hero}
					alt="Hero"
				/>
			</div>

			<div className="features">
				<div className="container">
					{images.map((img, i) => (
						<div className="features__one" key={i}>
							<div className="features__one__image">
								<img src={img} alt={headings[i]} />
							</div>
							<div className="features__one__heading">
								{headings[i]}
							</div>
							<p className="features__one__description">
								{description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default MainPage;
