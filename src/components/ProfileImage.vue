<template>
  <img v-bind:src="imageLink" alt="profile image" class="h-8 w-8 rounded-3xl object-contain" />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imageLink:
        'https://as2.ftcdn.net/v2/jpg/04/23/14/01/1000_F_423140127_ptoRcQbd7JJkJg8q47LAEut7y7jx0DIg.jpg'
    }
  }
}
</script>
