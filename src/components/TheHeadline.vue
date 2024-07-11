<template>
  <section>
    <h1>{{ action }} for every one</h1>
    <h2>find your next job at Legend corp.</h2>
  </section>
</template>

<script>
export default {
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.interval)
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        const currentActionIndex = actions.indexOf(this.action)
        const nextActionIndex = (currentActionIndex + 1) % 4
        const nextAction = actions[nextActionIndex]
        this.action = nextAction
      }, 3000)
    }
  }
}
</script>
