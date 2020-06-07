<template>
  <svg width="200" height="200">
    <g>
      <polygon :points="points"></polygon>
      <circle cx="100" cy="100" r="80" fill="red"></circle>
      <axis-label
        v-for="(stat, index) in stats"
        :stat="stat"
        :index="index"
        :key="index"
        :total="stats.length"
      ></axis-label>
    </g>
  </svg>
</template>

<script>
export default {
  name: "polygraph",
  props: ["stats"],
  computed: {
    points: function() {
      var total = this.stats.length;
      return this.stats
        .map(function(stat, i) {
          var point = valueToPoint(stat.value, i, total);
          return point.x + "," + point.y;
        })
        .join(" ");
    },
  },
  components: {
    // a sub component for the labels
    "axis-label": {
      props: {
        stat: Object,
        index: Number,
        total: Number,
      },
      template: `<text :x="point.x" :y="point.y">{{stat.label}}</text>`,
      computed: {
        point: function() {
          return valueToPoint(+this.stat.value + 10, this.index, this.total);
        },
      },
    },
  },
};

// math helper...
function valueToPoint(value, index, total) {
  var x = 0;
  var y = -value * 0.8;
  var angle = ((Math.PI * 2) / total) * index;
  var cos = Math.cos(angle);
  var sin = Math.sin(angle);
  var tx = x * cos - y * sin + 100;
  var ty = x * sin + y * cos + 100;
  return {
    x: tx,
    y: ty,
  };
}
</script>

<style scoped>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke:#666;
}

text {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 10px;
  fill: #666;
}

label {
  display: inline-block;
  margin-left: 10px;
  width: 20px;
}

#raw {
  position: absolute;
  top: 0;
  left: 300px;
}
</style>
