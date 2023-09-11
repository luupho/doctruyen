import React from "react";
// import './MyComponent.scss';

class MyComponent extends React.Component {

    render() {
        let story = this.props.story;
        console.log('check story from MyComponent', story)
        return (
            <div className="card">
                <div className="card-container">
                    <div className="img-story">
                        <div className="view-cmt-like">
                            <div className="icon"><i className="fas fa-eye"></i><div className="text-icon">{story.reads}</div></div>
                            <div className="icon"><i className="fas fa-comment"></i><div className="text-icon">{story.comment}</div></div>
                            <div className="icon"><i className="fas fa-heart"></i><div className="text-icon">{story.like}</div></div>
                        </div>
                    </div>
                    <div className="tilte-chapter">
                        <div className="title">{story.title}</div>
                        <div className="chapter">
                            <div className="chapter-content">
                                <div className="number-chapter">Chapter {story.chapterNumber}</div>
                                <div className="time">1 phút trước</div>
                            </div>
                            <div className="chapter-content">
                                <div className="number-chapter">Chapter {story.chapterNumber - 1}</div>
                                <div className="time">10 phút trước</div>
                            </div>
                            <div className="chapter-content">
                                <div className="number-chapter">Chapter {story.chapterNumber - 2}</div>
                                <div className="time">30 phút trước</div>
                            </div>
                        </div>
                        <h3><i className="fas fa-heart"></i></h3>
                    </div>
                </div>
            </div>
        )
    }

}

export default MyComponent;