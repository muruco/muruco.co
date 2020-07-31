<template>
  <component
    :is="component"
    ref="video"
    frameborder="0"
    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>

<script lang="ts">
export default {
  name: 'VueVideo',
  components: {},
  props: {
    native: {
      type: Boolean,
      default: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  data(): any {
    return {
      observer: null,
    };
  },
  computed: {
    component() {
      return this.native ? 'iframe' : 'div';
    },
  },
  methods: {
    setVideo() {
      if (this.native) {
        this.$refs.video.src = this.src;
      } else {
        this.$refs.video.src = this.src;
      }
    },
    handleObserver(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.intersectionRatio > 0) {
          this.setVideo();
          this.observer.disconnect();
        }
      });
    },
    createObserver() {
      this.observer = new IntersectionObserver(this.handleObserver, { rootMargin: '0px', threshold: 0.1 });
      this.observer.observe(this.$refs.video);
    },
  },
  mounted() {
    if ((window as any).IntersectionObserver) {
      this.createObserver();
    } else {
      this.setVideo();
    }
  },
};
</script>
