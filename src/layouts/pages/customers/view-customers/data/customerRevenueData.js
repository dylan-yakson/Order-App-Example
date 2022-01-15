/* eslint-disable no-unused-vars */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
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
// {
//   labels: ["Facebook", "Direct", "Organic", "Referral"],
//   datasets: {
//     label: "Projects",
//     backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
//     data: [15, 20, 12, 60],
//   },
// };

const formatCustomerRevenueData = (customerOrderData) => {
  const customerOrderTotalData = [];
  const currentYearOrderData = {
    Jan: [],
    Feb: [],
    Mar: [],
    Apr: [],
    May: [],
    Jun: [],
    Jul: [],
    Aug: [],
    Sep: [],
    Oct: [],
    Nov: [],
    Dec: [],
  };
  // const data = analyticsData.customerData;
  // data.sort((a, b) => a.TotalAmountPurchased < b.TotalAmountPurchased);
  const labels = Object.keys(currentYearOrderData);
  const Year1PriorDate = new Date(Date.now());
  Year1PriorDate.setFullYear(Year1PriorDate.getFullYear() - 1);
  customerOrderData.map((order) => {
    const orderMonth = new Date(order.createdDate).getMonth();
    if (new Date(order.createdDate) > Year1PriorDate) {
      switch (orderMonth) {
        case 0:
          currentYearOrderData.Jan.push(order);
          break;
        case 1:
          currentYearOrderData.Feb.push(order);
          break;
        case 2:
          currentYearOrderData.Mar.push(order);
          break;
        case 3:
          currentYearOrderData.Apr.push(order);
          break;
        case 4:
          currentYearOrderData.May.push(order);
          break;
        case 5:
          currentYearOrderData.Jun.push(order);
          break;
        case 6:
          currentYearOrderData.Jul.push(order);
          break;
        case 7:
          currentYearOrderData.Aug.push(order);
          break;
        case 8:
          currentYearOrderData.Sep.push(order);
          break;
        case 9:
          currentYearOrderData.Oct.push(order);
          break;
        case 10:
          currentYearOrderData.Nov.push(order);
          break;
        case 11:
          currentYearOrderData.Dec.push(order);
          break;
        default:
          break;
      }
    }
    return order;
  });
  const revenueTotalsArray = [];
  labels.map((label) => {
    const monthlySalesData = currentYearOrderData[label];
    let MonthlyOrderTotal = 0;
    // eslint-disable-next-line no-restricted-syntax
    for (const orderIndex in monthlySalesData) {
      const tmpOrder = monthlySalesData[orderIndex];
      // console.log("TEMP ORDER");
      // console.log(tmpOrder);
      // eslint-disable-next-line no-restricted-syntax
      for (const orderItemIndex in tmpOrder.order.items.items) {
        const OrderItem = tmpOrder.order.items.items[orderItemIndex];
        // console.log(OrderItem);
        try {
          const RealPriceAmount = Number(OrderItem.PricePerGal) * Number(OrderItem.Quantity);
          MonthlyOrderTotal += RealPriceAmount;
        } catch (Error) {
          // console.log(Error);
        }
      }
    }
    revenueTotalsArray.push(MonthlyOrderTotal);
    return label;
  });
  return {
    labels,
    datasets: [{ label: "Montly Order Totals", data: revenueTotalsArray }],
  };

  // for (const customerDataIndex in top6Customers) {
  //   const customer = top6Customers[customerDataIndex];
  //   if (customer.Customer && customer.Customer.length > 0) {
  //     labels.push(customer.Customer.slice(0, 25));
  //     customerOrderTotalData.push(customer.TotalAmountPurchased);
  //   }
  // }

  // const tmpResponseObj = {
  //   labels,
  //   datasets: {
  //     label: "Projects",
  //     backgroundColors: ["info", "error", "dark", "secondary", "primary", "green", "yellow"],
  //     data: customerOrderTotalData,
  //   },
  // };
  // return tmpResponseObj;
};

export default formatCustomerRevenueData;
