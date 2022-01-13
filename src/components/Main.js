import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index';
import Create from '../pages/Create';

const Main = (props) => {
    const [blogs, setBlogs] = useState([]);

    const URL ='http://localhost:3001/blogs/'

    const getBlogs = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBlogs(data);
    };

    const createBlog = async (blog) => {
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(blog)
        });
        getBlogs();
    };

    const updateBlog = async (blog, id) => {
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify(blog),
        });
        getBlogs();
    };

    const deleteBlog = async id => {
        await fetch(URL + id, { method: "DELETE" });
        getBlogs();
    };

    useEffect(() => getBlogs(), []);

    return (
        <div className="home">
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="create" element={<Create />} />
            </Routes>
        </div>
    )
}

export default Main;