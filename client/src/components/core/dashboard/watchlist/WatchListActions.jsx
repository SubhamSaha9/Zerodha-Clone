import React from "react";
import { Grow, Tooltip } from "@mui/material";
import { BarChartOutlined, MoreHoriz } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setOpenBuyWindow, setStockId } from "../../../../slices/stockSlice";

const WatchListActions = ({ uid }) => {
  const dispatch = useDispatch();

  const handleBuyClick = () => {
    dispatch(setStockId(uid));
    dispatch(setOpenBuyWindow(true));
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};

export default WatchListActions;
