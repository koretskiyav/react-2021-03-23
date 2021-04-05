import { deletePosition } from '../../redux/actions';
import { connect } from 'react-redux';

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

const mapStateToProps = (state, props) => ({
  amount: state.order[props.id] || 0,
});

const mapDispatchToProps = (dispatch, props) => ({
  deletePosition: () => dispatch(deletePosition(props.id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
