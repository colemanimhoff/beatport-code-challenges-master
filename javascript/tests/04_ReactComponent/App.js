import React, { useEffect, useState } from 'react';
import { Slider } from './components/Slider';
import { Tile, Tiles } from './components/Tiles';
import { mockApi } from './helpers/mockApi';
import './app.scss';

const App = () => {
    const [images, setImages] = useState([]);
    const [groupedImages, setGroupedImages] = useState([]);

    useEffect(() => {
        setImages(mockApi.all);
        setGroupedImages(mockApi.inGroupsOfTwo);
    }, []);

    return (
        <>
            <Slider>
                {images.map(image => <Tile key={image.title} image={image}/>)}
            </Slider>
            <Slider interval={3}>
                {groupedImages.map((group, index) => {
                    return <Tiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>
            <Slider interval={2}>
                <p>Created By</p>
                <p>Coleman Imhoff</p>
            </Slider>
        </>
    );
};

export default App;