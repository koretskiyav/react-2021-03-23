import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import Review from './review';
import { restaurants } from '../../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('Review', () => {
  it('should display `Anonymous` if there`s no user name', () => {
    const wrapper = mount(<Review text={review.text} rating={review.rating}/>);
    expect(wrapper.find('[data-id="review-user"]').text()).toBe('Anonymous');
  });

});