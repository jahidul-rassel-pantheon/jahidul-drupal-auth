import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TokenRequest() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [OAuthToken, setOAuthToken] = useState("Loading.....");
    const [UserDetails, setUserDetails] = useState("Loading.....");

    async function onClickGetJWTToken() {
        setOAuthToken("Loading.....");
        fetch('https://jwt-jahidul-test-auth.pantheonsite.io/jwt/token?_format=json', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + btoa(`${username}:${password}`)
            }
        })
        .then((response) => { 
            return response.json();
        })
        .then(responseOAuthJSON => {
            console.log(responseOAuthJSON);
            setOAuthToken(JSON.stringify(responseOAuthJSON, undefined, 2));

            //  Get User Details [ START ]
            if (typeof responseOAuthJSON.token !== 'undefined' && responseOAuthJSON.token != "")  {
                fetch('https://jwt-jahidul-test-auth.pantheonsite.io/user/1?_format=json', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${responseOAuthJSON.token}`
                    }
                })
                .then((response) => { return response.json() })
                .then(data => {
                    console.log(data);
                    setUserDetails(JSON.stringify(data, undefined, 2));
                })
                .catch((error) => {
                    console.error('There has been a problem with your fetch operation:', error);
                });  
            }
            //  Get User Details [ END ]
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        }); 
    }


  return (
    <div>
        <Head>
            <title>Token Request [ JWT ]</title>
        </Head>

        <div className="card mb-3" >
            <div className="card-body">
                <h4>User Login [JWT Token]</h4>
        
                <div className="card-text">
                CMS URL:  <Link href={"https://jwt-jahidul-test-auth.pantheonsite.io/"}><a>https://jwt-jahidul-test-auth.pantheonsite.io/</a></Link><br />
                URL In Use:  https://jwt-jahidul-test-auth.pantheonsite.io/jwt/token?_format=json<br />
                
                <br />
                <b>Request Header:</b><br />
                'Authorization': 'Basic ' + btoa("DrupalUsername:DrupalPassword")<br />

                <br />
                <h4>Drupal Admin Details</h4>
                DrupalUserName: jahid-rassel<br />
                DrupalUserPassword: iVN4xByf0tXhFe*Xxb<br />
                </div>
            </div>
        </div>


        <div className="card" >
            <div className="card-body">
                <div className="mb-3 row">
                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                    
                <div className="mb-3">
                    <button className="btn btn-primary mb-3" onClick={onClickGetJWTToken}>Log In</button><br /><br />
                    <b>Token: </b> <pre>{OAuthToken}</pre><br />

                    <b>User Details: </b> <pre>{UserDetails}</pre><br />
                </div>
            </div>
        </div>

    </div>
  )
}
