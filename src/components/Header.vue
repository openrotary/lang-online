<template lang="tea">
  header.header {
    ~~Tea语言
  }
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.header {
  flex-shrink: 0;
  height: 50px;
  width: 100%;
  background: #47585c;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
  color: #f2f3f4;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 4;
}
</style>
