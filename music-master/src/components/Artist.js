import React  from 'react';
import '../css/artistCss.css';
const Artist = ({artist})=>{
    if (!artist) return null;
    return(
        <div>
            <h3>{artist.name}</h3>
            <p>{artist.followers.total}</p>
            <p>{artist.genres.join(',')}</p>
            <img
                className="artist-profile-img"
                src={artist.images[0] && artist.images[0].url}
                alt='artist-profile'
            />
        </div>
    );
}

export default Artist;
