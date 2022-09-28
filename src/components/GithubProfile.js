import React, { useState } from "react";
import Axios from "axios";

const GithubProfile = () => {
    const [username, setUsername] = useState('');
    const [profile, setProfile] = useState({});

    const searchUser = (e) => {
        e.preventDefault();
        searchProfile(username);
        setUsername('');
    }
    const searchProfile = (username) => {
        let dataUrl = `https://api.github.com/users/${username}`;
        Axios.get(dataUrl).then((response) => {
            setProfile(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    return (
        <React.Fragment>
            <div className="container mt-3 mb-5">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header bg-secondary text-white">
                                <p className="h4">Github Search App</p>
                            </div>
                            <div className="card-body">
                                <form className="form-inline" onSubmit={searchUser}>
                                    <div className="form-group">
                                        <input
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            type="text" className="form-control" placeholder="Search Username" size="40" />
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" className="btn btn-sm btn-primary" value="Search" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    Object.keys(profile).length > 0 ?
                        <React.Fragment>
                            <div className="row mt-5">
                                <div className="col-md-5 m-auto">
                                    <div className="card">
                                        <div className="card-header bg-primary text-center">
                                            <img src={profile.avatar_url} className="rounded-circle image-margin" height="150" width="150" alt="" />
                                        </div>
                                        <div className="card-body">
                                            <ul className="list-group">
                                                <li className="list-group-item list-group-item-dark">
                                                    Username : <b>{profile.login}</b>
                                                </li>
                                                <li className="list-group-item list-group-item-dark">
                                                    Name : <b>{profile.name}</b>
                                                </li>
                                                <li className="list-group-item list-group-item-dark">
                                                    No. of publ repos : <b>{profile.public_repos}</b>
                                                </li>
                                                <li className="list-group-item list-group-item-dark">
                                                    No. of public gists : <b>{profile.public_gists}</b>
                                                </li>
                                                <li className="list-group-item list-group-item-dark">
                                                    Profile created at : <b>{profile.created_at}</b>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </React.Fragment> :
                        <React.Fragment>
                            <div className="row mt-5">
                                <div className="col m-auto">
                                    <p className="h5 text-success">Please search user for information...</p>
                                </div>
                            </div>
                        </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}
export default GithubProfile;