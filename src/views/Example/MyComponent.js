import React from "react";
import './MyComponent.scss';

class MyComponent extends React.Component {
  render() {
    const { avatar, reads, like, comment, title, chapterNumber } =
      this.props.story;

    return (
      <div className="card">
        <div className="card-container">
          <div
            className="img-story"
            style={{
              backgroundImage: `url("${avatar}")`,
            }}
          >
            <div className="view-cmt-like">
              <div className="icon">
                <i className="fas fa-eye"></i>
                <div className="text-icon">{reads}</div>
              </div>
              <div className="icon">
                <i className="fas fa-comment"></i>
                <div className="text-icon">{comment}</div>
              </div>
              <div className="icon">
                <i className="fas fa-heart"></i>
                <div className="text-icon">{like}</div>
              </div>
            </div>
          </div>
          <div className="tilte-chapter">
            <div className="title">{title}</div>
            <div className="chapter">
              <div className="chapter-content">
                <div className="number-chapter">Chapter {chapterNumber}</div>
                <div className="time">1 phút trước</div>
              </div>
              <div className="chapter-content">
                <div className="number-chapter">
                  Chapter {chapterNumber - 1}
                </div>
                <div className="time">10 phút trước</div>
              </div>
              <div className="chapter-content">
                <div className="number-chapter">
                  Chapter {chapterNumber - 2}
                </div>
                <div className="time">30 phút trước</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyComponent;
