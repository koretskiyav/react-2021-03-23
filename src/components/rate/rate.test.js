import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

Enzyme.configure({ adapter: new Adapter() });

describe('Review', () => {
  it('should render', () => {
    const wrapper = mount(<Rate value={3} />);
    expect(wrapper.find('[data-id="rate"]').length).toBe(1);
    expect(wrapper.find('[data-id="star"]').length).toBe(10);
  });
});
