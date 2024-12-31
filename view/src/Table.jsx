import React from 'react';
import DataTable from './DataTable';

const Table = () => {
    const data = [
        { id: 1, name: "John Doe", age: 28 },
        { id: 2, name: "Jane Smith", age: 34 },
        { id: 3, name: "Sam Green", age: 23 },
        { id: 4, name: "Emily Brown", age: 45 },
        { id: 5, name: "Michael White", age: 19 },
        { id: 6, name: "Sarah Black", age: 31 },
        { id: 7, name: "Paul Gray", age: 29 },
        { id: 8, name: "Anna Blue", age: 27 },
        { id: 9, name: "Tom Yellow", age: 33 },
        { id: 10, name: "Chris Red", age: 25 },
        { id: 11, name: "Jack Purple", age: 40 },
        { id: 12, name: "Mia Orange", age: 21 },
    ];
    
    return <DataTable data={data} all={data.length}/>;
};

export {Table};
