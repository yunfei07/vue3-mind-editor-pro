<template>
  <mind-header
    @zoom="handleZoom"
    @addChildNode="handleAddChildNode"
    @editNode="handleEditNode"
  ></mind-header>
  <!-- <el-button @click="handleZoomOut">缩小</el-button>
  <el-button @click="handleZoomIn">放大</el-button>
  <el-button @click="handleCamera">中心</el-button>
  <el-button @click="moveUp">moveUp</el-button>
  <el-button @click="moveDown">moveDown</el-button>
  <el-button @click="setNodeProgress">setNodeProgress</el-button> -->
  <!-- <el-button @click="handleResetLayout">reset</el-button>
  <el-button @click="handleCamera">中心</el-button> -->

  <main class="container-fluid">
    <div id="minder-container" :style="{ height: height, width: '100%' }"></div>
  </main>
</template>
<script>
import "hotbox-ui/hotbox.css";
import "../../script/kityminder.editor.css";
import "kityminder-core/dist/kityminder.core.css";
import "kity";
import "hotbox-ui";
import "kityminder-core";
import "../../script/kityminder.editor.js";
import MindHeader from "./components/head/head.vue";
export default {
  name: "MindEditor",
  components: {
    MindHeader,
  },
  data() {
    return {
      // minder: window.kityminder.Minder,
      minder: {},
      height: window.innerHeight - 45 + "px",
      text: "",
    };
  },
  // props: {
  //   importJson: {
  //     type: Object,
  //     default: () => [],
  //   },
  // },
  watch() {},
  mounted() {
    this.KMEditor = new window.kityminder.Editor(
      document.querySelector("#minder-container")
    );
    this.minder = this.KMEditor.minder;
    // this.minder = new window.kityminder.Minder({
    //   renderTo: "#minder-container",
    // })
    this.minder.importJson({
      root: {
        data: {
          text: "test111",
          id: 110,
          key: 1809104001,
        },
        children: [
          {
            data: {
              text: "新闻",
              id: 111,
              key: 1809104002,
              parent: 1809104001,
            },
            children: [
              {
                data: {
                  text: "新闻111",
                  id: 112,
                  key: 1809104003,
                  parent: 1809104002,
                },
              },
              {
                data: {
                  text: "234242",
                  id: 113,
                  key: 1809104001,
                  parent: 1809104002,
                },
              },
            ],
          },
          {
            data: {
              text: "网页",
            },
            children: [
              {
                data: {
                  text: "网页111",
                },
                children: [
                  {
                    data: {
                      text: "网页下面的子元素",
                    },
                  },
                ],
              },
            ],
          },
          { data: { text: "贴吧" } },
          { data: { text: "知道" } },
          { data: { text: "音乐" } },
          { data: { text: "图片" } },
          { data: { text: "视频" } },
          { data: { text: "地图" } },
          { data: { text: "百科", expandState: "collapse" } },
        ],
      },
      template: "default",
    });
    this.minder.on("selectionchange", () => {
      this.selectedNodes = this.minder.getSelectedNodes().length;
      if (this.selectedNodes === 1) {
        this.text = this.minder.getSelectedNode().getText();
      } else {
        this.text = "";
      }
      // console.log(this.text)
      // this.minder.execCommand('text', '1111');
      // let receiverElement = this.minder;
      // console.log(this.minder)

      // this.$emit('selection-change', this.getNodeData());
    });
    this.handleCamera();
  },
  methods: {
    handleZoomOut() {
      const state = this.minder.queryCommandState("ZoomOut");
      if (state) {
        this.$message.warning("已是最小尺寸");
        return;
      }
      this.minder.execCommand("ZoomOut");
    },
    handleZoomIn() {
      const state = this.minder.queryCommandState("ZoomIn");
      if (state) {
        this.$message.warning("已是最小尺寸");
        return;
      }
      this.minder.execCommand("ZoomIn");
    },
    handleCamera() {
      this.minder.execCommand("Camera", this.minder.getRoot(), 60);
    },
    handleZoom(value) {
      if (value === "center") {
        this.handleCamera();
      }
      const state = this.minder.queryCommandState("Zoom");
      if (state) {
        this.$message.warning("已是最小尺寸");
        return;
      }
      this.minder.execCommand("Zoom", value);
    },
    handleResetLayout() {
      const state = this.minder.queryCommandState("ResetLayout");
      if (state) {
        this.$message.warning("已是最小尺寸");
        return;
      }
    },
    moveUp() {
      const selectedList = this.minder.getSelectedNodes();
      if (selectedList.length !== 1) {
        this.$message.error("请选择节点");
        return null;
      }
      this.minder.execCommand("ArrangeUp");
    },
    moveDown() {
      const selectedList = this.minder.getSelectedNodes();
      if (selectedList.length !== 1) {
        this.$message.error("请选择节点");
        return null;
      }
      this.minder.execCommand("ArrangeDown");
    },
    setNodeProgress() {
      const selectedList = this.minder.getSelectedNodes();
      if (selectedList.length !== 1) {
        this.$message.error("请选择节点");
        return null;
      }
      this.minder.execCommand("Progress", Math.ceil(Math.random() * 10));
    },
    handleAddChildNode() {
      const state = this.minder.queryCommandState("AppendChildNode");
      if (state) {
        this.$message.warning("未选择节点");
        return;
      }
      this.minder.execCommand("AppendChildNode", "textOrData");
    },
    handleEditNode() {
      //  var node = this.minder.getSelectedNode();
      //  console.log(node)
      const state = this.minder.queryCommandState("EditNode");
      if (state) {
        this.$message.warning("未选择节点");
        return;
      }
      this.minder.execCommand("EditNode");
    },
  },
};
</script>

<style lang="css" scoped>
.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

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