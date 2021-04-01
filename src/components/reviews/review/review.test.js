import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Review from './review';

Enzyme.configure({ adapter: new Adapter() });

const review = {
  id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  user: 'Antony',
  text: 'Not bad',
  rating: 5,
};
const anonimusReview = {
  id: '5909796d-5030-4e36-adec-68b8f9ec2d96',
  text: 'Not bad',
  rating: 5,
};
describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="review"]').length).toBe(1);
  });
  it('should be name of user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="user-name"]').text()).toBe('Antony');
  });
  it('should be default name of user', () => {
    const wrapper = mount(<Review {...anonimusReview} />);
    expect(wrapper.find('[data-id="user-name"]').text()).toBe('Anonymous');
  });
  it('should be text of user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="user-comment"]').text()).toBe('Not bad');
  });
  it('should be rate of user', () => {
    const wrapper = mount(<Review {...review} />);
    expect(wrapper.find('[data-id="user-rate"]').length).toBe(1);
  });
});
