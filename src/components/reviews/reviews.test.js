import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const testReviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render', () => {
    const wrapper = mount(<Reviews reviews={testReviews} />);
    expect(wrapper.find('[data-id="reviews"]').length).toBe(1);
  });

  it('should contain elements', () => {
    const wrapper = mount(<Reviews reviews={testReviews} />);
    expect(wrapper.find('[data-id="review-item"]').length).toBe(
      testReviews.length
    );
  });
});
