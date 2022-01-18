const Index = (props) => {
    return (
        props.blogs.map((blog) => (
            <div key={blog._id}>
                <h1 className="blogTitle">
                    {blog.title}
                </h1>

            </div>
        ))
    )
}

export default Index