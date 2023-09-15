import React from "react";
import './Crud.scss';
import data from '../../../data/stories.json';

class Crud extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            stories: data,
        }
        
    }

    handleDeleteStory = (story) => {
        let copyStories = [...this.state.stories].filter(item => item.id !== story.id);
        // ghi vào file
        
        this.setState({
            stories: copyStories
        })
    }

    render() {
        let {stories} = this.state;
        return (
            <div>
                <table id="customers">
                    <tbody>
                        <tr>
                            <th>Title</th>
                            <th>Chapter number</th>
                            <th>Reads</th>
                            <th>Comment</th>
                            <th>Like</th>
                            <th>Action</th>
                        </tr>
                        
                        {stories && stories.map((item, index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.title}</td> 
                                    <td>{item.chapterNumber}</td>
                                    <td>{item.reads}</td>
                                    <td>{item.comment}</td>
                                    <td>{item.like}</td>
                                    <td>
                                        <button className='btn-edit' onClick={() => this.handleEditStory(item)}>
                                            <i className='fas fa-pencil-alt'></i>
                                        </button>
                                        <button className='btn-delete' onClick={() => this.handleDeleteStory(item)}>
                                            <i className='fas fa-trash'></i>
                                        </button>
                                    </td>
                                </tr>  
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Crud;