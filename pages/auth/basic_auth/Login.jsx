import React, { useState, useEffect } from 'react'

export default function Login() {
    const [responseData, setResponseData] = useState("Loading.....");

    //////////////////////////////////////////
    //      OnClick Function [ START ]      //
    async function onClickLogIn() {
        
        //  Get the SESSION TOKEN
        fetch('https://dev-jahidul-test-auth.pantheonsite.io/session/token')
            .then((response) => { return response.text() })
            .then(CSRFToken => {
                console.log("CSRFToken: "+CSRFToken)

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
                        setResponseData(JSON.stringify(data, undefined, 2));
                    })
                    .catch((error) => {
                        console.error('There has been a problem with your fetch operation:', error);
                    });   
                //  LOGIN USER [ END ]    
            })
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });    
    }
    //      OnClick Function [ END ]        //
    //////////////////////////////////////////

    //  Node List [ START ]
    useEffect(() => {
        fetch('https://dev-jahidul-test-auth.pantheonsite.io/jsonapi/node/article')
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        console.log("this is testing");
    }, []);
    //  Node List [ END ]
  
    return (
      <main>
        <button onClick={onClickLogIn}>Log In</button>
        <br /><br />


        <pre>{ responseData }</pre>
      </main>
    );
}
