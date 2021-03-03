<template>
  <footer
    class="bg-color-footer w-full text-white flex justify-between items-center mt-5"
  >
    <div class="ml-6 my-4">
      <p class="text-xs md:text-2xl">@Team-Vue-12</p>
    </div>
    <nav class=" my-4 mr-6">
      <a
        href="https://www.youtube.com/channel/UC0oi8uH1vxDcyt7b_3iByew"
        target="_blank"
        class=" mx-2 md:mx-1"
        ><span class="icon-youtube md:text-3xl"></span
      ></a>
      <a
        href="https://www.instagram.com/comfeco/"
        target="_blank"
        class="mx-2 md:mx-1"
        ><span class="icon-instagram md:text-3xl"></span
      ></a>
      <a href="https://twitter.com/comfeco" target="_blank" class="mx-2 md:mx-1"
        ><span class="icon-twitter md:text-3xl"></span
      ></a>
      <a
        href="https://discord.com/invite/5Bb5yvzNPr"
        target="_blank"
        class="mx-2 md:mx-1"
        ><span class="icon-discord md:text-3xl"></span
      ></a>
      <a
        href="https://www.linkedin.com/company/comfeco2021/"
        target="_blank"
        class="rounded-full mx-2 md:mx-1 "
        ><span class="icon-linkedin md:text-3xl"></span
      ></a>
      <a
        href="https://www.facebook.com/groups/2637132626546045"
        target="_blank"
        class="ml-2 md:mr-12"
        ><span class="icon-facebook md:text-3xl"></span
      ></a>
    </nav>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.bg-color-footer {
  background: var(--bgfooter);
}
.icon-facebook,
.icon-youtube,
.icon-instagram,
.icon-twitter,
.icon-discord,
.icon-linkedin {
  font-size: 20px;
}
</style>
