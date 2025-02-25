import React, { Fragment, useState } from "react";
import { Dialog, Grid, Button } from "@mui/material";
import Link from 'next/link'
import CoverImage from '../../components/CoverImage'

const ViewModal = ({
  maxWidth,
  open,
  onClose,
  addToCartProduct,
  product,
}) => {
  const [qty, setQty] = useState(1);


  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <Fragment>
      <Dialog
        open={open}
        className="modalWrapper cart-quickview"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body">
          <button className="btn-close" onClick={onClose}><i className="icon-icon_close"></i></button>
          <div className="product-details">
            <div className="row align-items-center">
              <div className="col-lg-5">
                <div className="product-single-img">
                    <CoverImage slug={product.slug} title={product.title} image={product && product.proImg} priority />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="product-single-content">
                  <h5>{product && product.title}</h5>
                  <div className="pro-single-btn">
                    <b>Quantite : </b>
                    <Grid className="quantity cart-plus-minus">
                      <Button
                        className="dec qtybutton"
                        onClick={() => setQty(qty <= 1 ? 1 : qty - 1)}
                      >
                        -
                      </Button>
                      <input
                        value={qty}
                        onChange={() => setQty(qty)}
                        type="text"
                      />
                      <Button
                        className="inc qtybutton"
                        onClick={() => setQty(qty + 1)}
                      >
                        +
                      </Button>
                    </Grid>
                    <button
                      onClick={() => addToCartProduct(product, qty)}
                      className="btn-style-1"
                    >
                      Ajouter au devis
                    </button>
                    <Link onClick={ClickHandler} href="/wishlist"><i className="icon icon-heart"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ViewModal;
