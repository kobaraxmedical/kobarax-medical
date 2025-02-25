import classnames from "classnames";
import React, { useState } from "react";
import { Nav, NavItem, NavLink,TabContent, TabPane } from "reactstrap";

import ProductGrid from "./ProductGrid";
import ProductList from "./ProductList";

const FilterAllProduct = ({ products, addToCartProduct}) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto">
      <div className="shop-section-top-inner">
        <div className="shoping-list">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                <i className="icon-svgexport"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                <i className="icon-svgexport2"></i>
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="shoping-product">
          <span>{products.length} produits</span>
        </div>
      </div>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <ProductGrid
            products={products}
          />
        </TabPane>

        <TabPane tabId="2">
          <ProductList
            products={products}
          />
        </TabPane>
      </TabContent>
    </div>
  );
};

export default FilterAllProduct;
