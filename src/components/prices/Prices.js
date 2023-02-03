import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deletePrice, getPrices } from "../../actions/price";
import MaterialIcon from "material-icons-react";
import loadImage from "../../images/1494.gif";

const Prices = ({ price: { loading, prices }, getPrices, deletePrice }) => {
  useEffect(() => {
    getPrices();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h5>Fuel Price Detail</h5>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Date </th>
              <th>Petrol</th>
              <th>Diesel</th>
              <th>Supreme</th>
            </tr>
          </thead>
          <tbody>
            {loading && (
              <img
                className="mx-auto mt-5"
                src={loadImage}
                style={{
                  maxWidth: "100px",
                  borderRadius: "50%",
                }}
              />
            )}

            {!loading &&
              prices.length &&
              prices.map((price) => (
                <tr key={price.id}>
                  <td>{price.date}</td>
                  <td>{price.petrol}</td>
                  <td>{price.diesel}</td>
                  <td>{price.supreme}</td>
                  <td>
                    <button
                      to="/"
                      className="btn btn-danger float-right"
                      onClick={() => {
                        if (window.confirm("Are you sure? ")) {
                          deletePrice(price.id);
                        }
                      }}
                    >
                      <MaterialIcon icon="delete" color="#fff" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  price: state.price,
});
export default connect(mapStateToProps, { getPrices, deletePrice })(Prices);
