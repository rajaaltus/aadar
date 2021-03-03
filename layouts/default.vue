<template>
  <div id="canvas">
    <div id="box_wrapper">
      <TopHeader />
      <Header />
      <PageTitle v-if="$route.path !== '/'" />
      <Nuxt />
      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>
