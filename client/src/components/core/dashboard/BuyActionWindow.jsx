import React, { useState } from "react";

import axios from "axios";
import "./BuyActionWindow.css";
import { useDispatch, useSelector } from "react-redux";
import { setOpenBuyWindow, setStockId } from "../../../slices/stockSlice";
import toast from "react-hot-toast";
const URL = process.env.REACT_APP_BASE_URL;

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleBuyClick = async () => {
    try {
      await axios.post(`${URL}/new-order`, {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch(setOpenBuyWindow(false));
      toast.success("Stock bought successfully");
    } catch (error) {
      console.log(error);
      toast.error("Some error occoured");
    }
  };

  const handleCancelClick = () => {
    dispatch(setOpenBuyWindow(false));
    dispatch(setStockId(null));
  };

  return (
    <div className="buy-container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <button className="buy-btn btn-blue" onClick={handleBuyClick}>
            Buy
          </button>
          <button
            to=""
            className="buy-btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
