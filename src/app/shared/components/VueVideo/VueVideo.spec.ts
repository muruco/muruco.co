import { createLocalVue, mount } from '@vue/test-utils';
import VueVideo from './VueVideo.vue';

const localVue = createLocalVue();

describe('VueVideo.vue', () => {
  test('renders native iframe', () => {
    const wrapper = mount<any>(VueVideo, {
      localVue,
      propsData: {
        src: 'foo',
        frameborder: '0',
        allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: 'allowfullscreen',
      },
    });
    const actual = wrapper.html();
    const expected =
      '<iframe frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="video" src="foo"></iframe>';

    expect(actual).toBe(expected);
  });

  test('renders iframe as div', () => {
    const wrapper = mount<any>(VueVideo, {
      localVue,
      propsData: {
        src: 'foo',
        native: false,
      },
    });
    const actual = wrapper.html();
    const expected =
      '<div frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="video"></div>';
    expect(actual).toBe(expected);
  });

  test('renders video via observer', () => {
    let disconnected = false;
    (window as any).IntersectionObserver = class IntersectionObserver {
      public cb: any;
      public options: any;

      constructor(cb: any, options: any) {
        this.cb = cb;
        this.options = options;
      }

      public observe() {
        this.cb([{ intersectionRatio: 0 }, { intersectionRatio: 1 }]);
      }

      public disconnect() {
        disconnected = true;
      }
    };
    const wrapper = mount<any>(VueVideo, {
      localVue,
      propsData: {
        src: 'foo',
        frameborder: '0',
        allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture',
        allowfullscreen: 'allowfullscreen',
      },
    });
    let actual: any = wrapper.html();
    let expected: any =
      '<iframe frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen" class="video" src="foo"></iframe>';

    wrapper.vm.observer.observe();

    expect(actual).toBe(expected);

    actual = disconnected;
    expected = true;

    expect(actual).toBe(expected);
  });
});
