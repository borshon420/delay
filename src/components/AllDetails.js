import React from 'react';

const AllDetails = ({product}) => {
    const {title} = product;
    return (
        <div>
            <h1>{product.length}</h1>
            <p>{title}</p>
        </div>
    );
};

export default AllDetails;