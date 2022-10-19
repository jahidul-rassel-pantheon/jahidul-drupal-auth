import React, { useState, useEffect } from 'react'

export default function Login() {
    const [responseData, setResponseData] = useState("Loading.....");
    const [responseDataArticle, setResponseDataArticle] = useState("Loading.....");

    //////////////////////////////////////////
    //      OnClick Function [ START ]      //
    async function onClickLogIn() {
        
        //  Get the SESSION TOKEN
        fetch('https://test-jahidul-test-auth.pantheonsite.io/oauth/token', {
                method: 'POST',
                headers: {
                },
                body: JSON.stringify({
                    "grant_type":"password",
                    "client_id":"4095f415-aa5e-4347-896a-1fe8ca528755",
                    "client_secret":"admin@123",
                    "username":"jahid-rassel",
                    "password":"iVN4xByf0tXhFe*Xxb"
                })
            })
            .then((response) => { 
                console.log(response);
                return response.json(); 
            })
            .then(CSRFToken => {
                //console.log("CSRFToken: "+CSRFToken)

                /*
                //  LOGIN USER [ START ]
                fetch('https://dev-jahidul-test-auth.pantheonsite.io/user/login?_format=json', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'X-CSRF-Token': CSRFToken
                        },
                        body: JSON.stringify({
                            "name":"jahid-rassel",
                            "pass":"iVN4xByf0tXhFe*Xxb"
                        })
                    })
                    .then((response) => { return response.json() })
                    .then(data => {
                        console.log(data);
                        setResponseData(JSON.stringify(data));
                    })
                    .catch((error) => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });   
                //  LOGIN USER [ END ]  
                */

            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });    
    }
    //      OnClick Function [ END ]        //
    //////////////////////////////////////////

    //  Node List [ START ]
    /*
    useEffect(() => {
        fetch('https://dev-jahidul-test-auth.pantheonsite.io/jsonapi/node/article')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setResponseDataArticle(JSON.stringify(data));
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        console.log("this is testing");
    }, []);
    */
    //  Node List [ END ]
  
    return (
      <main>
        <button onClick={onClickLogIn}>Log In</button>

        <br /><br />
        <span>User Data:</span><br /><br />
        <div>{ responseData }</div>

        <br /><br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        
        <br /><br />
        <span>Article Data:</span><br /><br />
        <div>{ responseDataArticle }</div>
      </main>
    );
}
