import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <img src={this.props.rest.image_url} alt="" className="restaurant-image"/>
                    <div className="restaurant-content">
                        <h1>{this.props.rest.name}</h1>
                        <h3>{this.props.rest.phone}</h3>
                        <h3>{this.props.rest.price}</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;