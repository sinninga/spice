import React, {Component} from 'react';

class Item extends Component {
    render() {
        let places = this.props.rest.location;
        console.log(places);
        

        return (
            <div>
                <div className="card-container">
                    <a href={this.props.rest.url} className="card-link">
                        <div className="card" data-aos="fade-left">
                            <img src={this.props.rest.image_url} alt="" className="restaurant-image"/>
                            <div className="restaurant-content">
                                <div className="restaurant-title">
                                    <h1>{this.props.rest.name}</h1>
                                </div>
                                <div className="restaurant-description">
                                    <h2 className="restaurant-phone">
                                        Phone: {this.props.rest.display_phone}
                                    </h2>
                                    <h3 className="restaurant-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias commodi blanditiis magni aperiam accusamus quod quasi, laudantium modi quibusdam alias magnam. Vero sit, voluptatibus harum dolorum hic iusto ea unde!</h3>
                                    
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