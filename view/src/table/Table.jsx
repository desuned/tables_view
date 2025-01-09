import React from 'react';
import OrganizationsTable from './OrganizationsTable';
import { response } from './data';

const Table = () => {
    const data = response;
    return <OrganizationsTable data={data} all={data.length}/>;
};

export {Table};
