let endEnv = 0; // 测试 - 0  本地 - 1
const GlobalConfig = {
  pathPreFix: "xulongji",
  link_url: [
    "测试环境链接aaaaaaaaaaa",
    "本地开发链接bbbbbbbbbbb"
  ][endEnv]
};

window.GlobalConfig = GlobalConfig;
