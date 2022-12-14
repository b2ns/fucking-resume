<script setup>
import data from '../data/resume';
import Banner from './components/Banner.vue';
import Icon from './components/Icon.vue';

const {
  name,
  job,
  phone,
  city,
  email,
  link,
  avatar,
  education,
  skill,
  work,
  project,
  other,
  showPoweredBy,
} = data;

const resumeEntries = {
  education,
  skill,
  work,
  project,
  other,
};
// bind key to the object
for (const key in resumeEntries) {
  if (resumeEntries[key]) {
    resumeEntries[key].key = key;
  }
}

const resumeItems = Object.keys(resumeEntries)
  .map((key) => resumeEntries[key])
  .filter(Boolean)
  .sort((a, b) => a.order - b.order);
</script>

<template>
  <div class="resume flex flex-vertical flex-justify">
    <!-- header -->
    <header class="resume__header">
      <div class="flex flex-middle h100">
        <div class="resume__header-left">
          <p class="resume__text-wrapper">
            <Icon :icon="name.icon" style="font-size: 7mm" />
            <span class="resume__header-name">{{ name.value }}</span>
          </p>
          <p
            v-if="job"
            class="resume__text-wrapper flex-center"
            style="margin-top: 4mm"
          >
            <Icon :icon="job.icon" />
            <span class="resume__header-job">{{ job.value }}</span>
          </p>
        </div>
        <table
          class="resume__header-right"
          :class="{ 'with-avatar': avatar && avatar.show !== false }"
        >
          <tr>
            <td>
              <p class="resume__text-wrapper">
                <Icon :icon="phone.icon" />
                <span>{{ phone.value }}</span>
              </p>
            </td>
            <td>
              <p v-if="city" class="resume__text-wrapper">
                <Icon :icon="city.icon" />
                <span>{{ city.value }}</span>
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p class="resume__text-wrapper">
                <Icon :icon="email.icon" />
                <span>{{ email.value }}</span>
              </p>
            </td>
            <td>
              <p v-if="link" class="resume__text-wrapper">
                <Icon :icon="link.icon" />
                <a :href="link.url" style="color: #fff">{{
                  link.value || link.url
                }}</a>
              </p>
            </td>
          </tr>
        </table>
      </div>
      <img
        v-if="avatar && avatar.show !== false"
        class="resume__avatar"
        :src="avatar.url"
        alt="avatar"
      />
    </header>

    <template v-for="resumeItem of resumeItems" :key="resumeItem.key">
      <!-- education -->
      <Banner
        v-if="resumeItem.key === 'education' && resumeItem.show !== false"
        :title="resumeItem.title"
        :icon="resumeItem.icon"
      >
        <table
          v-for="(item, index) of resumeItem.list"
          :key="index"
          class="resume__item w100 text-center"
        >
          <tr>
            <td class="text-left">{{ item.college }}</td>
            <td>{{ item.time }}</td>
            <td>{{ item.major }}</td>
            <td class="text-right">{{ item.degree }}</td>
          </tr>
        </table>
      </Banner>

      <!-- skill -->
      <Banner
        v-if="resumeItem.key === 'skill' && resumeItem.show !== false"
        :title="resumeItem.title"
        :icon="resumeItem.icon"
      >
        <table class="w100">
          <template v-for="(item, index) of resumeItem.list" :key="index">
            <tr v-if="(index & 1) === 0">
              <td>
                <p class="resume__item" v-html="item"></p>
              </td>
              <td>
                <p
                  v-if="index + 1 < resumeItem.list.length"
                  class="resume__item"
                  v-html="resumeItem.list[index + 1]"
                ></p>
              </td></tr
          ></template>
        </table>
      </Banner>

      <!-- work -->
      <Banner
        v-if="resumeItem.key === 'work' && resumeItem.show !== false"
        :title="resumeItem.title"
        :icon="resumeItem.icon"
      >
        <div
          v-for="(item, index) of resumeItem.list"
          :key="index"
          class="resume__item"
        >
          <table class="w100 text-center">
            <tr>
              <td class="text-left">{{ item.company }}</td>
              <td>{{ item.time }}</td>
              <td v-if="item.department">{{ item.department }}</td>
              <td v-if="item.title" class="text-right">{{ item.title }}</td>
            </tr>
          </table>
          <p
            v-if="item.events"
            v-for="(ev, idx) of item.events"
            :key="idx"
            class="resume__item"
            v-html="ev"
          ></p>
        </div>
      </Banner>

      <!-- project -->
      <Banner
        v-if="resumeItem.key === 'project' && resumeItem.show !== false"
        :title="resumeItem.title"
        :icon="resumeItem.icon"
      >
        <div
          v-for="(item, index) of resumeItem.list"
          :key="index"
          class="resume__item"
        >
          <div class="flex">
            <span>{{ item.name }}</span>
            <span class="flex-item-1" />
            <span class="resume__project-desc">{{ item.desc }}</span>
          </div>
          <p
            v-for="(ev, idx) of item.events"
            :key="idx"
            class="resume__item"
            v-html="ev"
          ></p>
        </div>
      </Banner>

      <!-- other -->
      <Banner
        v-if="resumeItem.key === 'other' && resumeItem.show !== false"
        :title="resumeItem.title"
        :icon="resumeItem.icon"
      >
        <p
          v-for="(item, index) of resumeItem.list"
          :key="index"
          class="resume__item"
          v-html="item"
        ></p>
      </Banner>
    </template>

    <!-- footer -->
    <footer class="resume__footer flex flex-middle flex-right">
      <span v-if="showPoweredBy">powered by Vue & Vite & Fontawesome</span>
    </footer>
  </div>
