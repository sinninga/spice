import React, {Component} from 'react';

class RecipeCard extends Component {
    
    render() {
        return (
            <div className="recipe">
                <div className="recipe-card-container">
                    <a href={this.props.recipe.source_url} target="blank" className="card-link">
                        <div className="recipe-card" data-aos="zoom-in">
                            <img src={this.props.recipe.image_url} alt="" className="recipe-image"/>
                            <div className="recipe-content">
                                <div className="recipe-title">
                                    <h1>{this.props.recipe.title}</h1>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }
}

export default RecipeCard;