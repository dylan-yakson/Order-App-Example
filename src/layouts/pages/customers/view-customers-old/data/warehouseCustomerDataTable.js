/**
=========================================================
* Material Dashboard 2 PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/* eslint-disable react/prop-types */
// ProductsList page components
// import IdCell from "layouts/pages/orders-warehouse/view-orders/components/IdCell";
import DefaultCell from "layouts/pages/orders-warehouse/view-orders/components/DefaultCell";
// import OrderStatusCell from "layouts/pages/orders-warehouse/view-orders/components/OrderStatusCell";
import MoneyCell from "layouts/pages/orders-warehouse/view-orders/components/MoneyCell";
import ActionCell from "layouts/pages/customers/view-customers/components/ActionCell";
// import StatusCell from "layouts/ecommerce/orders/order-list/components/StatusCell";
// import CustomerCell from "layouts/ecommerce/orders/order-list/components/CustomerCell";

const generateDataTableFromOrders = (
  orders,
  updateFunction,
  reviewOrderFunction,
  emailFunction
) => {
  orders.sort((a, b) => {
    if (a.createdDate < b.createdDate) {
      return 1;
    }
    return -1;
  });
  const FormattedOrders = orders.map((order) => {
    // const AlternativePO = `DJ0${order.PO}${new Date(order.createdDate)
    //   .getFullYear()
    //   .toString()
    //   .substr(-2)}`;
    // const DispatchedOrder = dispatchOrders
    //   ? dispatchOrders.filter(
    //       (dispatchedOrder) =>
    //         dispatchedOrder.PO === order.PO || dispatchedOrder.PO === AlternativePO
    //     )
    //   : [];
    // console.log("DISPATCH ORDERS SENT TO WH TABLE");
    // console.log(dispatchOrders);
    // if (DispatchedOrder[0]) {
    //   const OrderStatus = DispatchedOrder[0].status
    //     ? `${DispatchedOrder[0].status}`
    //     : "Order Awaiting Status Update";
    //   let TotalAmount = 0;
    //   order.order.items.items.map((item) => {
    //     try {
    //       TotalAmount += Number(item.PricePerGal) * Number(item.Quantity);
    //     } catch (error) {
    //       console.log(error);
    //       TotalAmount += 1;
    //     }
    //     return item;
    //   });
    //   const tmpObj = {
    //     PO: order.PO,
    //     createdDate: order.createdDate,
    //     customer: order.order.destination.Customer,
    //     total: TotalAmount || 0,
    //     orderStatus: OrderStatus,
    //     // eslint-disable-next-line no-underscore-dangle
    //     editButton: order._id,
    //   };
    //   return tmpObj;
    // }
    let OrderTotal = 0;
    order.order.items.items.map((item) => {
      // console.log(OrderItem);
      try {
        const RealPriceAmount = Number(item.PricePerGal) * Number(item.Quantity);
        OrderTotal += RealPriceAmount;
      } catch (Error) {
        OrderTotal += 0;
        // console.log(Error);
      }
      return item;
    });
    const tmpObj = {
      PO: order.PO,
      createdDate: new Date(order.createdDate).toDateString(),
      customer: order.order.destination.Customer,
      total: OrderTotal || 0,
      // orderStatus: "Awaiting Status Update",
      // eslint-disable-next-line no-underscore-dangle
      editButton: order.PO,
    };
    return tmpObj;
  });
  const globalUpdateFunction = updateFunction;
  const globalEmailFunction = emailFunction;
  const globalReviewFunction = reviewOrderFunction;
  console.log(FormattedOrders);
  const ReturnedTableData = {
    columns: [
      // { Header: "id", accessor: "id", Cell: ({ value }) => <IdCell id={value} /> },
      {
        Header: "edit",
        accessor: "editButton",
        Cell: ({ value }) => (
          <ActionCell
            value={value}
            updateFunction={globalUpdateFunction}
            emailFunction={globalEmailFunction}
            reviewFunction={globalReviewFunction}
            ordersList={orders}
          />
        ),
      },
      {
        Header: "PO",
        accessor: "PO",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },

      {
        Header: "customer",
        accessor: "customer",
        Cell: ({ value }) => <DefaultCell value={value} />,

        // Cell: ({ value: [name, data] }) => (
        //   <CustomerCell image={data.image} color={data.color || "dark"} name={name} />
        // ),
      },
      {
        Header: "createdDate",
        accessor: "createdDate",
        Cell: ({ value }) => <DefaultCell value={value} />,
      },
      // {
      //   Header: "product",
      //   accessor: "product",
      //   Cell: ({ value }) => {
      //     const [name, data] = value;

      //     return (
      //       <DefaultCell
      //         value={typeof value === "string" ? value : name}
      //         suffix={data.suffix || false}
      //       />
      //     );
      //   },
      // },
      {
        Header: "total",
        accessor: "total",
        Cell: ({ value }) => <MoneyCell value={Number(value).toFixed(2)} />,
      },
    ],

    rows: FormattedOrders,
    entitiesPerPage: 5,
  };

  return ReturnedTableData;
};

export default generateDataTableFromOrders;
