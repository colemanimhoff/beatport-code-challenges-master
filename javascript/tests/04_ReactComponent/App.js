import React, { useEffect, useState } from 'react';
import { Slider } from './components/Slider';
import { Tile, Tiles } from './components/Tiles';
import { mockApi } from './helpers/mockApi';
import './app.scss';

const App = () => {
    const [images, setImages] = useState([]);
    const [groupedByTwo, setGroupedByTwo] = useState([]);
    const [groupedByFour, setGroupedByFour] = useState([]);

    useEffect(() => {
        setImages(mockApi.all);
        setGroupedByTwo(mockApi.inGroupsOfTwo);
        setGroupedByFour(mockApi.inGroupsOfFour);
    }, []);

    return (
        <>
            <Slider title="IN GROUPS OF 1">
                {images.map(image => <Tile key={image.title} image={image}/>)}
            </Slider>
            <Slider interval={5} title="IN GROUPS OF 2">
                {groupedByTwo.map((group, index) => {
                    return <Tiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>

            <Slider interval={3} title="IN GROUPS OF 4">
                {groupedByFour.map((group, index) => {
                    return <Tiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>
            <Slider interval={3}>
                <p>CREATED BY</p>
                <p>COLEMAN IMHOFF</p>
                <i className="fas fa-headphones" />
            </Slider>
        </>

    );
};

export default App;
