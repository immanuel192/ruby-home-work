<script lang="ts">
import {
  computed, defineComponent,
} from '@vue/composition-api';
import AppstorePage from '@/components/AppstorePage.vue';
import AppstorePageTitle from '@/components/AppstorePageTitle.vue';
import AppstoreCard from '@/components/AppstoreCard.vue';

import { reactiveDate } from '@/reactive';
import { injectStore } from '@/share';

export default defineComponent({
  name: 'today',
  components: {
    AppstorePage,
    AppstorePageTitle,
    AppstoreCard,
  },
  setup () {
    const store = injectStore();
    const subjects = computed(() => store.getters.groupedSubjects);
    const firstSubject = subjects.value[0].key;
    const { currentDateTitle: todayDateTitle } = reactiveDate();

    return {
      todayDateTitle,
      subjects,
      firstSubject,
    };
  },
});
</script>

<template>
  <appstore-page noCollapsedNavbar>
    <template v-for="groupedSubject in subjects">
      <appstore-page-title :key="`${groupedSubject.key}-title`"
        :title="groupedSubject.key"
        :heading="groupedSubject.key === firstSubject ? todayDateTitle : ''"
        :accountLink="groupedSubject.key === firstSubject " />
      <div class="appstore-card-grid" :key="`${groupedSubject.key}-main`">
        <appstore-card
          v-for="subject in groupedSubject.items"
          :key="subject.id"
          :subjectId="subject.id"
          v-bind="subject.styleConfig" >
        </appstore-card>
      </div>
    </template>
  </appstore-page>
</template>
