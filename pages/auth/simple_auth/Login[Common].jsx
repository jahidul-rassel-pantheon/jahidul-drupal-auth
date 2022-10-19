import React, { useState, useEffect } from 'react'

export default function Login() {
    var oauthBearerToken = "";
    
    const [responseDataOAuth, setResponseDataOAuth] = useState("Loading.....");
    const [responseDataUserDetails, setResponseDataUserDetails] = useState("Loading.....");

    //////////////////////////////////////////
    //      OnClick Function [ START ]      //
    async function onClickGetOAuthToken() {
        //  Get the SESSION TOKEN
        let formData = new FormData();
        formData.append('grant_type', 'password');
        formData.append('client_id', '4095f415-aa5e-4347-896a-1fe8ca528755');
        formData.append('client_secret', 'admin@123');
        formData.append('username', 'jahid-rassel');
        formData.append('password', 'iVN4xByf0tXhFe*Xxb');
        //formData.append('scope', 'fe_client');

        fetch('https://test-jahidul-test-auth.pantheonsite.io/oauth/token', {
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
                //console.log("oauthBearerToken [oauthBearerToken]: "+ oauthBearerToken);  
                
                document.getElementById("testingID").innerHTML = oauthBearerToken;
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 
    }

    async function onClickOAuthUserPermission() {
        console.log(oauthBearerToken);

        //  OAuth User Modules PREMISSIONS Details [ START ]
        if( oauthBearerToken ) {
            fetch('https://test-jahidul-test-auth.pantheonsite.io/oauth/debug?_format=json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${oauthBearerToken}`
                }
            })
            .then((response) => { return response.json() })
            .then(data => {
                console.log(data);
                setResponseDataOAuth(JSON.stringify(data, undefined, 2));
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        }
        else {
            alert("Genarate 'OAuth Token' first.")
        }
        //  OAuth User Modules PREMISSIONS Details [ END ]
    }

    async function onClickUserDetails() {
        console.log(oauthBearerToken);

        //  OAuth User Modules PREMISSIONS Details [ START ]
        if( oauthBearerToken ) {
            fetch('https://test-jahidul-test-auth.pantheonsite.io/user/1?_format=json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${oauthBearerToken}`
                }
            })
            .then((response) => { return response.json() })
            .then(data => {
                console.log(data);
                setResponseDataUserDetails(JSON.stringify(data, undefined, 2));
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        }
        else {
            alert("Genarate 'OAuth Token' first.")
        }
        //  OAuth User Modules PREMISSIONS Details [ END ]
    }
    //      OnClick Function [ END ]        //
    //////////////////////////////////////////
  
    return (
      <main>
        <button onClick={onClickGetOAuthToken}>OAuth Token</button>

        <br /><br />
        <span>OAuth Token: https://test-jahidul-test-auth.pantheonsite.io/oauth/token</span><br /><br />
        <pre id='testingID' ></pre>

        <br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        <br />

        <button onClick={onClickUserDetails}>User Details</button>
        <br /><br />
        <span>User Details with OAuth `Bearer``: https://test-jahidul-test-auth.pantheonsite.io/user/[user-id]?_format=json</span><br /><br />
        <pre>{ responseDataUserDetails }</pre>
        

        <br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        <br />

        <button onClick={onClickOAuthUserPermission}>OAuth User Permission</button>
        <br /><br />
        <span>OAuth User Permissions: https://test-jahidul-test-auth.pantheonsite.io/oauth/debug?_format=json</span><br /><br />
        <pre>{ responseDataOAuth }</pre>

        <br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        <br />
      </main>
    );
}
