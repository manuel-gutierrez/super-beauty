<template>
  <div class="profile-info-accordion" role="tab-list">
    <ProfileInfoAccordionItem id="item-1" title="Hola">
      <template v-slot:item-body>
        <p>item 1</p>
        <p>item 2</p>
        <p>item 3</p>
        <p>item 4</p>
      </template>
    </ProfileInfoAccordionItem>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
