<template>
  <div :class="[$style.homeSection, alternative ? $style.alternative : null]">
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <vue-video :src="video" :native="true" :class="$style.video" />
        </vue-grid-item>
        <vue-grid-item :class="$style.text"><slot /></vue-grid-item>
      </vue-grid-row>
    </vue-grid>
  </div>
</template>

<script lang="ts">
import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueVideo from '@components/VueVideo/VueVideo.vue';

export default {
  name: 'HomeSectionVideo',
  components: { VueVideo, VueGridItem, VueGridRow, VueGrid },
  props: {
    video: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    flip: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" module>
@import '~@/app/shared/design-system';

.homeSection {
  padding: $space-48 0;

  @include mediaMin(tabletPortrait) {
    padding: $space-84 0;
  }
}

.alternative {
  background: $brand-bg-color-variant;
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 600px;
  min-width: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;

  &:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02);
  }

  @include mediaMin(tabletPortrait) {
    min-height: 350px;
    margin-bottom: 0;
  }
}

.video {
  border-radius: 5px;
  margin-left: $space-16;

  &:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02);
  }

  @include mediaMin(tabletPortrait) {
    min-width: 600px;
    min-height: 600px;
    margin-bottom: 0;
  }
}
</style>
