import React from 'react';
import DataTable from './DataTable';
import { response } from './data';

const Table = () => {
    const data = response;
    return <DataTable data={data} all={data.length}/>;
};

export {Table};
