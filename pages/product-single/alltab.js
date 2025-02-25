import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import BlockContent from "@sanity/block-content-to-react";


const ProductTabs = (props) => {
    const [activeTab, setActiveTab] = useState('1');
    console.log(props)
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <div className="product-tab-area">
            <Nav tabs className='main-tab'>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => { toggle('1'); }}
                    >

                     Informations Additionelles
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                    <Row>
                        <Col sm="12">
                            <div className="Descriptions-item">
                                {props.product.content && (
                                    <BlockContent value={props.product.content} />
                                )}
                            </div>
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </div>
    );
}

export default ProductTabs;