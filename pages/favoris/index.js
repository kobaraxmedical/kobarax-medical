import React, { Fragment } from "react";
import { connect } from "react-redux";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Link from "next/link";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { removeFromWishList, addToCart } from "../../store/actions/action";
import { Tooltip } from 'react-tooltip'

const WishlistPage = (props) => {
  const { wishs } = props;
  
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={"Favoris"} pagesub={"Favoris"} />
      <div className="cart-area separator-padding">
        <div className="container">
          <div className="form">
            <div className="cart-wrapper">
              <div className="heading-title">
                <h2>Mes Favoris</h2>
              </div>
              <div className="row">
                <div className="col-12">
                  <form action="cart">
                    <table className="table-responsive cart-wrap">
                      <thead>
                        <tr>
                          <th className="product-2">Produit</th>
                          <th className="ptice">Ajouter au devis</th>
                          <th className="stock">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishs &&
                          wishs.length > 0 &&
                          wishs.map((wish, crt) => (
                            <tr key={crt}>
                              <td className="product" >
                                <ul>
                                  <li><img src={wish.proImg} alt="" /></li>
                                  <li className="first-cart">{wish.title}</li>
                                </ul>
                              </td>
                              <td className="crt-btn"><Link onClick={ClickHandler} href="/cart">Ajouter au devis</Link></td>
                              <td className="w-close">
                                <button
                                  type="button"
                                  onClick={() =>
                                    props.removeFromWishList(wish.id)
                                  }
                                  data-tooltip-id="wish-tooltip" data-tooltip-content="Retirer des Favoris"
                                  data-tooltip-place="top"
                                >
                                  <i className="icon-icon_close_2"></i>
                                </button>{" "}
                                <Tooltip id="wish-tooltip" />
                                </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </form>
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
    wishs: state.wishList.w_list,
  };
};
export default connect(mapStateToProps, { removeFromWishList, addToCart })(
  WishlistPage
);
