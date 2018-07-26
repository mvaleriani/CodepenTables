import React from 'react';

import Tabs from './Tabs';
import Filters from './Filters';
import Table from './table/Table';

class Content extends React.Component {
    render() {
        return (
            <main>
                <Tabs></Tabs>
                <Filters></Filters>
                <Table></Table>
            </main>
        );
    }
}

export default Content;