<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <h1 class="logo">S</h1>
            </li>
            <li class="nav-item">
              <a class="navbar-brand name-shop" href="#">Shopka</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sell on Shopka</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My cart</a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2 input-search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <span class="text-primary">Consumer Electronics</span>
          </form>
          <div class="group-auth">
            <button type="button" class="btn btn-outline-primary">
              Sign in
            </button>
            <button type="button" class="btn btn-outline-primary">
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style lang="scss">
@import "../resources/styles/header.style.scss";
</style>
