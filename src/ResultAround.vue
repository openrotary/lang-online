<template lang="tea">
  textarea.code {
      readonly
      v-model: renderCode
  }
</template>

<script>
// html.parsers.html
import prettier from 'prettier/standalone'
import prettierHTML from 'prettier/parser-html'
import teaLoader from 'tea-loader/dist/teaLoader.js'
export default {
    name: 'ResultAround',
    props: {
        code: {
            type: String,
            default: ``
        }
    },
    computed: {
        renderCode() {
            let code = ''
            try {
                code = teaLoader(`${this.code}\n` || '')
            } catch (e) {
                code = ''
            }
            const _res = prettier.format(`<template>\n${code}</template>`, {
                tabWidth: 4,
                parser: 'vue',
                plugins: [prettierHTML]
            })
            const res = _res.match(/(?<=<template>\s)[\s\S]+(?=<\/template\s*>)/gm)
            return res ? res[0] : ''
        }
    }
}
</script>

<style lang="stylus" scoped>
    .code {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.6);
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border: none;
        height: 40vh;
        z-index: 3;
        line-height: 1.5em;
        background: rgba(71, 88, 92, 0.7);
        padding: 15px;
        box-sizing: border-box;
        overflow: auto;
        color: #c4c5c6;
    }
</style>
