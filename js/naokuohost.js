// 镜像站跳转动作
!function () {
  let yupathname;
  let yuhostname;
  let yuurl;
  yupathname = window.location.pathname;
  yuhostname = window.location.hostname;
  if (yuhostname === 'naokuo.top') {
    yuurl = "https://myxiaochuang.gitee.io" + yupathname;
    document.getElementsByClassName("site-page")[0].href = yuurl;
    document.getElementsByClassName("site-page")[14].href = yuurl;
    // yuur2 = yuurl;
  }
  else if (yuhostname === 'myxiaochuang.gitee.io') {
    yuurl = "https://naokuo.top" + yupathname;
    document.getElementsByClassName("site-page")[0].href = yuurl;
    document.getElementsByClassName("site-page")[14].href = yuurl;
    // yuur2 = yuurl;
  }
}();