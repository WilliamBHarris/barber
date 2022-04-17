import React from 'react'

function MobileNavLinks(props) {
    return (
        <div>
            <div>
                <div className="mobileNav">
                    {/* <a href="#home" className="logo"><h1>G.</h1></a> */}
                    <ul className='MobilenavItems'>
                        <a href="#home"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Home</li></a>
                        <a href="#about"><li onClick={() => props.isMobile && props.closeMobileMenu()}>About</li></a>
                        <a href="#services"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Services</li></a>
                        <a href="#barbers"><li onClick={() => props.isMobile && props.closeMobileMenu()}>Barbers</li></a>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MobileNavLinks
