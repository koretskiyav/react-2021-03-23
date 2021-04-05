function ProductInfo({ id, name, amount, totalForProduct, deletePosition }) {
  return (
    <div>
      <div>{name}</div>
      <div>{amount}</div>
      <div>{totalForProduct}</div>
      <button onClick={deletePosition}>Delete position</button>
    </div>
  );
};


// const mapDispatchToProps = (dispatch, props) => ({
//   deletePosition: () => dispatch(deletePosition())
// });


export default ProductInfo;
