import React from 'react';

export const Tile = ({ image }) => {
    const { url, title } = image;
    return <img alt={title} src={url} title={title}/>;
};
