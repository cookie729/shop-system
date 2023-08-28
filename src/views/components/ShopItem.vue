<template>
  <div>
    <nav class="header">
      <ul class="grid">
        <li class="nav-item">ホーム</li>
        <li class="nav-item">商品</li>
        <li class="nav-item">店舗</li>
        <li class="nav-item">お問合せ</li>
        <li class="nav-item">ホーム</li>
        <li class="nav-item">商品</li>
        <li class="nav-item">店舗</li>
        <li class="nav-item">お問合せ</li>
        <li class="nav-item">ホーム</li>
        <li class="nav-item">商品</li>
        <li class="nav-item">店舗</li>
        <li class="nav-item">お問合せ</li>
        <li class="nav-item">ホーム</li>
        <li class="nav-item">商品</li>
        <li class="nav-item">店舗</li>
        <li class="nav-item">お問合せ</li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
};
</script>

<style>
li {
  list-style: none;
}

.header {
  background-color: rgb(56, 109, 243);
  color: white;
  font-size: 1rem;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 50px 50px;
}

.nav-item {
  width: 100%;
  text-align: center;
  padding: 15px;
  transition-duration: 0.3s;
  margin: 5px;
  width: 20%;
}
.nav-item:hover {
  background-color: rgb(85, 129, 241);
  transition-duration: 0.3s;
}

.bl {
  border-right: 1px solid #ffffff;
}
</style>
