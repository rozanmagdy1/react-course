import React, {useState} from 'react';
import './Login.css'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";

function Login() {
    let api_url_login = "http://localhost:8080/admin/login";
    let api_url_get_users = "http://localhost:8080/admin/users";
    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");
    let navigate = useNavigate();

    let Enter = ()=>{
        axios.post(api_url_login, {username,password}).then((res)=>{
            localStorage.setItem('token', JSON.stringify(res.data.result.token));
            if (res.data.result.token){
                navigate('/home');
            }
        })
    }

    let addUser = ()=>{
        fetch("http://localhost:8080/admin/users",
            {
                method : "POST",
                headers : {
                    "Content-Type" : "Application/json",
                },
                body : JSON.stringify({
                    username:"rozan200",
                    password: "20",
                }),
            }).then((res)=>res.json()).then((data)=>{
                console.log(data)
        });
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        Enter();
        getAllUsers();
        addUser();
    }

    let getAllUsers = ()=>{
        let token = JSON.parse(localStorage.getItem('token'));
        fetch(api_url_get_users, {
            method : "GET",
            headers : {
                "Content-Type" : "Application/json",
                "Authorization": token,
            },
        }).then((res)=> res.json()).then((data)=>{
            console.log(data)
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={(e)=> setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        onChange={(e)=> setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </>
    );
}

export default Login;