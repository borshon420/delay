import React from 'react';
import { Link } from 'react-router-dom';

const AllDetails = ({product}) => {
    const {title, url, created_at, author} = product;
    return (
        <div style={{border: '2px solid red', margin: '20px', borderRadius: '20px', padding:'20px'}}>
            <h1>{product.length}</h1>
            <h2>Title: {title}</h2>
            <p>Url: {url}</p>
            <p>Created at: {created_at}</p>
            <p>Author: {author}</p>
            {/* <button><a href={`https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0`}>Show all raw json data</a></button> */}
        </div>
    );
};

export default AllDetails;