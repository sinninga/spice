import React, {Component} from 'react';

class Item extends Component {
    render() {
        return (
            <div>
                <a href={this.props.rest.url} className="card-link">
                    <div class="card-container">
                        <div className="card">
                            <img src={this.props.rest.image_url} alt="" className="restaurant-image"/>
                            <div className="restaurant-content">
                                <h1>{this.props.rest.name}</h1>
                                <h2>{console.log(this.props.rest.location)}</h2>
                            </div>
                        </div>
                    </div>
                 </a>
            </div>
        );
    }
}

export default Item;