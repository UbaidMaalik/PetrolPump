import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { deleteTransection } from "../../actions/transection";

const EditButton = ({ id, total, deleteTransection, transection }) => {
  return (
    <Fragment>
      <div className="buttons">
        <Link
          to={`/transections/${id}/edit/${total ? "tr" : "notr"}`}
          className="btn btn-primary float-right rounded-0 p-1 m-1 w-100"
        >
          Edit
        </Link>
        <button
          className="btn btn-danger float-right rounded-0 p-1 m-1 w-100"
          onClick={() => {
            if (window.confirm("Are you sure? ")) {
              deleteTransection(id);
            }
          }}
        >
          Delete
        </button>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  transection: state.transection,
});
export default connect(mapStateToProps, { deleteTransection })(EditButton);
