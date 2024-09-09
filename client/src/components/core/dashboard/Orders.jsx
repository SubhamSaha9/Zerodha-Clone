import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import OrderTable from "./OrderTable";

const URL = process.env.REACT_APP_BASE_URL;

const Orders = () => {
  const { token } = useSelector((state) => state.auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const toastId = toast.loading("Fetching...");
      try {
        const result = await axios.post(`${URL}/get-orders`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        toast.dismiss(toastId);
        console.log(result.data);
        setOrders([...result.data.data]);
      } catch (error) {
        console.log(error);
        toast.dismiss(toastId);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>

          <Link to={"/user/dashboard"} className="dash-btn">
            Get started
          </Link>
        </div>
      ) : (
        <OrderTable orders={orders} />
      )}
    </div>
  );
};

export default Orders;
