import Vue from 'vue'
Vue.mixin({
    methods: {
        jump (url) {
            this.$router.push({
                path: url
            })
        }
    }
})