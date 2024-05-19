import * as React from "react";
import './';
import './checkout.css';
function CheckOut(){
    function Purchanse(){
        alert("Thank you for your purchase");
        localStorage.removeItem('reactItem');
    }
    return (
        <>
              <div id="wrapper">
                <div className="container">
                    <form action="">
                        <h1>
                            <i className="fas fa-shipping-fast"></i>
                            Shipping Details
                        </h1>
                        <div className="name">
                            <div>
                                <label for="f-name">First</label>
                                <input type="text" name="f-name" />
                            </div>
                            <div>
                                <label for="l-name">Last</label>
                                <input type="text" name="l-name" />
                            </div>
                        </div>
                        <div className="street">
                            <label for="name">Street</label>
                            <input type="text" name="address" />
                        </div>
                        <div className="address-info">
                            <div>
                                <label for="city">City</label>
                                <input type="text" name="city" />
                            </div>
                            <div>
                                <label for="state">State</label>
                                <input type="text" name="state" />
                            </div>
                            <div>
                                <label for="zip">Zip</label>
                                <input type="text" name="zip" />
                            </div>
                        </div>
                        <h1>
                            <i className="far fa-credit-card"></i> Payment Information
                        </h1>
                        <div className="cc-num">
                            <label for="card-num">Credit Card No.</label>
                            <input type="text" name="card-num" />
                        </div>
                        <div className="cc-info">
                            <div>
                                <label for="card-num">Exp</label>
                                <input type="text" name="expire" />
                            </div>
                            <div>
                                <label for="card-num">CCV</label>
                                <input type="text" name="security" />
                            </div>
                        </div>

                        <div className="btns d-flex flex-column gap-5">
                            
                            <a className="btn btn-outline-primary d-flex justify-content-center align-items-center"  href="/ShopingCard"><h4 className="text-center" style={{width:'100%'}}> Back to cart </h4></a>
                            <a className="btn btn-outline-primary d-flex justify-content-center align-items-center"  href="/" onClick={Purchanse}><h4 className="text-center" style={{width:'100%'}}> Purchanse </h4></a>

                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}
export default CheckOut;