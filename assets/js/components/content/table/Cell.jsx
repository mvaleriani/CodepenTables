import React from 'react';

class Cell extends React.Component {
    constructor(cellVal){
        super();
        this.cellVal = cellVal;
        this.state = {
            'cellVal': cellVal
        }
        
    }

    render() {
        return (
            <td className="cell">
                {this.state.cellVal}
            </td>
        );
    }
}

export default Cell;