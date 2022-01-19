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
                        <h1>Title: {blog.title}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default Index