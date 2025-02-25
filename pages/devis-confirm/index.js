import React, {Fragment} from 'react';
import { connect } from "react-redux";
import OrderConfirmSec from '../../components/OrderConfirmSec';


const OrderConfirm =({cartList}) => {


    return(
        <Fragment>
             <OrderConfirmSec cartList={cartList}/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(OrderConfirm);
