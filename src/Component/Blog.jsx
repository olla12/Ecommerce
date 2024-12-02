import React ,{Component} from "react";
import axios from "axios";
import "./Blog.css"
class Blog extends Component{
state={albums:[]};
componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/albums").then((res)=>this.setState({albums:res.data}));
}
render(){
    return(
    <div >
        <h1> Albums Api Blog</h1>
    
    <div className="data">
       {this.state.albums.map((item)=>(
        <div key="{item.id}">
            <p>userId:{item.userId}</p>
            <span>Title:{item.title}</span>
            <div>---------------------------------------------------</div>
        </div>
       ))}
    </div>
    </div>
    )
}
}
export default Blog;
