import React from 'react'
import './hotel.css';
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Hotel = () => {
  const photos = [
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
		{
			src: "https://images.pexels.com/photos/5461590/pexels-photo-5461590.jpeg?auto=compress&cs=tinysrgb&w=600",
		},
  ];
  return (
		<div>
			<Navbar />
			<Header type="list" />
			<div className="hotelContainer">
				<div className="hotelWrapper">
					<h1 className="hotelTitle">Hotel Peace&Joy</h1>
					<div className="hotelAddress">
						<FontAwesomeIcon icon={faLocationDot} />
						<span>Elton St 125 New york</span>
					</div>
					<span className="hotelDistance">
						Excellent location – 500m from center
					</span>
					<span className="hotelPriceHighlight">
						Book a stay over $114 at this property and get a free
						airport taxi
					</span>
          <div className="hotelImages">  
    {photos.maps(photo => ( 
      <div className="hotelImgWrapper">
      <img src={photo.src} alt="" className="hotelImg" />
      </div>
    ))}
          </div>
				</div>
			</div>
		</div>
  );
}

export default Hotel