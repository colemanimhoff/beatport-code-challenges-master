import React, { useEffect, useState } from 'react';
import { Slider } from './components/Slider';
import { Tile, Tiles } from './components/Tiles';
import fixtures from './fixtures.json';
import './app.scss';

const inGroupsOf = (images, num) => {
    return images.reduce((result, image, index, array) => {
        if (index % num === 0) {
            result.push([image, array[index + 1]]);
        }
        return result;
    }, []);
};

const App = () => {
    const [images, setImages] = useState([]);
    const [groupedImages, setGroupedImages] = useState([]);

    useEffect(() => {
        setImages(fixtures);
        setGroupedImages(inGroupsOf(fixtures, 2));
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
