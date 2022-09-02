import MindEditor from "./editor";
import '../styles/base.css';
const components = [MindEditor];

// 定义install方法,接收Vue作为参数,如果使用use注册组件,则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map((component) => {
    Vue.component(component.name, component);
  });
};

// 判断是否直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default install;
export {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  MindEditor,
};
