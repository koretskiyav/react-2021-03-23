import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { orderProcessingStatusSelector } from '../../redux/selectors';
import styles from './error-page.module.css';

const ErrorPage = ({ processStatus }) => {
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <p className={styles.description}>{processStatus}</p>
        </div>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  processStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  processStatus: orderProcessingStatusSelector(state),
});

export default connect(mapStateToProps)(ErrorPage);
