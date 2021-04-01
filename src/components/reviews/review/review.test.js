import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

import { restaurants } from '../../../fixtures';



Enzyme.configure({ adapter: new Adapter() });

const review = restaurants[0].reviews[0];

describe('review', () => {
  it('should render', () => {
    const wrapper = mount(<Review key={review.id} {...review}/>);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });

  it('should render name', () => {
    const wrapper = mount(<Review key={review.id} {...review}/>);
    expect(wrapper.find('[data-id="review-name"]').text()).toBe('Antony');
  });

  it('should render text', () => {
    const wrapper = mount(<Review key={review.id} {...review}/>);
    expect(wrapper.find('[data-id="review-text"]').text()).toBe('Not bad');
  });
});