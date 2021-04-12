import React from 'react';
import PropTypes from 'prop-types';
import {loadProducts} from "../../redux/actions";
import Product from '../product';
import Basket from '../basket';
import Loader from "../loader";
import styles from './menu.module.css';
import {connect} from 'react-redux';
import {
    productsLoadedSelector,
    productsLoadingSelector,
    productsLoadError
} from '../../redux/selectors'

class Menu extends React.Component {
    static propTypes = {
        menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    };

    state = {error: null};

    loadData(){
        const {restourantId, loadProducts} = this.props;
        loadProducts(restourantId);

    }
    componentDidCatch(error) {
        this.setState({error});
    }

    componentDidMount() {this.loadData()
    }

    componentDidUpdate(prevProps){
        if(this.props.restourantId!==prevProps.restourantID) {
            this.loadData()
    }}

    render() {
        const {menu,loading,loaded,error} = this.props;

        if (error) {
            return <p>Сейчас меню этого ресторана недоступно :(</p>;
        }

        if (loading||!loaded) return <Loader/>
        return (
            <div className={styles.menu}>
                <div>
                    {menu.map((id) => (
                        <Product key={id} id={id}/>
                    ))}
                </div>
                <div>
                    <Basket/>
                </div>
            </div>
        );
    }
}



export default connect((state)=>({
    loading: productsLoadingSelector(state),
        loaded: productsLoadedSelector(state),
        error: productsLoadError(state),
}),{loadProducts})(Menu);
