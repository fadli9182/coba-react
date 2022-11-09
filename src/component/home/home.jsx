import Blogs from "../cobaApi/blogs"
import Parent from "../parentchild/parent"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "../../App"
import Navigasi from "./navigasi"
import DetailPost from "../cobaApi/detailPost"
import { Component} from "react"
import MyProviderHOC from "../context/context"

class Home extends Component {

    state = {
        power: 1,
    }
        render(){
            return (
                    <BrowserRouter>
                        <header>
                            <Navigasi />
                        </header>
                        <Routes>
                            <Route path="/" element={<App />} />
                            <Route path="/blog" element={<Blogs />} />
                            <Route path="/card" element={<Parent />} />
                            <Route path="/blog/post/:id" element={<DetailPost />} />
                        </Routes>
                    </BrowserRouter>
            )
        }
    }


export default MyProviderHOC(Home)
