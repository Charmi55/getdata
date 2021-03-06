import React, { Component } from 'react';
import Axios from 'axios'

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state={
        post:[]
    }
   componentDidMount(){
    const post = Axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response =>{
        const post = response.data.slice(0,3);
        const updatedPost = post.map(post=>{
            return {
                ...post,
                author:"Charmi"
            }
        })
        this.setState({post: updatedPost})
        // console.log(response)
    })
   }
    render () {
        const post = this.state.post.map(post=>{
            return <Post key={post.id} title={post.title} author="Chrami"/>
        })
        return (
            <div>
                <section className="Posts">
                   {post}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;