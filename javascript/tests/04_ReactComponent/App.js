import React, { useEffect, useState } from 'react';
import { Slider, SliderTile, SliderTiles } from './components/Slider';
import { mockApi } from './helpers/mockApi';
import './app.scss';

const App = () => {
    const [images, setImages] = useState([]);
    const [groupedByTwo, setGroupedByTwo] = useState([]);
    const [groupedByFour, setGroupedByFour] = useState([]);
    const [groupedBySix, setGroupedBySix] = useState([]);

    useEffect(() => {
        setImages(mockApi.all);
        setGroupedByTwo(mockApi.inGroupsOfTwo);
        setGroupedByFour(mockApi.inGroupsOfFour);
        setGroupedBySix(mockApi.inGroupsOfSix);
    }, []);

    return (
        <>
            <Slider title="IN GROUPS OF 1" withHeaderButtons={false}>
                {images.map(image => <SliderTile key={image.title} image={image}/>)}
            </Slider>
            <Slider title="IN GROUPS OF 2" type="grid" withAutoIncrement={false}>
                {groupedByTwo.map((group, index) => {
                    return <SliderTiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>

            <Slider interval={5} title="IN GROUPS OF 4" type="grid">
                {groupedByFour.map((group, index) => {
                    return <SliderTiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>
            <Slider title="IN GROUPS OF 6" type="grid" withAutoIncrement={false} withHeaderButtons={false}>
                {groupedBySix.map((group, index) => {
                    return <SliderTiles key={`group-${index}`} images={group}/>;
                })}
            </Slider>
            <Slider interval={3} type="small">
                <p className="tile">CREATED BY</p>
                <p className="tile">COLEMAN IMHOFF</p>
                <i className="fas fa-headphones tile" />
            </Slider>
        </>

    );
};

export default App;
