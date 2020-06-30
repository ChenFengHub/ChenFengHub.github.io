(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{547:function(i,v,_){"use strict";_.r(v);var l=_(22),t=Object(l.a)({},(function(){var i=this,v=i.$createElement,_=i._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":i.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[i._v("背景")]),i._v(" "),_("p",[i._v("遥想当年开发一个学校信息管理平台，需要将已有系统和新开发系统整合成一个平台，在这个过程中遇到许多困难：")]),i._v(" "),_("ul",[_("li",[i._v("实现单点登录：比如每个系统都有自己登录验证机制，需要实现单点登录，就要给每个系统引入一个相同授权机制，比如：Token，实现单点登录。")]),i._v(" "),_("li",[i._v("session 共享：不同 SSH 项目要实现 session 共享，我们刚开始采取 Tomcat 同步不同服务器的 Session，发现效果不好，后面只能将 Session 中信息存储在 Token，通过调用接口时传递 Token，通过解密 Token,解析获得共享信息。幸好当时我们存储在 Session 中数据并不多，该方案还可行。")]),i._v(" "),_("li",[i._v("数据同步：要想实现单点登录，系统间的用户信息必须要同步；像学生信息等每个系统都要使用的数据，也要实现数据同步，所以我们每个系统都要引入 RabbitMQ 和消息同步模块代码，使得系统的开发比较繁琐。")]),i._v(" "),_("li",[i._v("系统间接口调用：不同系统间涉及到接口调用时，需要管理对方系统的信息，当子系统数目较多，服务信息管理变得很繁琐。\n总之，当时我们开发过程是相当难受的。后来我接触到了 SpringCloud 微服务框架，发现它完美解决了以上问题。我在之后的项目中也引入 SpringCloud，极大提升了项目开发效率和可扩展性，使得编程变得更加优雅。")])])]),i._v(" "),_("h2",{attrs:{id:"架构演进"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#架构演进"}},[i._v("#")]),i._v(" 架构演进")]),i._v(" "),_("h3",{attrs:{id:"单机架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#单机架构"}},[i._v("#")]),i._v(" 单机架构")]),i._v(" "),_("ul",[_("li",[i._v("介绍：我们最早接触的 ssh/ssm 项目就是采用单机架构。其适合开发小型项目")]),i._v(" "),_("li",[i._v("优点：开发简单，一两个人就能完成项目")])]),i._v(" "),_("h3",{attrs:{id:"分布式架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#分布式架构"}},[i._v("#")]),i._v(" 分布式架构")]),i._v(" "),_("ul",[_("li",[i._v("产生背景：随着项目功能增多，项目规模变大，项目就需要增加开发人员。这个过程就可能出现项目任务不易分配，代码提交容易冲突的问题。这时分布式架构就出现了")]),i._v(" "),_("li",[i._v("介绍：分布式架构会将一个项目根据业务，拆分为多个子项目。每个项目分配一两个人开发即可")]),i._v(" "),_("li",[i._v("优点：任务易分配，代码提交不易冲突")])]),i._v(" "),_("h3",{attrs:{id:"soa-架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#soa-架构"}},[i._v("#")]),i._v(" SOA 架构")]),i._v(" "),_("ul",[_("li",[i._v("产生背景：在分布式项目开发过程中，项目之间要调用接口，要保存项目的 ip 等依赖信息；当项目规模继续变大，子项目数目继续变多，项目间的依赖信息会变得很难管理，这时 SOA 架构就应运而生。")]),i._v(" "),_("li",[i._v("介绍：SOA 首先会将项目的视图层去除，只保留逻辑层，即我们常说的前后端分离后的后端服务。SOA 架构的框架会实现一个单点注册中心，可以管理服务信息；多个服务之间调用接口，只要从注册中心获取要调用的服务信息，即可调用接口")]),i._v(" "),_("li",[i._v("优点：前后端分离使得任务分配更简单，解决了服务之间依赖信息难以管理的问题")])]),i._v(" "),_("h3",{attrs:{id:"微服务架构"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#微服务架构"}},[i._v("#")]),i._v(" 微服务架构")]),i._v(" "),_("ul",[_("li",[i._v("产生背景：在使用 SOA 框架开发过程中，注册中心存在单点故障问题，缺少本地负载均衡和服务保护等功能，这些都需要程序员自己开发，工作量非常大；而且 SOA 架构采用 SOAP（Http + XML） 协议进行服务间的数据交互，比较消耗带宽，这时微服务架构就应运而生")]),i._v(" "),_("li",[i._v("介绍：微服务架构注册中心支持集群和注册信息同步，一般有现成的本地负载均衡和服务保护等机制，尤其是 SpringCloud，它提供一整套微服务解决方案，可以节省我们寻找第三方框架实现解决方案的时间")]),i._v(" "),_("li",[i._v("优点\n"),_("ul",[_("li",[i._v("采用 RestfulAPI 进行通信，相对 SOAP，带宽消耗低")]),i._v(" "),_("li",[i._v("注册中心支持集群和注册信息同步")]),i._v(" "),_("li",[i._v("成熟的微服务框架会提供一整套微服务解决方案，方便开发出高可用的服务")])])])]),i._v(" "),_("h2",{attrs:{id:"springcloud-简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#springcloud-简介"}},[i._v("#")]),i._v(" SpringCloud 简介")]),i._v(" "),_("ul",[_("li",[_("p",[i._v("SpringCloud 是基于 SpringBoot 开发的微服务框架。")]),i._v(" "),_("ul",[_("li",[i._v("SpringBoot 是基于 SpirngMVC + Spring 注解式启动开发的框架，完全去除 XML 配置，采用注解方法实现各种配置，属于快速入门框架，完全有可能半小时入门；")]),i._v(" "),_("li",[i._v("SpringBoot 由于内置了 Tomcat 服务器，仅通过 java -jar Xxx.jar，就可以快速启动项目，而不需要额外部署 Tomcat 服务器作为容器启动项目。")]),i._v(" "),_("li",[i._v("由于 SpringCloud 的流行，阿里对 SpringCloud 进行二次开发，推出了 SpringCloudAlibaba 框架，有兴趣的朋友可以自行去研究。")])])]),i._v(" "),_("li",[_("p",[i._v("SpringCloud 提供了全家桶解决方案。其整合了各种组件来解决微服务中的各种常见问题，所以相对于其他微服务框架，比如 Dubbo 更有优势。SpringCloud 主要实现如下功能：")]),i._v(" "),_("ul",[_("li",[i._v("服务治理：通过 Eureka 注册中心组件实现功能。")]),i._v(" "),_("li",[i._v("本地负载均衡：通过 Ribbon 组件实现本地负载均衡功能。")]),i._v(" "),_("li",[i._v("声明式接口调用：通过 Feign 组件实现功能。")]),i._v(" "),_("li",[i._v("分布式配置中心：通过 Config 组件实现功能，由于 Config 没有操作界面不人性化，后面直接整合携程的 Apollo。")]),i._v(" "),_("li",[i._v("网关：通过 Zuul 网关组件实现网关功能。")]),i._v(" "),_("li",[i._v("服务跟踪：通过 Sleuth 组件实现功能。")])])]),i._v(" "),_("li",[_("p",[i._v("分布式服务开发过程，要保证服务高可用，还要使用到：分布式缓存，分布式锁，分布式任务调用，分布式事务，要考虑到架构安全性：接口幂等性设计、常见互联网攻击手段的预防等等，这些我们这里先不介绍，敬请期待。")])])])])}),[],!1,null,null,null);v.default=t.exports}}]);