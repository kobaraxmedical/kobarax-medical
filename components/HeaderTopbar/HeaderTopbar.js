import React from 'react'
import Link from 'next/link'
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const HeaderTopbar = (props) => {

    const [language, setlanguage] = React.useState('');
    const [currencey, setcurrencey] = React.useState('');

    const handleChange = (event) => {
        setlanguage(event.target.value);
    };
    const handleChange2 = (event) => {
        setcurrencey(event.target.value);
    };


    return (
        <div className="topbar">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col col-lg-3 col-md-12 col-12">
                        <div className="contact-link">
                            <ul>
                                <li><Link href="/contact">Quick Help</Link></li>
                                <li><Link href="/login">Order Tracking</Link></li>
                                <li><Link href="/wishlist">Wishlist</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-12">
                        <div className="help-link">
                            <p>Need help? Call us: <a href="tel:+4065550120">(+221) 33 123 4567</a> or
                                info@company.com</p>
                        </div>
                    </div>
                    <div className="col col-lg-3 col-md-12 col-sm-12 col-12">
                        <div className="topbar-select">
                            <ul className="topbar-select-wrap">
                                <li>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            value={language}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">English</MenuItem>
                                            <MenuItem value={2}>Spanish</MenuItem>
                                            <MenuItem value={3}>Hindi</MenuItem>
                                            <MenuItem value={4}>Bangla</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                                <li>
                                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                                        <Select
                                            value={currencey}
                                            onChange={handleChange2}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">USD</MenuItem>
                                            <MenuItem value={5}>Euro</MenuItem>
                                            <MenuItem value={6}>Rupi</MenuItem>
                                            <MenuItem value={7}>Crypto</MenuItem>
                                        </Select>
                                    </FormControl>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;