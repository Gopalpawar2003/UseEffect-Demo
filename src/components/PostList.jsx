// fetch and display list of posts from given API
// https://jsonplaceholder.typicode.com/posts.
import { useEffect, useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {

            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                if (!response.ok) {
                    throw new Error('something went wrong' + response.status);
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error(error.message);
            }
        };
        fetchPosts();
    }, []);

return (
    <>
        <h2 className="heading">Posts</h2>  
        <div className="container">
            {posts.filter(post => post.userId === 1).map((post) => {
                return (
                    <div id={post.id} className="card">
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    </>
);
}
export default PostList;