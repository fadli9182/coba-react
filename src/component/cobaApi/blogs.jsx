import { Component } from 'react'
import Post from './post'
import axios from 'axios'


class Blogs extends Component {

    state = {
        posts: [],
        dataPost: {
            userId: 1,
            id: null,
            title: "",
            body: "",
        },
        isEdit: false

        // singlepost: {
        //     userId: null,
        //     id: null,
        //     title: "",
        //     body: ""
        // },
    }

    defaultState = () => {
        this.setState ({
            dataPost: {
                userId: 1,
                id: null,
                title: "",
                body: "",
            }
        })
        document.getElementById('title').value =''
        document.getElementById('body').value =''
    }


    getData = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    posts: res.data
                }, () => console.log(res.status))
            })
    }

    componentDidMount = () => {
        this.getData()
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json =>
        //         this.setState({
        //             posts: json
        //         }, () => console.log(this.state.posts))
        //         )

    }

    handleRemove = async (id) => {
        await axios.delete(`http://localhost:3004/posts/` + id)
        this.getData()
        // .then((response) => {
        //     // console.log(response.data);
        // })
    }

    handleChange = (e) => {
        e.preventDefault()
        // console.log(e.target.value)
        let newdatapost = { ...this.state.dataPost }
        newdatapost[e.target.id] = e.target.value

        this.setState({
            dataPost: newdatapost
        }, () => console.log(this.state.dataPost))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.isEdit === true) {
            axios.put(`http://localhost:3004/posts/${this.state.dataPost.id}`, this.state.dataPost)
                .then((res) => {
                    this.getData()
                    this.setState({
                        isEdit: false
                    })
                    alert('Berhasil rubah')
                    this.defaultState()
                })
        } else {
            // let timestamp = new Date
            let timestamp = Math.floor(new Date().getTime() / 1000);
            this.setState({
                dataPost: {
                    ...this.state.dataPost,
                    id: timestamp
                }
            }, () => {
                if(this.state.dataPost.title === "") {
                    return alert('masukan judul')
                } else {
                    axios.post('http://localhost:3004/posts', this.state.dataPost)
                        .then((res) => {
                            this.getData()
                        })
                        .catch(function (err) {
                            console.log(err);
                        })
                        this.defaultState()

                }
            })

        }
    }
    // if (this.state.dataPost !== "") {
    handleEdit = (id) => {
         axios.get(`http://localhost:3004/posts/`+ id)
            .then((res) => {
                this.setState({
                    dataPost: res.data,
                    isEdit: true
                }, console.log(res.data))
                // document.getElementById('title').value = this.state.dataPost.title
                // document.getElementById('body').value = this.state.dataPost.body
            })
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className="card p-3">
                    <h1 className='text-center text-primary my-3' style={{ fontWeight: 'bold' }}>Agus Blogs</h1>
                    <form>
                        <div className='form-floating'>
                            <input type="text" placeholder='Title' className='form-control mb-3' id='title' onChange={this.handleChange} value={this.state.dataPost.title} />
                            <label htmlFor="title" className='text-primary fw-bold'>Judul</label>
                        </div>
                        <div className='form-floating'>
                            <textarea onChange={this.handleChange} value={this.state.dataPost.body} name="desc" id="body" placeholder='Description' className='form-control mb-3' style={{ height: '150px' }} />
                            <label htmlFor="desc" className='text-primary fw-bold'>Deskripsi</label>
                        </div>
                        <button className='btn btn-primary mb-3 fs-4 fw-bold w-100' onClick={this.handleSubmit}>Submit</button>
                    </form>
                </div>
                <hr />
                <section className='section--blog'>
                    <div className="row">
                        {
                            this.state.posts.map(value => {
                                return (
                                    <Post id={value.id}
                                        key={value.id}
                                        clickRemove={this.handleRemove}
                                        clickEdit={this.handleEdit}
                                        title={value.title}
                                        desc={value.body} />)
                            })
                        }
                    </div>
                </section>
            </div>
        )
    }
}



export default Blogs
