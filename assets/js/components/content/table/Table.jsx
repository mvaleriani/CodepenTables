import React from 'react';
import Cell from './Cell';

class Table extends React.Component {
    constructor(){
        super();
        let a = new Cell('00')

        this.state = {
            'cells': [a]
        }
    }

    componentDidMount(){

    }
    
    render() {
       
        return (
            <table>
                <div className="cell">"pls"</div>
                <div className="cell">"work"</div>
            </table>
        );
    }
}

export default Table;