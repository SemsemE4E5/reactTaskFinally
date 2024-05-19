import 'bootstrap/dist/css/bootstrap.min.css'; //
import React from 'react';
import './Navbar.css';

export default function Navbar() {
    
    return (
        <header className="container-fluid header" style={{ zIndex: 1000 }}>
            <nav className="row navbar navbar-expand navbar-light bg-light">
                <div className="col-1">
                    <a href="/" className="navbar-brand">
                        <img className="circle" src="https://th.bing.com/th/id/OIP.WffjYz5CIef2Nlc5u1EmLwHaE8?rs=1&pid=ImgDetMain" style={{
                            border:'none',borderRadius:'50%'
                        }} alt="Logo" />
                    </a>
                </div>

                <div className="col-8">
                    <ul className="navbar-nav d-flex flex-row justify-content-around">
                        <li className="nav-item py-2"><a href="/">Home</a></li>
                        <li className="nav-item py-2"><a href="/Products">Products</a></li>
                        <li className="nav-item py-2">
                            <a href="/ShopingCard">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-2">
                    <form action="" className="form d-flex justify-content-center align-items-center">
                        <input type="text" placeholder="Search" className="form-control input" style={{width:'40%', transform:'translateY(18px)'}} />
                        <button type="submit" className="btn btn-outline-success" style={{width:'40%' , transform:'translateY(-10px)'}}>Search</button> 
                    </form>
                </div>
            </nav>
        </header>
    );
}