
export default (api) => {
  api.modifyHTML(($) => {
    return $;
  });
  
  api.addHTMLScripts(() => ({
    type: 'text/javascript',
    src: 'https://res.wx.qq.com/open/js/jweixin-1.4.0.js',
  }));
  api.addHTMLScripts(() => ({
    type: 'text/javascript',
    src: 'https://2937130778.hiecheimaetu.com:22443/qn-e2wrot2ioKSZLNhoiFj4uMVYtWjsUJSk2XG0aLw4.js.cdn.aliyun.dcloud.net.cn/dev/uni-app/uni.webview.1.5.2.js',
  }));
  // api.addHTMLMetas(() => [{ name: 'foo', content: 'bar' }]);
  // api.addHTMLLinks(() => [{ rel: 'foo', content: 'bar' }]);
  // api.addHTMLHeadScripts(() => [`console.log('hello world from head')`]);
  // api.addHTMLScripts(() => [`console.log('hello world')`]);
  // api.addEntryCodeAhead(() => [`console.log('小花')`]);
  // api.addEntryCode(() => [`console.log('小白')`]);
  // api.onDevCompileDone((opts) => {
  //   opts;
  //   // console.log('> onDevCompileDone', opts.isFirstCompile);
  // });
  // api.onBuildComplete((opts) => {
  //   opts;
  //   // console.log('> onBuildComplete', opts.isFirstCompile);
  // });
  // api.chainWebpack((memo) => {
  //   memo;
  // });
  // api.onStart(() => {});
  // api.onCheckCode((args) => {
  //   args;
  //   // console.log('> onCheckCode', args);
  // });
};
