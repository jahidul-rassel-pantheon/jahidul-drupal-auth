import React, { useState, useEffect } from 'react'

export default function Login() {
    var jwtBearerToken = "";

    const [responseDataUserDetails, setResponseDataUserDetails] = useState("Loading.....");

    //////////////////////////////////////////
    //      OnClick Function [ START ]      //
    async function onClickGetOAuthToken() {
        //  Get the SESSION TOKEN
        fetch('https://jwt-jahidul-test-auth.pantheonsite.io/jwt/token?_format=json', {
                method: 'POST',
                headers: {
                    'Authorization': 'Basic ' + btoa('jahid-rassel:iVN4xByf0tXhFe*Xxb')
                }
            })
            .then((response) => { 
                //console.log(response);
                return response.json(); 
            })
            .then(responseOAuthJSON => {
                jwtBearerToken = responseOAuthJSON.token;
                //console.log("oauthBearerToken [oauthBearerToken]: "+ oauthBearerToken);  
                
                document.getElementById("testingID").innerHTML = jwtBearerToken;
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            }); 
    }
    
    async function onClickUserDetails() {
        console.log(jwtBearerToken);

        //  OAuth User Modules PREMISSIONS Details [ START ]
        if( jwtBearerToken ) {
            fetch('https://jwt-jahidul-test-auth.pantheonsite.io/user/1?_format=json', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwtBearerToken}`
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
        <button onClick={onClickGetOAuthToken}>JWT Token</button>

        <br /><br />
        <span>JWT Token: https://test-jahidul-test-auth.pantheonsite.io/jwt/token?_format=json</span><br /><br />
        <pre id='testingID' ></pre>

        <br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        <br />

        <button onClick={onClickUserDetails}>JWT User Details</button>
        <br /><br />
        <span>JWT User Details: https://test-jahidul-test-auth.pantheonsite.io/user/1?_format=json</span><br /><br />
        <pre>{ responseDataUserDetails }</pre>

        <br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        ---------------------------------------------------<br />
        <br />
      </main>
    );
}
