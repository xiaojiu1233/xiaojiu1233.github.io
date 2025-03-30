var posts=["2025/03/18/es和kibana安装与配置/","2025/02/22/Swagger/","2025/02/26/docker/","2025/03/21/flex弹性布局/","2025/03/11/java/","2025/03/07/vue问题汇总/","2025/03/07/git常用命令/","2025/03/29/ELK/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };