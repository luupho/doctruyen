import React from "react";
import './HomePage.scss';
import MyComponent from './MyComponent';
import data from '../../data/stories.json';

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data,
        }
    }

    render() {
        let stories = this.state.data;
        console.log('check data: ', stories)
        return (
            <div className="container">
                {stories && stories.map((item, index) => {
                    return (
                        <MyComponent
                            story = {item}
                        />
                    )
                })}
                
            </div>
        )
    }

}

export default HomePage;