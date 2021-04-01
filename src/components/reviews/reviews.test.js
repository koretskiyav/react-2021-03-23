import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Reviews from './reviews';

Enzyme.configure({ adapter: new Adapter() });

import { restaurants } from '../../fixtures';
const reviews = restaurants[0].reviews;

describe('Reviews', () => {
  it('should render all the reviews', () => {
    const wrapper = mount(<Reviews reviews={reviews} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(reviews.length);
  });

});
