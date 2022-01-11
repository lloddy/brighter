import { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index';
import Create from '../pages/Create';

const Main = (props) => {
    const [blogs, setBlogs] = useState([

    ])
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