<script lang="ts">
import {
  defineComponent, ref, watchEffect, onMounted, reactive,
} from '@vue/composition-api';
import {
  f7App, f7Views, f7View, f7Toolbar, f7Link,
} from 'framework7-vue';

// import PWA from '../js/pwa';
import routes from '@/routes';

export default defineComponent({
  components: {
    f7App, f7Views, f7View, f7Toolbar, f7Link,
  },
  setup() {
    const activeTab = ref('today');
    const refToday = ref(null);
    const refSubject = ref(null);
    const refGames = ref(null);
    const refApps = ref(null);
    const refs = reactive({
      today: refToday,
      games: refGames,
      apps: refApps,
      subject: refSubject,
    });
    let previousTab = ref('');

    onMounted(() => {
      watchEffect(() => {
        previousTab = activeTab;
      });
    });

    // Framework7 Parameters
    const f7params = {
      name: 'AppStore',
      theme: 'ios',
      routes,
      autoDarkTheme: true,
    };
    // if (process.env.NODE_ENV === 'production') {
    // // Register service worker in production mode only
    //   PWA.init();
    // }

    function onTabLinkClick(tab) {
      if (previousTab.value !== activeTab.value) return;
      if (activeTab.value === tab) {
        /** @todo need to update */
        // refs[tab].$f7.views.main.router.back();
        // (refs[tab] as any).$f7.router.back();
        // $(`#view-${tab}`)[0].f7View.router.back();
      }
    }

    return {
      onTabLinkClick,
      f7params,
      activeTab,
      previousTab,
      refToday,
      refGames,
      refApps,
      refSubject,
      refs,
    };
  },
});

</script>

<template>
  <f7-app :params="f7params">
    <f7-views tabs class="safe-areas">
      <f7-toolbar tabbar labels bottom>
        <f7-link
          :click="onTabLinkClick('today')"
          tabLink="#view-today"
          iconF7="calendar_today"
          text="Today"
          ref="refToday"
        />
        <f7-link
          :click="onTabLinkClick('subject')"
          tabLink="#view-subject"
          tabLinkActive
          iconF7="briefcase"
          text="Subjects"
          ref="refSubject"
        />
        <f7-link
          :click="onTabLinkClick('games')"
          tabLink="#view-games"
          iconF7="rocket_fill"
          text="Games"
          ref="refGames"
        />
        <f7-link
          :click="onTabLinkClick('apps')"
          tabLink="#view-apps"
          iconF7="layers_alt_fill"
          text="Apps"
          ref="refApps"
        />
      </f7-toolbar>
      <f7-view
        id="view-today" v-on:tabShow="activeTab='today'" tab url="/today/" />
      <f7-view
        id="view-subject" v-on:tabShow="activeTab='subject'" main tabActive tab url="/subject/" />
      <f7-view
        id="view-games" v-on:tabShow="activeTab='games'" tab url="/games/" />
      <f7-view
        id="view-apps" v-on:tabShow="activeTab='apps'" tab url="/apps/" />
    </f7-views>
  </f7-app>
</template>
