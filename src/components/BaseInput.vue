<template>
    <label for="input">{{ labelName }}</label>
    <input type="text" v-model="dataName">
</template>

<script >
export default {
    name: 'BaseInput',
    props: {
        labelName: '',
        dataName: ''
    }
}
</script>

<style>

</style>