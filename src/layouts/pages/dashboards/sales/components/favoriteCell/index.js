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

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Material Dashboard 2 PRO React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
// import MDAvatar from "components/MDAvatar";

// eslint-disable-next-line no-unused-vars
function FavoriteProductCell({ image, name, orders }) {
  return (
    <MDBox display="flex" alignItems="center" pr={2}>
      {/* <MDBox mr={2}>
        <MDAvatar src={image} alt={name} />
      </MDBox> */}
      <MDBox display="flex" flexDirection="column">
        <MDTypography variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="secondary">
          <MDTypography component="span" variant="button" fontWeight="regular" color="success">
            ${orders}
          </MDTypography>{" "}
          Ordered
        </MDTypography>
      </MDBox>
    </MDBox>
  );
}

// Typechecking props for the ProductCell
FavoriteProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  orders: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default FavoriteProductCell;
