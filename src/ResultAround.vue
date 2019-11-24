<template lang="tea">
  section.code {
      ~~{{ code | renderCode }}
  }
</template>

<script>
import teaLoader from "./teaLoader";
export default {
  name: "ResultAround",
  props: {
    code: {
      type: String,
      default: ``
    }
  },
  filters: {
    renderCode(_code) {
      return teaLoader(`${_code}\n` || "");
    }
  }
};
</script>

<style lang="stylus" scoped>
.code {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40vh;
  z-index: 3;
  background: rgba(71, 88, 92, 0.7);
  padding: 15px;
  box-sizing: border-box;
  overflow: auto;
  color: #f1f2f3;
}
</style>
