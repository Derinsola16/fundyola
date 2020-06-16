<template>
  <main class="slider">
    <div id="demo" class="carousel slide mb-32" data-ride="carousel">
      <!-- Indicators -->
      <ul class="carousel-indicators">
        <li data-target="#demo" data-slide-to="0" class="active"></li>
        <li data-target="#demo" data-slide-to="1"></li>
        <li data-target="#demo" data-slide-to="2"></li>
      </ul>

      <!-- The slideshow -->
      <div class="d-flex justify-content-between">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="@/assets/image15.png"
              alt="Los Angeles"
              width="1100"
              height="500"
            />
            <div class="carousel-caption">
              <h3>Los Angeles</h3>
              <p>We had such a great time in LA!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/image6.png"
              alt="Chicago"
              width="1100"
              height="500"
            />
            <div class="carousel-caption">
              <h3>Chicago</h3>
              <p>Thank you, Chicago!</p>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="@/assets/image29.png"
              alt="New York"
              width="1100"
              height="500"
            />
            <div class="carousel-caption">
              <h3>New York</h3>
              <p>We love the Big Apple!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Left and right controls -->
      <!-- <a class="carousel-control-prev" href="#demo" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </a>
      <a class="carousel-control-next" href="#demo" data-slide="next">
        <span class="carousel-control-next-icon"></span>
      </a> -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
.slider {
  .carousel-inner img {
    width: 100%;
    // height: 100%;
  }

  .carousel-indicators {
    bottom: -40px !important;
  }
  .carousel-indicators > li {
    border-radius: 50%;
    width: 12px;
    height: 12px;
    background-color: #ffb300;
  }

  img {
    background-color: #000 !important;
  }
}
</style>
