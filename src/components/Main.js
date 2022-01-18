import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index';
import Create from '../pages/Create';
import axios from 'axios'
import React from 'react';
import firebase from '../firebase'
import { QuerySnapshot } from 'firebase/firestore';

const Main = (props) => {
    const [blogs, setBlogs] = useState({});
    const [loading, setLoading] = useState(false);

    const ref = firebase.firestore().collection("blogs")

    function getBlogs() {
        setLoading(true);
        ref.onSnapshot((QuerySnapshot) => {
            const items = [];
            QuerySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setBlogs(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getBlogs();
    }, []);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>Blogs</h1>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.desc}</p>
                </div>

            ))}
        </div>
    )
}

export default Main;