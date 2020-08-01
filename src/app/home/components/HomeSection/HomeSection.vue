<template>
  <div
    :class="[
      $style.homeSection,
      alternative ? $style.alternative : $style.alternative2,
      alternative2 ? $style.alternative2 : $style.alternative3,
    ]"
  >
    <vue-grid>
      <vue-grid-row :class="[flip ? $style.flip : null]">
        <vue-grid-item :class="$style.image">
          <vue-image :src="image" :native="false" :class="$style.image" />
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
import VueImage from '@components/VueImage/VueImage.vue';

export default {
  name: 'HomeSection',
  components: { VueImage, VueGridItem, VueGridRow, VueGrid },
  props: {
    image: {
      type: String,
      required: true,
    },
    alternative: {
      type: Boolean,
    },
    alternative2: {
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
  background: #ffffff;
}
.alternative2 {
  background: #ff8b00;
}
s .alternative3 {
  background: #000155;
}

.flip {
  @include mediaMin(tabletPortrait) {
    flex-direction: row-reverse;
  }
}

.image {
  min-height: 256px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  margin-bottom: $space-32;
  border-radius: 10px;

  &:hover {
    -ms-transform: scale(1.02); /* IE 9 */
    -webkit-transform: scale(1.02); /* Safari 3-8 */
    transform: scale(1.02);
  }

  @include mediaMin(tabletPortrait) {
    min-height: 512px;
    margin-bottom: 0;
  }
}

.text {
  padding-top: 30px;
}
</style>
