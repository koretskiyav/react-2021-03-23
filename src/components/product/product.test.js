import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Product from './product';

import { restaurants } from '../../fixtures';
const amount = 1;

Enzyme.configure({ adapter: new Adapter() });

const product = restaurants[0].menu[0];

describe('Product', () => {
  it('should render', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product"]').length).toBe(1);
  });

  it('should init from 0 amount', () => {
    const wrapper = mount(<Product product={product} />);
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should increment amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });

  it('should fetch data', () => {
    const fn = jest.fn();
    mount(<Product product={product} fetchData={fn} />);
    expect(fn).toBeCalledWith(product.id);
  });

  it('should decrement amount with 0 must be always 0', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });

  it('should decrement amount', () => {
    const wrapper = mount(<Product product={product} />);
    wrapper.find('[data-id="product-increment"]').simulate('click');
    wrapper.find('[data-id="product-increment"]').simulate('click');
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('1');
  });

  it('should decrement amount without click increment', () => {
    const wrapper = mount(<Product product={product} amount={amount} />);
    wrapper.find('[data-id="product-decrement"]').simulate('click');
    expect(wrapper.find('[data-id="product-amount"]').text()).toBe('0');
  });
});
