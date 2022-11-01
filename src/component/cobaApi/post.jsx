import React from 'react'

export default function Post(props) {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="card h-100" style={{borderRadius: '10px'}}>
                <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png" className="card-img-top" alt="foto" />
                <div className="mt-2 mx-3 d-grid gap-2 align-text-bottom">
                        <button className="btn btn-danger" onClick={()=>props.clickRemove(props.id)}>Delete</button>
                        <button className="btn btn-success" onClick={()=>props.clickEdit(props.id)}>Edit</button>
                    </div>
                <div className="card-body">
                    <h5 className="card-title text-center"
                        style={{ textTransform: 'Capitalize' }}>
                        {props.title}
                    </h5>
                    <p className="card-text ps-2">{props.desc}</p>
                </div>
            </div>
        </div>
    )
}
