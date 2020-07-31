import { createLocalVue, mount } from '@vue/test-utils';
import HomeSectionVideo from './HomeSectionVideo.vue';

const localVue = createLocalVue();

describe('HomeSectionVideo.vue', () => {
  test('renders component with alternative background', () => {
    const wrapper = mount<any>(HomeSectionVideo, {
      localVue,
      propsData: {
        alternative: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.alternative');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });

  test('renders component in reversed order', () => {
    const wrapper = mount<any>(HomeSectionVideo, {
      localVue,
      propsData: {
        flip: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.flip');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