</template>

<style lang="less">
.resume {
  box-sizing: content-box;
  position: relative;
  width: var(--paper-width);
  height: var(--paper-height);
  margin: 0 auto;
  border: 1px solid #eee;
  background-color: var(--bg-color);
  color: var(--text-color);
  font-size: var(--fs);
  &__text-wrapper {
    display: flex;
    align-items: center;
  }
  &__header {
    position: relative;
    height: var(--header-height);
    margin: var(--header-margin);
    padding: var(--header-padding);
    background-color: var(--primary-color);
    color: var(--text-color-invert);
    font-size: var(--fs-lg);
    transition: background-color var(--transition-time);
    &-left {
      text-align: center;
    }
    &-name {
      font-size: var(--header-name-size);
    }
    &-right {
      margin-left: 25mm;
      &.with-avatar {
        margin-left: 12mm;
      }
      td {
        padding: 1.5mm 3mm;
      }
    }
  }
  &__avatar {
    position: absolute;
    width: var(--avatar-width);
    /* height: var(--avatar-height); */
    top: 8mm;
    right: 4mm;
    z-index: 1;
  }
  &__footer {
    height: var(--footer-height);
    padding-right: 2mm;
    background-color: var(--primary-color);
    color: var(--text-color-invert);
    text-align: right;
    font-size: var(--fs-xs);
    transition: background-color var(--transition-time);
  }
  &__item {
    position: relative;
    margin: var(--list-item-margin);
    padding: var(--list-item-padding);
    line-height: var(--list-item-line-height);
    &::before {
      content: '';
      position: absolute;
      top: 6px;
      left: 0;
      width: var(--list-dot-size);
      height: $width;
      border-radius: 50%;
      background-color: var(--list-dot-color);
    }
    & & {
      &::before {
        border: 1px solid var(--list-dot-o-border-color);
        background-color: var(--list-dot-o-color);
      }
      color: var(--text-color-secondary);
    }
  }
  &__project {
    &-desc {
      color: var(--desc-color);
    }
  }
  .faicon {
    margin-right: 2mm;
    font-size: 4mm;
  }
}
</style>
