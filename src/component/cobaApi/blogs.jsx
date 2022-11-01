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
            body: ""
        },
        singlepost: {
            userId: null,
            id: null,
            title: "",
            body: ""
        },
        isSelected:0
    }



    getData = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((response) => {
            this.setState({
                posts: response.data
            }, () => console.log(response.status))
        })
    }

    // componentDidmount = () => {
    //     this.getData()
    // }

    componentDidMount = () => {
        axios.get('http://localhost:3004/posts')
            .then((response) => {
                this.setState({
                    posts: response.data
                })
            })
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
        await axios.delete(`http://localhost:3004/posts/`+id)
        this.getData()
        // .then((response) => {
        //     // console.log(response.data);
        // })
    }

    handleChange = (e) => {
        // console.log(e.target.value)
        let newdatapost = { ...this.state.dataPost }
        newdatapost[e.target.id] = e.target.value
        let timestamp = Math.floor(new Date().getTime() / 10000);
        newdatapost["id"] = timestamp;

        this.setState({
        dataPost: newdatapost
        }, console.log(newdatapost))
        this.getData()
    }

    handleSubmit = () => {
        // if (this.state.dataPost !== "") {
           return axios.post('http://localhost:3004/posts', this.state.dataPost)
                .then(function (response) {
                    console.log(response);
                })
            
            // .catch(function (error) {
            //     console.log(error);
            // })
        }
    handleEdit = async (id) => {
     await axios.get(`http://localhost:3004/posts/`+id)
     .then((res)=>{
        this.setState({
            singlepost: res.data,
            isSelected:1
        }, console.log(this.state.singlepost))
        document.getElementById('title').value = this.state.singlepost.title
        document.getElementById('body').value = this.state.singlepost.body
     })   
    }

    render() {
        return (
            <div className='container mt-5'>
                <div className="card p-3">
                    <h1 className='text-center text-primary my-3' style={{ fontWeight: 'bold' }}>Agus Blogs</h1>
                    <form >
                    <div className='form-floating'>
                        <input type="text" placeholder='Title' className='form-control mb-3' id='title' onChange={this.handleChange} />
                        <label htmlFor="title" className='text-primary fw-bold'>Judul</label>
                    </div>
                    <div className='form-floating'>
                        <textarea onChange={this.handleChange} name="desc" id="body" placeholder='Description' className='form-control mb-3' style={{ height: '150px' }} />
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