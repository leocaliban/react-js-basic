import React from 'react';

const Title = ({label}) => {
    return (
        <h1
            style={{ backgroundColor: '#222', color: '#ccc', fontSize: 26, fontWeight: 'bold', padding: 10, margin: 0 }}
        >
            {label}
        </h1>
    );
}

export default Title;