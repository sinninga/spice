import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <p>{this.props.rest.name}</p>
            </div>
        );
    }
}

export default Item;