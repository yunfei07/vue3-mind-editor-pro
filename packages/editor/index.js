// 引入组件
import MindEditor from "./src";

// 提供 install 安装方法,供按需安装
MindEditor.install = function (Vue) {
  // 祖册组件
  Vue.component(MindEditor.name, MindEditor);
};

// 暴露组件
export default MindEditor;
