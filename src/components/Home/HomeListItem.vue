<template>
  <div class="item" @click="activateModal()">
    <div class="item__content">
      <div
        class="item__avatar"
        :style="{backgroundColor: randomColor}"
      >
        {{ avatar }}
      </div>
      <div class="item__name">{{ name }}</div>
      <div class="item__species">{{ species }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeListItem",
    data: () => ({
    }),
    props: {
      avatar: {
        type: String
      },
      name: {
        type: String
      },
      species: {
        type: String
      }
    },
    computed: {
      randomColor: function () {
        return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
      }
    },
    methods: {
      activateModal: function () {
        let color = this.randomColor;
        this.$store.commit('setColor', color);
        this.$emit('activateModal', color)
      }
    }
  }
</script>

<style scoped lang="scss">
  .item {
    width: 592px;
    height: 320px;
    background: #1A1A1A;
    border-radius: 8px;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.4);
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 32px;
    position: relative;
    animation: fadein 0.5s ease-in;
    &__content {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%,-50%);
    }
    &__avatar {
      width: 80px;
      height: 80px;
      background: #BB86FC;
      margin: 0 auto;
      border-radius: 50%;
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 80px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: #FFF;
    }
    &__name {
      font-weight: bold;
      font-size: 18px;
      line-height: 21px;
      text-align: center;
      margin: 10px 0;
      font-feature-settings: 'liga' off;
      color: #FFF;
    }
    &__species {
      font-size: 13px;
      line-height: 15px;
      text-align: center;
      font-feature-settings: 'liga' off;
      color: #808080;
    }
    &:hover {
      cursor: pointer;
      user-select: none;
      box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38);
      transition: 0.2s;
    }
    &:active {
      box-shadow: 0px 10px 40px rgba(37, 136, 167, 0.38);
    }
  }
  @keyframes fadein {
    from {
      opacity: 0;
      margin-top: 10px;
    }
    to {
      opacity: 1;
      margin-top: 0px;
    }
  }
</style>
