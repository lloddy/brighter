import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Create = (props) => {
    const navigate = useNavigate();
    const [ newForm, setNewForm ] = useState({
        title: "",
        desc: "",
    })

    const handleChange = (event) => {
        setNewForm(prevState => ({...prevState,
        [event.target.name]: event.target.value }))
    };

    const handleSubmit = (event) => {
        event. preventDefault();
        props.createBlog(newForm);
        setNewForm({
            title: "",
            desc: "",
        })
        navigate.push("/");
    };

    return (
        <div>
            <h1>Create</h1>
            <section>
                <form onSubmit={handleSubmit} >
                    <div className="newForm">
                        <input 
                            type="text" 
                            value={newForm.title}
                            name="title"
                            placeholder='Title'
                            onChange={handleChange}
                        />
                        <input 
                            type="textarea" 
                            value={newForm.desc}
                            name="desc"
                            placeholder='desc'
                            onChange={handleChange}
                        />
                        <input type="submit" value="Post" className="submit" />
                    </div>
                </form>
            </section>
        </div>
    )
}

export default Create