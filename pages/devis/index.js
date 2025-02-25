import { Button, Grid } from "@mui/material";
import Link from "next/link";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Tooltip } from 'react-tooltip'

import CoverImage from '../../components/CoverImage'
import Footer from "../../components/footer/Footer";
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../store/actions/action";

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Devis"} pagesub={"Devis"} />
      <div className="cart-area separator-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="heading-title">
                <h2>Devis</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="product-2">Produit</th>
                          <th className="ptice">Quantite</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <tr key={crt}>
                              <td className="product">
                                <ul>
                                  <li>
                                    <CoverImage slug={catItem.slug} title={catItem.title} image={catItem.proImg} priority />
                                    </li>
                                  <li className="first-cart">{catItem.title}</li>
                                  <li className="close" onClick={() =>
                                    props.removeFromCart(catItem.id) 
                                  }
                                  data-tooltip-id="cart-tooltip" data-tooltip-content="Remove from cart"
                                  data-tooltip-place="top"
                                  ><i className="icon-icon_close_2"></i>
                                  <Tooltip id="cart-tooltip" />
                                  </li>
                                </ul>
                              </td>
                              <td className="stock">
                                <ul className="input-style">
                                  <Grid className="quantity cart-plus-minus">
                                    <Button
                                      className="dec qtybutton"
                                      onClick={() =>
                                        props.decrementQuantity(catItem.id)
                                      }
                                    >
                                      -
                                    </Button>
                                    <input value={catItem.qty} type="text" />
                                    <Button
                                      className="inc qtybutton"
                                      onClick={() =>
                                        props.incrementQuantity(catItem.id)
                                      }
                                    >
                                      +
                                    </Button>
                                  </Grid>
                                </ul>
                              </td>
                            </tr>
                          ))}

                      </tbody>
                    </table>
                  </form>
                  <div className="cart-product-list">
                    <ul>
                      <li><Link className="c-btn" onClick={ClickHandler} href="/checkout"><i className="icon-privacy"></i> Envoyer le devis</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);