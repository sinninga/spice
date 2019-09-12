import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <div class="card-container">
                    <a href={this.props.rest.url} className="card-link">
                        <div className="card">
                            <img src={this.props.rest.image_url} alt="" className="restaurant-image"/>
                            <div className="restaurant-content">
                                <h1>{this.props.rest.name}</h1>
                                <h2>{console.log(this.props.rest.location)}</h2>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Item;