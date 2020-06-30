(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{398:function(s,a,t){s.exports=t.p+"assets/img/feign-eureka-start.d0c72f74.png"},505:function(s,a,t){s.exports=t.p+"assets/img/zuul-start.910f92a1.png"},552:function(s,a,t){"use strict";t.r(a);var n=t(22),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("ul",[n("li",[s._v("当微服务数量非常多时，我们需要一个统一入口调用这些微服务的接口，这时我们就需要网关帮助我们将接口请求反向代理到目标服务。")])])]),s._v(" "),n("h2",{attrs:{id:"网关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网关"}},[s._v("#")]),s._v(" 网关")]),s._v(" "),n("h3",{attrs:{id:"网关实现的功能"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网关实现的功能"}},[s._v("#")]),s._v(" 网关实现的功能")]),s._v(" "),n("ul",[n("li",[s._v("网关对所有服务进行拦截。")]),s._v(" "),n("li",[s._v("生成动态路由，进行反向代理。")]),s._v(" "),n("li",[s._v("网关安全控制：统一异常处理、防止 xxs 攻击和 SQL 注入。")]),s._v(" "),n("li",[s._v("权限控制、黑名单和白名单、性能监控、日志打印。")])]),s._v(" "),n("h3",{attrs:{id:"网关分类：内部网关和外部网关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网关分类：内部网关和外部网关"}},[s._v("#")]),s._v(" 网关分类：内部网关和外部网关")]),s._v(" "),n("ul",[n("li",[s._v("内部网关：网关服务不开放给外网。全部服务都部署在内网服务器上，只允许内网的服务才能访问当前网关。")]),s._v(" "),n("li",[s._v("外部网关：网关服务开放给外网。网关服务外的其他服务，都部署在内网，外网无法方法。网关服务部署方式有 2 种\n"),n("ul",[n("li",[s._v("网关服务部署在 DMZ 服务器（即网关服务位于的服务器主机位于内网同时拥有外网 IP），然后将网关服务开放给外网访问。")]),s._v(" "),n("li",[s._v("网关服务也部署在内网，另需要 nginx 服务部署在外网，nginx 能够访问网关服务对网关服务实现反向代理，达到将将网关服务开放给外网的效果。")])])])]),s._v(" "),n("h3",{attrs:{id:"常用网关框架"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#常用网关框架"}},[s._v("#")]),s._v(" 常用网关框架")]),s._v(" "),n("ul",[n("li",[s._v("Kong：是基于 Nginx + Lua 进行二次开发的网关框架。\n"),n("ul",[n("li",[s._v("网址：https://konghq.com/")])])]),s._v(" "),n("li",[s._v("Zuul：Netflix 开发的网关框架。SpringCloud 整合了该网关。\n"),n("ul",[n("li",[s._v("网址：https://github.com/Netflix/zuul")])])]),s._v(" "),n("li",[s._v("orange：国人开发的一个开源网关框架。\n"),n("ul",[n("li",[s._v("网址：http://orange.sumory.com/")])])])]),s._v(" "),n("h3",{attrs:{id:"api-网关与传统服务器网关对比"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api-网关与传统服务器网关对比"}},[s._v("#")]),s._v(" API 网关与传统服务器网关对比")]),s._v(" "),n("ul",[n("li",[s._v("服务器网关：电脑要配置服务器网关，对网络中发送过来的请求进行拦截和转发到目标电脑。")]),s._v(" "),n("li",[s._v("API 网关：对接收到的请求拦截和转发到目标服务。")])]),s._v(" "),n("h2",{attrs:{id:"zuul-网关"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zuul-网关"}},[s._v("#")]),s._v(" Zuul 网关")]),s._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[s._v("简介")]),s._v(" "),n("ul",[n("li",[s._v("Zuul 网关是 SpringCloud 推荐的一个网关框架。")]),s._v(" "),n("li",[s._v("Zuul 实际是 netflix（美国知名视频网站） 开发的，SpringCloud 做了一个整合封装。")]),s._v(" "),n("li",[s._v("Zuul 默认集成了 Ribbon 和 Hystrix。")])])]),s._v(" "),n("h3",{attrs:{id:"zuul-和-nginx-的区别"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zuul-和-nginx-的区别"}},[s._v("#")]),s._v(" Zuul 和 Nginx 的区别")]),s._v(" "),n("ul",[n("li",[s._v("相同点：Zuul 和 nginx 都可以实现反向代理、负载均衡、过滤请求、实现网关效果。\n"),n("ul",[n("li",[s._v("Nginx 通过 Nginx + Lua 实现网关功能。开发团队需要有 Lua 积累，不推荐。")]),s._v(" "),n("li",[s._v("直接在 Nginx 基础上开发一个支持自动注册/注销服务的 Nginx API 网关。")])])]),s._v(" "),n("li",[s._v("不同点\n"),n("ul",[n("li",[s._v("Zuul 采用 Java 语言编写，Nginx 采用 C 语言编写")]),s._v(" "),n("li",[s._v("Nginx 由 C 编写，采用 I/O 多路复用技术，性能比 Zuul 高，支持的并发数默认要高出两个量级。")])])])]),s._v(" "),n("h3",{attrs:{id:"zuul-nginx-配合使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zuul-nginx-配合使用"}},[s._v("#")]),s._v(" Zuul + Nginx 配合使用")]),s._v(" "),n("ul",[n("li",[s._v("Nginx 负载均衡能力更强，主要负责反向代理、负载均衡。")]),s._v(" "),n("li",[s._v("Zuul 对微服务实现请求拦截，智能路由，日志采集等功能。")])]),s._v(" "),n("h2",{attrs:{id:"整合-zuul"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#整合-zuul"}},[s._v("#")]),s._v(" 整合 Zuul")]),s._v(" "),n("h3",{attrs:{id:"maven-依赖"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#maven-依赖"}},[s._v("#")]),s._v(" Maven 依赖")]),s._v(" "),n("div",{staticClass:"language-Maven line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n  <groupId>org.springframework.cloud</groupId>\n  <artifactId>spring-cloud-starter-netflix-zuul</artifactId>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("h3",{attrs:{id:"application-yml-配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#application-yml-配置"}},[s._v("#")]),s._v(" application.yml 配置")]),s._v(" "),n("div",{staticClass:"language-.yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("### 配置网关反向代理\nzuul:\n  routes:\n    ### 定义转发规则。这个规则名称可以随意命名\n    api-a:\n      ### 以 /api-member/ 访问转发到会员服务\n      path: /api-member/**\n      ### 服务名称。Zuul 网关默认整合了 ribbon，ribbon + serverId 实现本地负载均衡方式调用接口\n      serviceId: member-server\n    api-b:\n      path: /api-order/**\n      serviceId: order-server\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])]),n("h3",{attrs:{id:"入口类添加注解"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#入口类添加注解"}},[s._v("#")]),s._v(" 入口类添加注解")]),s._v(" "),n("ul",[n("li",[s._v("注解启动 Zuul 框架的功能"),n("div",{staticClass:"language-Java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableZuulProxy")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])]),s._v(" "),n("h2",{attrs:{id:"zuul-apollo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zuul-apollo"}},[s._v("#")]),s._v(" Zuul + Apollo")]),s._v(" "),n("h3",{attrs:{id:"简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[s._v("#")]),s._v(" 简介")]),s._v(" "),n("ul",[n("li",[s._v("在实际开发中，微服务中配置一般会放到分布式配置中心中。")]),s._v(" "),n("li",[s._v("Zuul 网关服务的动态路由配置，一般是放到分布式配置中心中的。这样可以在配置中心配置通过修改配置，添加或删除特定路由的配置，从而让 Zuul 不需要重启，就能动态进行路由的增减。")])]),s._v(" "),n("h3",{attrs:{id:"zuul-整合-apollo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#zuul-整合-apollo"}},[s._v("#")]),s._v(" Zuul 整合 Apollo")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("Maven 依赖")]),s._v(" "),n("div",{staticClass:"language-Maven line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-zuul</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>com.ctrip.framework.apollo</groupId>\n    <artifactId>apollo-client</artifactId>\n    <version>1.1.0</version>\n</dependency>\n<dependency>\n    <groupId>com.ctrip.framework.apollo</groupId>\n    <artifactId>apollo-core</artifactId>\n    <version>1.1.0</version>\n</dependency>\n\n<dependency>\n    <groupId>org.projectlombok</groupId>\n    <artifactId>lombok</artifactId>\n    <scope>provided</scope>\n</dependency>\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("application.yml 配置")]),s._v(" "),n("div",{staticClass:"language-.yml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("server:\n  port: 8500\nspring:\n  application:\n    name: zuul-server\n\neureka:\n  client:\n    service-url:\n      defaultZone: http://${eureka.instance.ip-address}:8000/eureka/,http://${eureka.instance.ip-address}:8001/eureka/,http://${eureka.instance.ip-address}:8002/eureka/\n  instance:\n    prefer-ip-address: true\n    ip-address: 127.0.0.1\n\napp:\n  ### portal 中新建 Application 的 AppId\n  id: zuul_server_config\napollo:\n  ### configserver 的地址\n  meta: http://${configserver.host}:8080\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("启动类添加注解。")]),s._v(" "),n("div",{staticClass:"language-Java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableApolloConfig")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableZuulProxy")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@EnableEurekaClient")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("添加动态路由刷新类。当 Apollo 修改配置，Zuul 服务内存中对应的配置会修改，但是我们动态路由对象不会重新根据内存中的配置更新路由，所以需要动态路由刷新类，根据路由配置，更新路由对象。")]),s._v(" "),n("div",{staticClass:"language-Java line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-java"}},[n("code",[n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Component")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ZuulProxyRefresher")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("implements")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationContextAware")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationContext")]),s._v(" applicationContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Autowired")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RouteLocator")]),s._v(" routeLocator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@ApolloConfigChangeListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("value "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"application"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("onChange")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigChangeEvent")]),s._v(" changeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("boolean")]),s._v(" zuulProxyChanged "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" changedKey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" changeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("changedKeys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("changedKey"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("startsWith")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"zuul."')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                zuulProxyChanged "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("zuulProxyChanged"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("refreshZuulProxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("changeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("refreshZuulProxy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ConfigChangeEvent")]),s._v(" changeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("publishEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EnvironmentChangeEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("changeEvent"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("changedKeys")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("publishEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("RoutesRefreshedEvent")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("routeLocator"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("setApplicationContext")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ApplicationContext")]),s._v(" applicationContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("throws")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("BeansException")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("this")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("applicationContext "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" applicationContext"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br")])])]),s._v(" "),n("li",[n("p",[s._v("Portal 中路由配置，修改配置，会同时修改动态路由。\n"),n("a",{attrs:{href:"./image/zuul-portal.png"}})])])]),s._v(" "),n("h2",{attrs:{id:"github-项目-demo"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#github-项目-demo"}},[s._v("#")]),s._v(" GitHub 项目 demo")]),s._v(" "),n("ul",[n("li",[n("p",[n("a",{attrs:{href:"https://github.com/ChenFengHub/springcloud-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("整个 demo GitHub 地址"),n("OutboundLink")],1)])]),s._v(" "),n("li",[n("p",[s._v("项目运行测试：通过修改 portal 中网路路由配置信息，控制路由的添加和删减。")]),s._v(" "),n("ul",[n("li",[n("p",[s._v("先启动注册服务")]),s._v(" "),n("p",[n("img",{attrs:{src:t(398),alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("启动网关服务、会员服务、订单服务")])]),s._v(" "),n("p",[n("img",{attrs:{src:t(505),alt:""}})]),s._v(" "),n("ul",[n("li",[s._v("登录 Portal 管理端：http://${portal.ip}:8070,对路由信息进行操作。")])])]),s._v(" "),n("li",[n("p",[s._v("比如增加和删减订单服务路由，然后通过网关调用订单服务接口，判断路由是否根据 Portal 中配置实时更新。测试接口：")]),s._v(" "),n("div",{staticClass:"language-http line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-http"}},[n("code",[n("span",{pre:!0,attrs:{class:"token header-name keyword"}},[s._v("localhost:")]),s._v("8500/api-order/order/get\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])])])])]),s._v(" "),n("li",[n("p",[n("a",{attrs:{href:"https://github.com/ChenFengHub/springcloud-demo/tree/master/zuul-demo",target:"_blank",rel:"noopener noreferrer"}},[s._v("Zuul 例子的 GitHub 地址"),n("OutboundLink")],1)])])])])}),[],!1,null,null,null);a.default=e.exports}}]);