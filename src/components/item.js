import React, {Component} from 'react';

class Item extends Component {
    
    render() {
        console.log(this.props.rest.location.city);
        return (
            <div className="item">
                <div className="card-container">
                    <a href={this.props.rest.url} target="blank" className="card-link">
                        <div className="card" data-aos="zoom-in">
                            <img src={this.props.rest.image_url} alt="" className="restaurant-image"/>
                            <div className="restaurant-content">
                                <div className="restaurant-title">
                                    <h1>{this.props.rest.name}</h1>
                                </div>
                                <div className="restaurant-description">
                                    <div className="restaurant-address-container">
                                        <h2 className="restaurant-address">{this.props.rest.location.display_address[0]}</h2>
                                        <h2 className="restaurant-address-2">{this.props.rest.location.display_address[1]}</h2>
                                        {/* <h2 className="restaurant-address-2">{this.props.rest.location.display_address[2]}</h2> */}
                                    </div>
                                    <h3 className="restaurant-phone">
                                        Phone: {this.props.rest.display_phone}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default Item;