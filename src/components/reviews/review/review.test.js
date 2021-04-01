import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should have default user name', () => {
    const wrapper = mount(<Review {...review} user='' />);
    expect(wrapper.find('[data-id="user"]').text()).toBe('Anonymous');
  });

  it('should have default user name', () => {
    const wrapper = mount(<Review text='test' rating={4} />);
    expect(wrapper.find('[data-id="user"]').text()).toBe('Anonymous');
  });

  it('should have user name, rating, text', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="user"]').text()).toBe(review.user);
    expect(wrapper.find('[data-id="text"]').text()).toBe(review.text);
    expect(wrapper.find('[data-id="rating"]').length).toBe(1);
  });
});
