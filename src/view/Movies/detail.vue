<template>
  <div id="detailContrainer" class="slide-enter-active">
    <myheader title="影片详情">
      <i class="iconfont icon-right" @touchstart="handleToBack"></i>
    </myheader>
    <Loading v-if="isLoading" />
    <div v-else id="content" class="contentDetail">
      <div class="detail_list">
        <div
          class="detail_list_bg"
          :style="{ 'background-image': 'url(' + backgroundImg + ')' }"
        ></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="detailMovie.img | replaceImgUrl" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{ detailMovie.nm }}</h2>
            <p>{{ detailMovie.enm }}</p>
            <p>{{ detailMovie.sc }}</p>
            <p>{{ detailMovie.cat }}</p>
            <p>{{ srcAnddur }}</p>
            <p>{{ detailMovie.pubDesc }}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{ detailMovie.dra }}</p>
      </div>
      <div class="detail_player swiper-container" ref="detail_player">
        <ul class="swiper-wrapper">
          <li
            v-for="(item, index) in filterPhotos"
            :key="index"
            class="swiper-slide"
          >
            <div>
              <img :src="item" alt />
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Polygraph :stats="stats"></Polygraph>
    <div id="myChart" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>

<script>
import Polygraph from "./svg";

// 引入 echarts 主模块。
import * as echarts from "echarts/lib/echarts";
// 引入折线图。
import "echarts/lib/chart/line";
// 引入提示框组件、标题组件、工具箱组件。
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/toolbox";
import "./detail.less"

var stats = [
  { label: "记忆力", value: 100 },
  { label: "空间力", value: 70 },
  { label: "计算力", value: 100 },
  { label: "想象力", value: 80 },
  { label: "思维力", value: 100 },
  { label: "推理力", value: 90 },
];

export default {
  name: "Detail",
  data() {
    return {
      detailMovie: {},
      isLoading: true,
      swiperdemo: null,
      stats: stats,
    };
  },
  components: {
    Polygraph,
  },
  props: ["movieId"],
  filters: {
    replaceImgUrl(value) {
      return value.replace(/w\.h/g, "140.127");
    },
  },
  computed: {
    filterPhotos: function() {
      return (
        this.detailMovie.photos &&
        this.detailMovie.photos.map((item) => {
          return item.replace(/w\.h/g, "140.127");
        })
      );
    },
    srcAnddur() {
      return (
        this.detailMovie.src &&
        `${this.detailMovie.src} / ${this.detailMovie.dur} 分钟`
      );
    },
    backgroundImg() {
      return (
        this.detailMovie && this.detailMovie.img.replace(/w\.h/, "148.208")
      );
    },
  },
  methods: {
    handleToBack() {
      // this.$router.back();
      this.$router.go(-1);
    },
    drawLine() {
      // 基于准备好的dom，初始化 echarts 实例并绘制图表。
      echarts.init(document.getElementById("myChart")).setOption({
        title: { text: "Line Chart" },
        tooltip: {},
        toolbox: {
          feature: {
            dataView: {},
            saveAsImage: {
              pixelRatio: 2,
            },
            restore: {},
          },
        },
        xAxis: {},
        yAxis: {},
        series: [
          {
            type: "line",
            smooth: true,
            data: [
              [12, 5],
              [24, 20],
              [36, 36],
              [48, 10],
              [60, 10],
              [72, 20],
            ],
          },
        ],
      });
    },
  },
  destroyed() {
    this.swiperdemo.destroy(false);
  },
  mounted() {
    // let movieId = this.$route.params.movieId;
    this.$api.movie
      .movieDetail({ movieId: this.movieId })
      .then((res) => {
        var msg = res.data.msg;
        if (msg === "ok") {
          this.isLoading = false;
          this.detailMovie = res.data.data.detailMovie;
          this.$nextTick(() => {
            this.drawLine();
            this.swiperdemo = new window.Swiper(this.$refs.detail_player, {
              slidesPerView: "auto",
              freeMode: true,
              freeModeSticky: true,
            });
          });
        }
      })
      .catch((err) => {
        this.isLoading = false;
        console.log(err);
      });
  },
};
</script>