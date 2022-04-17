import React from 'react'
import { TiThMenuOutline } from 'react-icons/ti'
import { CgClose } from 'react-icons/cg'
import { useState } from 'react'
import MobileNavLinks from './MobileNavLinks'
function MobileNav() {
    const [open, setOpen] = useState(false);
    const hamburgerIcon = <TiThMenuOutline className="hamburger" size="40px" cursor="pointer" top="2%" onClick={() => setOpen(!open)} />
    const closeIcon = <CgClose className="hamburger" size="40px" cursor="pointer" onClick={() => setOpen(!open)} />
    const closeMobileMenu = () => {
        setOpen(false)
    }

    return (
        <div className="MobileNav" style={{ background: open ? "red" : 'none' }}>
            {/* <NavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> */}
            {open ? closeIcon : hamburgerIcon}
            {open ? <MobileNavLinks isMobile={true} closeMobileMenu={closeMobileMenu} /> : null}

        </div>
    )
}

export default MobileNav
