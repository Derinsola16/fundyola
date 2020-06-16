<template>
  <main class="category">
    <Search />
    <div class="container">
      <div class="mt-32 d-flex justify-content-between">
        <div class="d-flex flex-row">
          <div class="text-primary mr-12 categories">
            <div class="side">
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
              <p>Lord</p>
              <p>Jesus</p>
              <p>Kola</p>
            </div>
          </div>
        </div>
        <CategoryCard />
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "category",
  components: {
    Search: () => import("@/components/Search.vue"),
    CategoryCard: () => import("@/components/CategoryCard.vue")
  }
};
</script>

<style scoped lang="scss">
.category {
  width: 100%;
  height: 100%;
  padding: auto;
  background-color: #ffffff;
  .categories {
    // background-color: #f5f5f5;
    width: 74px;
    height: 686px;
    position: sticky;
    top: 90px;
    bottom: 10px;
    border-radius: 5px;
  }
  .side {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 16px;
    font-weight: 600 !important;
  }
}
</style>
