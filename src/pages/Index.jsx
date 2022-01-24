import { useEffect, useState } from 'react';
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Index = (props) => {

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
                        <h2>Title: {blog.title}</h2>
                        <p>{blog.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Index