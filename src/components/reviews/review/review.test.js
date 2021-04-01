import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    const { user, name, rating } = review;
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should has h4 wrapper for name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-name"]').is('h4')).toBe(true);
  });

  it('should has p wrapper for comment', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-comment"]').is('p')).toBe(true);
  });

  it('should has container for rating', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review-rating"]').exists()).toBe(true);
  });
});
