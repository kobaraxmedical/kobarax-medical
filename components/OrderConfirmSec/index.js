import React from 'react';
import Link from 'next/link'
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {totalPrice} from "../../utils";


const OrderConfirmSec = ({cartList}) => {
    return(
        <section className="cart-recived-section separator-padding">
            <div className="container">
                <div className="row">
                    <div className="order-box">
                        <div className="order-top">
                            <h2>Merci! <span>votre devis a été envoyé</span></h2>
                            <Link href='/' className="btn-style-1">{"Retour à l'accueil"}</Link>
                        </div>
                        <Grid className="cartStatus">
                                <Grid container spacing={3}>
                                    <Grid item xs={12}>
                                        <Grid className="cartTotals">
                                            <h4>Details du devis</h4>
                                            <Table>
                                                <TableBody>
                                                    {cartList.map(item => (
                                                        <TableRow key={item.id}>
                                                            <TableCell><img src={item.proImg} alt="" /> {item.title}</TableCell>
                                                            <TableCell
                                                                align="right">{item.qty}</TableCell>
                                                        </TableRow>
                                                    ))}
                                                    <TableRow className="totalProduct">
                                                        <TableCell>Nous remercions, votre devis sera envoyé par email</TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderConfirmSec;