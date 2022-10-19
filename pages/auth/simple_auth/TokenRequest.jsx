import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'

export default function TokenRequest() {
    const [OAuthToken, setOAuthToken] = useState("Loading.....");

    async function onClickGetOAuthToken() {
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
            return response.json();
        })
        .then(responseOAuthJSON => {
            setOAuthToken(responseOAuthJSON.access_token);
        })
        .catch((error) => {
            console.error('There has been a problem with your fetch operation:', error);
        }); 
    }


  return (
    <div>
        <Head>
            <title>Token Request [OAuth]</title>
        </Head>

        <div className="card mb-3" >
            <div className="card-body">
                <h4>Simple Auth Token Request</h4>
        
                <div className="card-text">
                CMS URL:  <Link href={"https://oauth2-jahidul-test-auth.pantheonsite.io/"}><a>https://oauth2-jahidul-test-auth.pantheonsite.io/</a></Link>
                URL In Use:  https://oauth2-jahidul-test-auth.pantheonsite.io/oauth/token<br />
                
                <br />
                <h4>Request Data:</h4>
                &apos;grant_type&apos;: &apos;password&apos;<br />
		        &apos;client_id&apos;: &apos;SimpleAuthClientUUID&apos; [ &apos;UUID&apos; will be auto genarated after creating a Customer from SimpleAuth Config ]<br />
                &apos;client_secret&apos;: &apos;SimpleAuthClientSecret&apos; [ &apos;client_secret&apos; is from customer of SimpleAuth Config ]<br />
                &apos;username&apos;: &apos;DrupalUserName&apos;<br />
                &apos;password&apos;: &apos;DrupalUserPassword&apos;<br />

                <br />
                <h4>Drupal Admin Details</h4>
                DrupalUserName: jahid-rassel<br />
                DrupalUserPassword: iVN4xByf0tXhFe*Xxb<br />
                </div>
            </div>
        </div>


        <div className="card" >
            <div className="card-body">
                <span>
                    <button onClick={onClickGetOAuthToken}>Generate OAuth Token</button><br /><br />
                    <b>Token: </b> <pre>{OAuthToken}</pre><br />
                </span>
            </div>
        </div>

    </div>
  )
}
