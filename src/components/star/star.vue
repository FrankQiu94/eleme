<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass,index) in itemClasses" :class="itemClass" class="star-item" key="index"></span>
  </div>
</template>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixin.styl";

  .star {
    font-size 0
    .star-item {
      display inline-block
      background-repeat no-repeat
    }
    &.star-48 {
      .star-item {
        width 20px
        height 20px
        margin-right 22px
        background-size 20px 20px
        &:last-child {
          margin-right 0
        }
        &.on {
          bg-image("star48_on")
        }
        &.half {
          bg-image("star48_half")
        }
        &.off {
          bg-image("star48_off")
        }
      }
    }
    &.star-36 {
        .star-item {
        width 15px
        height 15px
        margin-right 6px
        background-size 15px 15px
        &:last-child {
          margin-right 0
        }
        &.on {
          bg-image("star36_on")
        }
        &.half {
          bg-image("star36_half")
        }
        &.off {
          bg-image("star36_off")
        }
      }
    }
    &.star-24 {
        .star-item {
        width 10px
        height 10px
        margin-right 3px
        background-size 10px 10px
        &:last-child {
          margin-right 0
        }
        &.on {
          bg-image("star24_on")
        }
        &.half {
          bg-image("star24_half")
        }
        &.off {
          bg-image("star24_off")
        }
    }
  }
}
</style>

<script type="text/ecmascript-6">
const LENGTH = 5;
const CLS_ON = 'on';
const CLS_HALF = 'half';
const CLS_OFF = 'off';

  export default {
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return "star-" + this.size
      },
      itemClasses() {
        let result = [];
        // 将所有的数字归纳为0.5倍数---->
        // 当分数为4.3时，翻倍后为8.6，Math.floor后为8，除以2为4
        // 当分数为4.6时，翻倍后为9.2，Math.floor后为9，除以2为4.5
        // 符合规则：带超过0.5，给半星，未超过0.5，不给星
        let score = Math.floor(this.score * 2) / 2;
        // 判断是否存在小数0.5--->判断是否需要半星
        let hasDecimal = score % 1 !== 0;
        // 求出整数--->有多少个全星
        let integer = Math.floor(score);
        for (let i = 0; i < integer ; i++) {
          // 放全星
          result.push(CLS_ON);
        };
        if (hasDecimal) {
          // 放半星
          result.push(CLS_HALF)
        }
        while (result.length < LENGTH) {
          // 如果数组长度不足，则将剩余的部分由多少个不给星（灰星）填充
          result.push(CLS_OFF)
        }
        // 返回result
        return result;
      }
    }
  };
</script>
