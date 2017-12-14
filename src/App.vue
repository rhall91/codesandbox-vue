<template>
	<div id="app">
    <todo></todo>
    <counter></counter>
	</div>
</template>

<script>
import Counter from './components/Counter.vue';
import Todo from './components/Todo.vue';

export default {
  name: 'app',
  components: { Counter, Todo }
};
</script>

<style>
body,
input {
  font-family: 'Exo 2', sans-serif;
  font-size: 16px;
}
</style>
