<template>
  <main>
    <section class="flex flex-col h-screen bg-yellow-200 pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1">1 column</div>

        <div class="col-span-5 col-start-2">1 column</div>

        <div class="col-span-5 col-start-7">1 column</div>

        <div class="col-span-1 col-start-12">1 column</div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>
