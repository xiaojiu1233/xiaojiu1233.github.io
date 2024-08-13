var posts=["2024/08/13/hello-world/","2024/08/13/学生管理系统的需求文档/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };