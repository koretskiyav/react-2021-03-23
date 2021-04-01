import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import { restaurants } from '../../../fixtures';
import Review from './review';

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should be rendered', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render user name', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('h4').length).toBe(1);
  });

  it('should render review comment', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('p')).toBeTruthy();
  });

  it('should render rate', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="rate"]')).toBeTruthy();
  });
});
