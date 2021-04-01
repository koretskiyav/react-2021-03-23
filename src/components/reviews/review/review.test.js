import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const testReview = restaurants[0].reviews[0];

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...testReview} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
    expect(wrapper.find('[data-id="user"]').length).toBe(1);
    expect(wrapper.find('[data-id="text"]').length).toBe(1);
    expect(wrapper.find('[data-id="rating"]').length).toBe(1);
  });
});
