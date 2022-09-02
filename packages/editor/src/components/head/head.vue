<template>
  <header class="nav-header">
    <div>
      <el-row>
        <el-col :span="2">
          <el-select
            v-model="value"
            class="yf-zoom"
            placeholder="Select"
            size="small"
            @change="zoom"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="21">
          <!-- <el-button size="small">同级主题</el-button> -->
          <el-button size="small" @click="$emit('addChildNode')"
            >子主题</el-button
          >
          <el-button size="small">标记</el-button>
          <el-button size="small" @click="$emit('editNode')">编辑</el-button>
        </el-col>
        <el-col :span="1">
          <el-button type="info" size="small" icon="SetUp" />
        </el-col>
      </el-row>
    </div>
  </header>
</template>
<script>
export default {
  name: "mindHeader",
  data() {
    return {
      value: 100,
      options: [
        {
          value: 50,
          label: "50%",
        },
        {
          value: 100,
          label: "100%",
        },
        {
          value: 150,
          label: "150%",
        },
        {
          value: 300,
          label: "300%",
        },
        {
          value: 400,
          label: "400%",
        },
        {
          value: "center",
          label: "适应画布",
        },
      ],
    };
  },
  methods: {
    zoom(val) {
      this.$emit("zoom", val);
    },
  },
};
</script>
<script setup>
defineEmits(["addChildNode", "editNode"]);
</script>
<style scoped>
.nav-header {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  background: #2d2d2f;
}

.yf-zoom {
  width: 100px;
}
</style>