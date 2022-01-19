import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import Index from '../pages/Index';
import Create from '../pages/Create';
import axios from 'axios'
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const Main = (props) => {


    return (
        <main>
            <Routes>
                <Route path='/' element={<Index />}></Route>
            </Routes>
        </main>
    )
}

export default Main;