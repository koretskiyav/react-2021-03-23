import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import Tabs from '../tabs';
import Restaurant from '../restaurant';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantIdsSelector,
  restaurantsLoadedSelector,
  restaurantsLoadingSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

const Restaurants = ({ restaurants, restaurantsId, loading, loaded, loadRestaurants }) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loadRestaurants, loading, loaded]);

  const match = useRouteMatch('/restaurants/:restId/:tabId');
  const tabId = match?.params.tabId || 'menu';

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/${tabId}`,
  }));

  return (
    <div>
      <Tabs tabs={tabs} />
      <Switch>
        <Route path="/restaurants/:restId">
          {({ match }) => restaurantsId.includes(match.params.restId)
                          ? <Restaurant id={match.params.restId} />
                          : <Route component={() => <p>404 - not found :(</p>} />
          }
        </Route>
        <Redirect from="/restaurants" to={tabs[0].to} />
      </Switch>
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsListSelector(state),
  restaurantsId: restaurantIdsSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

export default connect(mapStateToProps, { loadRestaurants })(Restaurants);
