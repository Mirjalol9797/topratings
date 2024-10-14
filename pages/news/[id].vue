<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

import CategoryLastTen from "../index/modules/CategoryLastTen.vue";
import CategoryAllTopMain from "../index/modules/CategoryAllTopMain.vue";
</script>

<template>
  <div class="news-detail">
    <div class="site-container">
      <div class="flex">
        <div class="w-[68%]">
          <div class="font-medium text-3xl mb-6">
            O‘zbekistonning qator viloyatlarida 11-oktyabr kuni yomg‘ir yog‘ishi
            kutilmoqda
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            incidunt reprehenderit laboriosam corporis nostrum harum officia
            numquam beatae hic, perferendis itaque accusamus distinctio
            accusantium? Harum ea dicta aliquam pariatur alias asperiores
            facilis quos suscipit labore, eius exercitationem excepturi?
            Perspiciatis, debitis repudiandae mollitia velit sapiente earum
            veritatis odio consequatur quisquam modi minima ea sunt nemo
            blanditiis! Aliquam quas praesentium qui temporibus numquam eius
            corrupti iste, fugiat magnam maxime? Quidem quaerat animi dolores
            quisquam sapiente voluptates suscipit provident? Nulla
            exercitationem alias optio amet molestiae, unde laborum placeat
            pariatur vero et fuga voluptatibus cum, enim, tempore dolores
            consequuntur officia voluptatem beatae eum quaerat!
          </div>

          <CategoryAllTopMain />
        </div>
        <div class="w-[29%] ml-[3%]">
          <CategoryLastTen />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
