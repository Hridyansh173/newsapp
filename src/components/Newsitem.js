import React, { Component } from 'react';

class Newsitem extends Component {
  render() {
   let  {title,description,imageUrl,newsUrl,author ,date} = this.props;
    return (
      <div>
        <div className="card" >
        <img src={!imageUrl?"https://2793236.fs1.hubspotusercontent-na1.net/hub/2793236/hubfs/Stock-images-118.png?width=1600&name=Stock-images-118.png" :imageUrl} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer"  href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem;