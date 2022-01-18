import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index';
import Create from '../pages/Create';
import axios from 'axios'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Main = (props) => {
    const [ blogs, setBlogs ] = useState([]);
    const blogsCollectionRef = collection(db, "blogs")
    useEffect(() => {
        const getBlogs = async () => {
            const data = await getDocs(blogsCollectionRef)
            setBlogs(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        getBlogs()
    }, [])

    return (
        <div>
            {blogs.map((blog) => {
                return (
                    <div>
                        {""}
                        <h1>Title: {blog.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Main;