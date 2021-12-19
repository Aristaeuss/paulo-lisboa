import React from 'react'
import NavBar from './NavBar'
import './landingPageStyles.css'

function LandingPage() {
    return (
        <>
            <div className="landing-page-body">
                <NavBar />
                <div class="crossfade">
	            	<figure></figure>
	            	<figure></figure>
	            	<figure></figure>
	            	<figure></figure>
	            </div>
            </div>
        </>
    )
}

export default LandingPage
