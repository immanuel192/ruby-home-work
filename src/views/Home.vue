<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <section class="mb-5 text-center">

      <h2 class="my-5 h3">Tutorials
        <span class="font-weight-bold text-info">&amp;</span> education
      </h2>

      <!--Grid row-->
      <div class="row">

        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fab fa-bootstrap fa-10x deep-purple-text"></i>
            <a
              href="https://mdbootstrap.com/education/bootstrap/"
              alt="Tutorials: Bootstrap tutorial logo"
            >
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>Bootstrap
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/bootstrap/"
            class="btn btn-info btn-sm waves-effect waves-light"
            alt="Tutorials: Bootstrap tutorial button"
          >Start
            tutorial</a>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fab fa-wordpress fa-10x blue-grey-text"></i>
            <a
              href="https://mdbootstrap.com/education/wordpress/"
              alt="Tutorials: WordPress tutorial logo"
            >
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>WordPress
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/wordpress/"
            alt="Tutorials: WordPress tutorial button"
            class="btn btn-info btn-sm waves-effect waves-light"
          >Start
            tutorial</a>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fab fa-vuejs fa-10x green-text"></i>
            <a
              href="https://mdbootstrap.com/education/vue/"
              alt="Tutorials: Vue tutorial logo"
            >
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>Vue
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/vue/"
            alt="Tutorials: Vue tutorial button"
            class="btn btn-info btn-sm waves-effect waves-light"
          >Start
            tutorial</a>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

      <!--Grid row-->
      <div class="row mt-2">

        <!--Grid column-->
        <div class="col-lg-4 col-md-12 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fab fa-react fa-10x cyan-text"></i>
            <a
              href="https://mdbootstrap.com/education/react/"
              alt="Tutorials: React tutorial logo"
            >
              <div class="mask rgba-white-slight waves-effect waves-light"></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>React
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/react/"
            alt="Tutorials: React tutorial button"
            class="btn btn-info btn-sm waves-effect waves-light"
          >Start
            tutorial</a>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fab fa-angular fa-10x red-text"></i>
            <a href="https://mdbootstrap.com/education/angular/">
              <div
                class="mask rgba-white-slight waves-effect waves-light"
                alt="Tutorials: Angular tutorial logo"
              ></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>Angular
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/angular/"
            alt="Tutorials: Angular tutorial button"
            class="btn btn-info btn-sm waves-effect waves-light"
          >Start
            tutorial</a>

        </div>
        <!--Grid column-->

        <!--Grid column-->
        <div class="col-lg-4 col-md-6 mb-4">

          <!--Featured image-->
          <div class="view overlay">
            <i class="fas fa-graduation-cap fa-10x text-default"></i>
            <a
              href="https://mdbootstrap.com/education/"
              alt="Tutorials: Browse tutorials logo"
            >
              <div
                class="mask rgba-white-slight waves-effect waves-light"
                alt="Browse tutorials"
              ></div>
            </a>
          </div>

          <!--Excerpt-->
          <h4 class="my-3 font-weight-bold dark-grey-text">
            <strong>All tutorials
            </strong>
          </h4>
          <a
            href="https://mdbootstrap.com/education/"
            class="btn btn-outline-info h1 btn-sm waves-effect waves-light"
            alt="Tutorials: Browse tutorials button"
          >Browse tutorials</a>

        </div>
        <!--Grid column-->

      </div>
      <!--Grid row-->

    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
};
</script>
