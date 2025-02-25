import 'react-medium-image-zoom/dist/styles.css'

import { Button, Grid } from "@mui/material";
import Link from 'next/link'
import React, { useState } from "react";
import Zoom from 'react-medium-image-zoom'

import DetailImage from '../../components/DetailImage'

const Product = ({ item, addToCart }) => {

  const [qty, setQty] = useState(1);
  const categoryName = item.category?.name || 'No Category';

  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <div className="product-details">
      <div className="row">
        <div className="col-lg-5">
          <div className="product-single-img">
              <DetailImage
                title={item.title}
                slug={item.slug}
                image={item.proImg}
                priority={true}
                containerClassName="rounded-md shadow-lg"
                className="rounded-md"
              />
          </div>
        </div>
        <div className="col-lg-7">
          <div className="product-single-content">
            <h5>{item.title}</h5>
            <p className='text-justify'>{item.description}</p>
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
                className="btn-style-1"
                onClick={() => addToCart(item, qty)}
              >
                Ajouter au devis
              </button>
            </div>
            <div className="category">
              <ul>
                <li><b>Categories:</b></li>
                <li>{categoryName}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
