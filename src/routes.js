/* eslint-disable jsx-a11y/iframe-has-title */
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

/** 
  All of the routes for the Material Dashboard 2 PRO React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 PRO React layouts
// import Analytics from "layouts/pages/dashboards/analytics";
import Sales from "layouts/pages/dashboards/sales";
import Dispatch from "layouts/pages/dashboards/dispatch";
import Announcements from "layouts/pages/profile/announcements";
import HelpPage from "layouts/pages/profile/help";

// import NewUser from "layouts/pages/users/new-user";
// import NewCustomer from "layouts/pages/customers/new-customer";
import NewCustomerAddress from "layouts/pages/customers/new-customer-address";
import Settings from "layouts/pages/account/settings";
// import Billing from "layouts/pages/account/billing";
// import Invoice from "layouts/pages/account/invoice";
// import Timeline from "layouts/pages/projects/timeline";
// import PricingPage from "layouts/pages/pricing-page";
// import Widgets from "layouts/pages/widgets";
// import RTL from "layouts/pages/rtl";
// import Charts from "layouts/pages/charts";
// import Notifications from "layouts/pages/notifications";
// import Kanban from "layouts/applications/kanban";
// import Wizard from "layouts/applications/wizard";
// import DataTables from "layouts/applications/data-tables";
// import Calendar from "layouts/applications/calendar";
// import NewProduct from "layouts/ecommerce/products/new-product";
// import EditProduct from "layouts/ecommerce/products/edit-product";
// import ProductPage from "layouts/ecommerce/products/product-page";
// import OrderList from "layouts/ecommerce/orders/order-list";
// import OrderDetails from "layouts/ecommerce/orders/order-details";

import ViewFuelOrders from "layouts/pages/orders-fuel/view-orders";
import ViewFuelQuotes from "layouts/pages/orders-fuel/view-quotes";
import NewFuelOrder from "layouts/pages/orders-fuel/new-order";

import ViewWarehouseOrders from "layouts/pages/orders-warehouse/view-orders";
import ViewWarehouseQuotes from "layouts/pages/orders-warehouse/view-quotes";
import NewWarehouseOrder from "layouts/pages/orders-warehouse/new-order";

import ViewSitetoSiteOrders from "layouts/pages/orders-sitetosite/view-orders";
import NewSitetoSiteOrder from "layouts/pages/orders-sitetosite/new-order";

import VewCustomers from "layouts/pages/customers/view-customers";
// import EditCustomers from "layouts/pages/customers/edit-customers";

import SignInBasic from "layouts/pages/sign-in/signin";
// import SignInCover from "layouts/authentication/sign-in/cover";
// import SignInIllustration from "layouts/authentication/sign-in/illustration";
// import SignUpCover from "layouts/authentication/sign-up/cover";
// import ResetCover from "layouts/authentication/reset-password/cover";

// Material Dashboard 2 PRO React components
import MDAvatar from "components/MDAvatar";

// @mui icons
import Icon from "@mui/material/Icon";

// Images
import profilePicture from "assets/images/logo.png";
// Todo: Pull Users name for routes
const routes = [
  {
    name: "signin",
    key: "signin",
    route: "/",
    isVisible: false,
    component: <SignInBasic />,
    type: "auth",
  },
  {
    type: "collapse",
    name: "USER_LOGIN_NAME",
    key: "USER_LOGIN_NAME",
    icon: <MDAvatar src={profilePicture} alt="" size="sm" />,
    collapse: [
      {
        name: "Announcements",
        key: "announcements",
        route: "/announcements",
        component: <Announcements />,
      },
      {
        name: "Settings",
        key: "profile-settings",
        route: "/pages/account/settings",
        component: <Settings />,
      },
      // {
      //   name: "Logout",
      //   key: "logout",
      //   route: "/authentication/sign-in",
      //   component: <SignInBasic />,
      // },
      {
        name: "Help Desk",
        key: "helpmeh",
        route: "/help",
        component: <HelpPage />,
        type: "auth",
      },
    ],
  },
  { type: "divider", key: "divider-0" },
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      // {
      //   name: "Analytics",
      //   key: "analytics",
      //   route: "/dashboards/analytics",
      //   component: <Analytics />,
      // },
      {
        name: "Sales",
        key: "sales",
        route: "/dashboards/sales",
        component: <Sales />,
      },
      {
        name: "Dispatch",
        key: "dispatch",
        route: "/dashboards/dispatch",
        component: <Dispatch />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Customers",
    key: "customers",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      // {
      //   name: "New Customer",
      //   key: "new-customer",
      //   route: "/customers/new-customer",
      //   component: <NewCustomer />,
      // },
      {
        name: "New Address",
        key: "new-customer-address",
        route: "/customers/new-customer-address",
        component: <NewCustomerAddress />,
      },
      {
        name: "View Customers",
        key: "view-customer",
        route: "/customers/view-customer",
        component: <VewCustomers />,
      },
      // {
      //   name: "Edit Customer",
      //   key: "edit-customer",
      //   route: "/customers/edit-customer",
      //   component: <EditCustomers />,
      // },
    ],
  },
  {
    type: "collapse",
    name: "Fuel",
    key: "orders-fuel",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    collapse: [
      {
        name: "New Orders",
        key: "new-order-fuel",
        route: "/orders/new-order-fuel",
        component: <NewFuelOrder />,
      },
      {
        name: "View Orders",
        key: "order-list-fuel",
        route: "/orders/order-list-fuel",
        component: <ViewFuelOrders />,
      },
      {
        name: "View Quotes",
        key: "quote-list-fuel",
        route: "/orders/quote-list-fuel",
        component: <ViewFuelQuotes />,
      },
      // {
      //   name: "Order Details",
      //   key: "order-details-fuel",
      //   route: "/orders/order-details-fuel",
      //   component: <ViewFuelInvoice />,
      // },
    ],
  },
  {
    type: "collapse",
    name: "Warehouse",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    key: "orders-warehouse",
    collapse: [
      {
        name: "New Order",
        key: "new-order-warehouse",
        route: "/orders/new-order-warehouse",
        component: <NewWarehouseOrder />,
      },
      {
        name: "View Orders",
        key: "order-list-warehouse",
        route: "/orders/order-list-warehouse",
        component: <ViewWarehouseOrders />,
      },
      {
        name: "Quotes",
        key: "quote-list-warehouse",
        route: "/orders/quote-list-warehouse",
        component: <ViewWarehouseQuotes />,
      },
      // {
      //   name: "Order Details",
      //   key: "order-details-warehouse",
      //   route: "/orders/order-details-warehouse",
      //   component: <ViewWarehouseInvoice />,
      // },
    ],
  },
  {
    type: "collapse",
    name: "Site-to-Site",
    icon: <Icon fontSize="medium">dashboard</Icon>,
    key: "orders-site-to-site",
    collapse: [
      {
        name: "View Orders",
        key: "order-list-site-to-site",
        route: "/orders/order-list-sitetosite",
        component: <ViewSitetoSiteOrders />,
      },
      {
        name: "New Order",
        key: "new-site-to-site-order",
        route: "/orders/order-create-site-to-site",
        component: <NewSitetoSiteOrder />,
      },
    ],
  },
];

export default routes;
