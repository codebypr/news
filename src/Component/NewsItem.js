import React, { Component } from 'react'
import './App.css';

export class NewsItem extends Component {
  
  render() {
    let {title,desc,imgUrl,url,date,sourc}=this.props;
   
    return (
      <div className='col-lg-4 col-md-6 my-3 d-flex justify-content-center '>
        <div className="card box shadow border" style={{borderRadius: "0px"}}>
  <img src={imgUrl?imgUrl:"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"} className="card-img-top" />
  <div className="card-body">
  <span className="position-absolute top-0 start-50 text-white translate-middle px-2 bg-primary border border-light ">{sourc}</span>
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}... </p>
    <p className='card-text text-muted'>By {new Date(date).toDateString()}</p>
    <a href={url} target="_blank" className="btn btn-primary btn-sm">Read more</a>
  </div>
</div>
      </div>
    )
  }
}

export default NewsItem