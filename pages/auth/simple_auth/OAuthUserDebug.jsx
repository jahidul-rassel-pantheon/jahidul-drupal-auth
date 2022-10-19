import Head from 'next/head';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function OAuthUserDebug() {
    var oauthBearerToken = "";

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [OAuthToken, setOAuthToken] = useState("Loading.....");
    const [returnUserData, setReturnUserData] = useState("Loading.....");

    //////////////////////////////////////////
    //      OnClick Function [ START ]      //
    async function onClickLogIn() {
        //  Reset
        setOAuthToken("Loading.....");
        setReturnUserData("Loading.....");

        //  Get the SESSION TOKEN
        let formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', 'ce39b5ea-8db1-4549-90e4-95af44195353');
        formData.append('client_secret', 'admin@123');
        
        formData.append('username', username);
        formData.append('password', password);

        //formData.append('username', 'jahid-rassel');
        //formData.append('password', 'iVN4xByf0tXhFe*Xxb');
        //formData.append('scope', 'fe_client');

        fetch('https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/token', {
                method: 'POST',
                headers: {
                },
                body: formData
            })
            .then((response) => { 
                console.log('response.status: '+ response.status);
                return response.json(); 
            })
            .then(oauthTokenReturnData => {

                if( oauthTokenReturnData.hasOwnProperty('error') ) {
                    setOAuthToken(JSON.stringify(oauthTokenReturnData, undefined, 2));
                } else {
                    setOAuthToken( JSON.stringify(oauthTokenReturnData, undefined, 2) );

                    fetch('https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/debug?_format=json', {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer '+ oauthTokenReturnData.access_token
                        }
                    })
                    .then((response) => { return response.json() })
                    .then(data => {
                        console.log(data);

                        setReturnUserData(JSON.stringify(data, undefined, 2));
                    })
                    .catch((error) => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });   
                }
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });    
    }
    //      OnClick Function [ END ]        //
    //////////////////////////////////////////

    async function oauthTokenStatic() {
        //  Get the SESSION TOKEN
        let formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', 'ce39b5ea-8db1-4549-90e4-95af44195353');
        formData.append('client_secret', 'admin@123');
        formData.append('username', 'jahid-rassel');
        formData.append('password', 'iVN4xByf0tXhFe*Xxb');
        //formData.append('scope', 'fe_client');

        fetch('https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/token', {
                method: 'POST',
                headers: {
                },
                body: formData
            })
            .then((response) => { 
                //console.log(response);
                return response.json(); 
            })
            .then(responseOAuthJSON => {
                oauthBearerToken = responseOAuthJSON.access_token;
                setOAuthToken(oauthBearerToken);
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 
    }


    useEffect(() => {
        //oauthTokenStatic()
    },[]);

    return (
        <div>
            <Head>
                <title>Token Request [OAuth]</title>
            </Head>

            <div className="card mb-2" >
                <div className="card-body">
                    <h4>Simple Auth Token Request</h4>
            
                    <div className="card-text">
                        CMS URL:  <Link href={"https://oauth2-jahidul-test-auth.pantheonsite.io/"}><a>https://oauth2-jahidul-test-auth.pantheonsite.io/</a></Link><br />
                        ---------------------------<br />
                        <b>[Step 1] Token URL:</b> https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/token<br />
                        <b>Request Data:</b><br />
                        "grant_type": "password"<br />
                        "client_id": "SimpleAuthClientUUID" [ 'UUID' will be auto genarated after creating a Customer from SimpleAuth Config ]<br />
                        "client_secret": "SimpleAuthClientSecret" [ 'client_secret' is from customer of SimpleAuth Config ]<br />
                        "username": "DrupalUserName"<br />
                        "password": "DrupalUserPassword"<br />
                        ---------------------------<br />
                        <b>[Step 2] Token URL:</b> https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/debug?_format=json<br />
                        <b>Request Header:</b><br />
                        "Content-Type": "application/json"<br />
                        "Authorization": "Bearer OAuthToken" [ Returns from 1st Part 'oauthTokenReturnData.access_token' ]<br />

                        <br />
                        <h4>Drupal Admin Details</h4>
                        DrupalUserName: jahid-rassel<br />
                        DrupalUserPassword: iVN4xByf0tXhFe*Xxb<br />
                    </div>
                </div>
            </div>
            
            <div className="card mb-2" >
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
                        <button className="btn btn-primary mb-3" onClick={onClickLogIn}>Log In</button><br /><br />
                        <b>Token: </b> <pre>{OAuthToken}</pre><br />
                        <b>Customer Data: </b> <pre>{returnUserData}</pre><br />
                    </div>
                </div>
            </div>
        </div>
    )
}
