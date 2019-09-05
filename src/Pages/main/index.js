import React from 'react';
import './style.scss';
import hero from '../../Assets/big-photo.png';
import hero2x from '../../Assets/big-photo@2x.png';

// const fetchPageData = () => ()
// https://jsonplaceholder.typicode.com/photos?_limit=3

const MainPage = () => {
	return (
		<section className="MainPage">
			<div className="hero">
				<img
					srcset={`${hero} 1x, ${hero2x} 2x`}
					src={hero}
					alt="Hero"
				/>
			</div>

			<div className="features">
                <div className="container">
                    <div className="features__one">
                        <div className="features__one__image">
                            {/* <img src={} /> */}
                        </div>
                        <div className="features__one__heading">Feature 1</div>
                        <p className="features__one__description">asdqweasdqweasdqweasdqwe</p>
                    </div>

                    <div className="features__one">
                        {/* <img className="features__one__image" src={} /> */}
                        <div className="features__one__heading">Feature 2</div>
                        <p className="features__one__description">asdqweasdqweasdqweasdqwe</p>
                    </div>

                    <div className="features__one">
                        {/* <img className="features__one__image" src={} /> */}
                        <div className="features__one__heading">Feature 3</div>
                        <p className="features__one__description">asdqweasdqweasdqweasdqwe</p>
                    </div>
                </div>
            </div>
		</section>
	);
};

export default MainPage;
