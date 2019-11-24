<template lang="tea">
  section.code-around {
      textarea#code
      slot
  }
</template>

<script>
import CodeMirror from "codemirror/lib/codemirror";
import "codemirror/lib/codemirror.css";
export default {
  name: "CodeAround",
  mounted() {
    const _this = this;
    const code = document.getElementById("code");
    const editor = CodeMirror.fromTextArea(code, {
      lineNumbers: true,
      smartIndent: true,
      matchBrackets: true
    });
    editor.on("change", code => {
      _this.$emit("code-change", code.getValue());
    });
    editor.addKeyMap({
      name: "autoInsertParentheses",
      "'('": cm => {
        const cur = cm.getCursor();

        cm.replaceRange("()", cur, cur, "+insert");
        cm.doc.setCursor({ line: cur.line, ch: cur.ch + 1 });
      },
      "'{'": cm => {
        const cur = cm.getCursor();

        cm.replaceRange("{}", cur, cur, "+insert");
        cm.doc.setCursor({ line: cur.line, ch: cur.ch + 1 });
      }
    });
  }
};
</script>

<style lang="stylus">
.code-around {
  flex: 1;
  overflow: auto;
  padding-bottom: 40vh;

  .CodeMirror {
    font-size: 15px;
    width: 100%;
    height: 100%;
  }
}
</style>
