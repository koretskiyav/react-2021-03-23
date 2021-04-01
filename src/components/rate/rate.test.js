import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Rate from './rate';

import { restaurants } from '../../fixtures';

Enzyme.configure({ adapter: new Adapter() });

const rating = restaurants[0].reviews[0].rating;

describe('Rate', () => {
  it('should render', () => {
    const wrapper = mount(<Rate rating={rating} />);
    expect(wrapper.find('[data-id="rating"]').length).toBe(1);
  });
});
