<template lang="tea">
  div#app.app {
    Header
    section.main {
      CodeAround {
        @code-change="handleCodeChange"
      }
      ResultAround {
        :code: code
      }
    }
  }
</template>

<script>
import Header from "@/components/Header";
import CodeAround from "@/CodeAround";
import ResultAround from "@/ResultAround";
export default {
  name: "app",
  components: {
    Header,
    CodeAround,
    ResultAround
  },
  data: () => ({
    code: ""
  }),
  methods: {
    handleCodeChange(code) {
      this.code = code;
    }
  }
};
</script>

<style lang="stylus">
html, body {
  margin: 0;
  padding: 0;
}

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;

  .main {
    flex: 1;
    min-height: 500px;
    display: flex;
    position: relative;
  }
}

@media screen and (min-width: 960px) {
  .app {
    .header {
      height: 60px;
      font-size: 22px;
    }

    .main {
      .code-around {
        flex: 3;
        padding: 0;

        .CodeMirror {
          font-size: 20px;
        }
      }

      .code {
        flex: 2;
        height: 100%;
        position: relative;
        font-size: 18px;
      }
    }
  }
}

@media screen and (min-width: 1600px) {
  .app {
    .main {
      width: 1500px;
      margin: 50px auto;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);

      .code-around {
        .CodeMirror {
          font-size: 24px;
        }
      }

      .code {
        padding: 20px;
        font-size: 22px;
      }
    }
  }
}
</style>
