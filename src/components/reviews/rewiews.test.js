import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';
import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });
const reviews = restaurants[0].reviews;
let oneReview = restaurants[0].reviews.slice(0, 1);
const reviewWithoutUserName = (review) => {
  delete review[0].user;
  return review;
};
const reviewsWithout = [];

describe('Reviews', () => {
  it('should render when there is reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').exists()).toBeTruthy();
  });

  it('should not render when no reviews', () => {
    const wrapper = mount(<Reviews reviews={reviewsWithout} />);
    expect(wrapper.find('[data-id="review"]').exists()).toBeFalsy();
  });

  it('should render 1 review when there is 1 review', () => {
    const wrapper = mount(<Reviews reviews={oneReview} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render name user Anonymous, if no user', () => {
    const wrapper = mount(
      <Reviews reviews={reviewWithoutUserName(oneReview)} />
    );
    expect(wrapper.find('[data-id="user"]').text()).toBe('Anonymous');
  });
});
