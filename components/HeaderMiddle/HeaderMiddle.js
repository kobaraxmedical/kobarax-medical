import React from 'react'
import Link from 'next/link'
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Logo from '/public/images/logo.png'
import search from '/public/images/icon/search.png'
import Image from 'next/image';

const HeaderMiddle = (props) => {

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const { carts } = props;
    const { wish } = props;
    const { compare } = props;

    const [language, setlanguage] = React.useState('');

    const handleChange = (event) => {
        setlanguage(event.target.value);
    };

    return (
        <div className="header-middle">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <div className="navbar-header">
                            <Link className="navbar-brand" href="/"><Image src={Logo}
                                alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <form onSubmit={SubmitHandler} className="middle-box">
                            <div className="category">
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <Select
                                        value={language}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">categorys</MenuItem>
                                        <MenuItem value={2}>Medicine</MenuItem>
                                        <MenuItem value={3}>Equipment</MenuItem>
                                        <MenuItem value={4}>Doctor</MenuItem>
                                        <MenuItem value={5}>Medical</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className="search-box">
                                <div className="input-group">
                                    <input type="search" className="form-control" placeholder="Search Products" />
                                    <button className="search-btn" type="submit"> <i><Image
                                        src={search} alt="" /></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-3 col-12">
                        <div className="middle-right">
                            <ul>
                                <li><Link href="/wishlist"><i className="icon-heart"><span
                                    className="cart-count">{wish.length}</span></i></Link></li>
                                <li><Link href="/compare"><i className="icon-left-and-right-arrows-1"><span
                                    className="cart-count">{compare.length}</span></i></Link></li>
                                <li><Link href="/cart">
                                    <i className="icon-cart"><span className="cart-count">{carts.length}</span></i>
                                    <p>
                                        <small>{carts.length} items</small>
                                        ${totalPrice(carts)}
                                    </p>
                                </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        carts: state.cartList.cart,
        wish: state.wishList.w_list,
        compare: state.compareList.compare_list,
    };
};

export default connect(mapStateToProps)(HeaderMiddle);