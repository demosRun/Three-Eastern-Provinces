// Mon Sep 02 2019 15:17:03 GMT+0800 (GMT+08:00)

"use strict";

// 存储页面基本信息
var owo = {
  // 页面默认入口 如果没有设置 则取第一个页面为默认页面
  entry: "home",
  // 全局方法变量
  tool: {},
  // 框架状态变量
  state: {}
};
/*
  存储每个页面的函数
  键名：页面名称
  键值：方法列表
*/

owo.script = {
  "home": {
    "data": {
      "swiperCreated": false,
      "card2": false,
      "card3": false,
      "card4": false
    },
    "created": function created() {
      var _this = this;

      // 判断是否为手机
      if (_owo.isMobi) {
        document.body.classList.add('min');
        this.query('.three.change-item .title')[0].src = "./static/resource/three-title-min.png";
        this.query('.four.change-item .title')[0].src = "./static/resource/four-title-min.png";
        this.query('.five.change-item .title')[0].src = "./static/resource/five-title-min.png";
      }

      owo.tool.animate('fadeInUp', this.query('.silk-ribbon')[0]);
      owo.tool.animate('fadeInUp', this.query('.build')[0], 800);
      owo.tool.animate('flash', this.query('.mouse')[0], 1400); // 判断用户是否滑动
      // console.log(this.$el)

      setTimeout(function () {
        owo.tool.touch({
          el: _this.query('.one.change-item')[0],
          end: function end(event) {
            if (Math.abs(event.swipe[0]) > 50 || Math.abs(event.swipe[1]) > 50) {
              _this.two();
            }
          }
        });
      }, 1000);
    },
    "clearAndSet": function clearAndSet(key) {
      var _this2 = this;

      var domList = this.query('.menu-box-left p');
      var changeItem = this.query('.change-item');

      for (var ind = 0; ind < domList.length; ind++) {
        var element = domList[ind];
        element.classList.remove('active');
      }

      for (var _ind = 0; _ind < changeItem.length; _ind++) {
        var _element = changeItem[_ind];
        _element.style.opacity = 0;
      }

      this.query("." + key)[0].style.display = 'block';
      this.query("." + key + '-button')[0].classList.add('active');
      setTimeout(function () {
        _this2.query("." + key)[0].style.opacity = 1;
      }, 600);
      setTimeout(function () {
        for (var _ind2 = 0; _ind2 < changeItem.length; _ind2++) {
          var _element2 = changeItem[_ind2];

          if (!_element2.classList.contains(key)) {
            _element2.style.display = 'none';
          }
        }

        _this2.data.isChange = false;
      }, 800);
      document.getElementsByClassName('mt30')[0].style.display = 'none';
    },
    "one": function one() {
      console.log('进入封面!');
      if (this.data.isChange == true) return;
      this.data.isChange = true;
      this.query('.menu-box-right .spot')[0].style.top = '10px';
      this.query('.build')[0].style.opacity = '1';
      this.query('.one')[0].style.opacity = '1';
      this.query('.menu-box')[0].style.right = '-100px';
      this.query('.mouse')[0].style.display = 'block';
      this.clearAndSet('one');
    },
    "two": function two() {
      if (!this.data.swiperCreated) {
        new Swiper('.swiper-container-pPX8XxuUyIehAAEu', {
          autoplay: 3000,
          pagination: '.pagination-pPX8XxuUyIehAAEu',
          paginationClickable: true
        });
        this.data.swiperCreated = true;
      }

      console.log('进入综述!');
      if (this.data.isChange == true) return;
      this.data.isChange = true;
      this.query('.build')[0].style.opacity = '0';
      this.query('.one')[0].style.opacity = '0';
      this.query('.menu-box')[0].style.right = '4%';
      this.query('.mouse')[0].style.display = 'none'; // 小圆点移动

      this.query('.menu-box-right .spot')[0].style.top = '60px';
      this.query('.build')[0].display = 'none';
      this.clearAndSet('two');
    },
    "three": function three() {
      if (this.query('.swiper-container-pPX8XxuUyIehAAEu2').length > 0 && !this.data.card2) {
        this.data.card2 = new Swiper('.swiper-container-pPX8XxuUyIehAAEu2', {
          autoplay: 3000,
          pagination: '.pagination-pPX8XxuUyIehAAEu2',
          paginationClickable: true
        });
      } // 小圆点移动


      if (this.data.isChange == true) return;
      this.data.isChange = true;
      this.query('.menu-box-right .spot')[0].style.top = '110px';
      this.clearAndSet('three');
    },
    "four": function four() {
      if (this.query('.swiper-container-pPX8XxuUyIehAAEu3').length > 0 && !this.data.card3) {
        this.data.card3 = new Swiper('.swiper-container-pPX8XxuUyIehAAEu3', {
          autoplay: 3000,
          pagination: '.pagination-pPX8XxuUyIehAAEu3',
          paginationClickable: true
        });
      } // 小圆点移动


      if (this.data.isChange == true) return;
      this.data.isChange = true;
      this.query('.menu-box-right .spot')[0].style.top = '160px';
      this.clearAndSet('four');
    },
    "five": function five() {
      if (this.query('.swiper-container-pPX8XxuUyIehAAEu4').length > 0 && !this.data.card4) {
        this.data.card3 = new Swiper('.swiper-container-pPX8XxuUyIehAAEu4', {
          autoplay: 3000,
          pagination: '.pagination-pPX8XxuUyIehAAEu4',
          paginationClickable: true
        });
      } // 小圆点移动


      if (this.data.isChange == true) return;
      this.data.isChange = true;
      this.query('.menu-box-right .spot')[0].style.top = '210px';
      this.clearAndSet('five');
      document.getElementsByClassName('mt30')[0].style.display = 'block';
    },
    "template": {
      "topBar": {
        "prop": {
          "logo": "http://www.people.com.cn/img/2016people/images/rmw_logo.png"
        }
      }
    }
  }
};

/* 方法合集 */
var _owo = {
  /* 对象合并方法 */
  assign: function(a, b) {
    var newObj = {}
    for (var key in a){
      newObj[key] = a[key]
    }
    for (var key in b){
      newObj[key] = b[key]
    }
    return newObj
  },
  /* 运行页面初始化方法 */
  runCreated: function (pageFunction) {
    // console.log(pageFunction)
    // 确保created事件只被执行一次
    if (!pageFunction["_isCreated"]) {
      pageFunction["_isCreated"] = true
      if (pageFunction.created) {
        pageFunction.created.apply(_owo.assign(pageFunction, {
          data: pageFunction.data,
          activePage: window.owo.activePage
        }))
      }
    }
    // console.log(pageFunction)
    if (!pageFunction.show) return
    pageFunction.show.apply(_owo.assign(pageFunction, {
      data: pageFunction.data,
      activePage: window.owo.activePage
    }))
  }
}

// 判断是否为手机
_owo.isMobi = navigator.userAgent.toLowerCase().match(/(ipod|ipad|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null


_owo._run = function (eventFor, templateName, event) {
  // 复制eventFor防止污染
  var eventForCopy = eventFor
  // 判断页面是否有自己的方法
  var newPageFunction = window.owo.script[window.owo.activePage]
  // console.log(this.attributes)
  if (templateName && templateName !== owo.activePage) {
    // 如果模板注册到newPageFunction中，那么证明模板没有script那么直接使用eval执行
    if (newPageFunction.template) newPageFunction = newPageFunction.template[templateName]
  }
  // 待优化可以单独提出来
  // 取出参数
  var parameterArr = []
  var parameterList = eventForCopy.match(/[^\(\)]+(?=\))/g)
  
  if (parameterList && parameterList.length > 0) {
    // 参数列表
    parameterArr = parameterList[0].split(',')
    // 进一步处理参数
    
    for (var i = 0; i < parameterArr.length; i++) {
      var parameterValue = parameterArr[i].replace(/(^\s*)|(\s*$)/g, "")
      // console.log(parameterValue)
      // 判断参数是否为一个字符串
      
      if (parameterValue.charAt(0) === '"' && parameterValue.charAt(parameterValue.length - 1) === '"') {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      if (parameterValue.charAt(0) === "'" && parameterValue.charAt(parameterValue.length - 1) === "'") {
        parameterArr[i] = parameterValue.substring(1, parameterValue.length - 1)
      }
      // console.log(parameterArr[i])
    }
  }
  eventForCopy = eventFor.replace(/\(.*\)/, '')
  // console.log(newPageFunction, eventForCopy)
  // 如果有方法,则运行它
  if (newPageFunction && newPageFunction[eventForCopy]) {
    // 绑定window.owo对象
    newPageFunction.$event = event
    newPageFunction[eventForCopy].apply(newPageFunction, parameterArr)
  } else {
    // 如果没有此方法则交给浏览器引擎尝试运行
    eval(eventFor)
  }
}

_owo.bindEvent = function (eventName, eventFor, tempDom, templateName) {
  // 处理事件 使用bind防止闭包
  tempDom['on' + eventName] = function(event) {
    _owo._run(eventFor, templateName, event)
  }.bind({eventFor: eventFor})
}

/* owo事件处理 */
// 参数1: 当前正在处理的dom节点
// 参数2: 当前正在处理的模块名称
// 参数3: 当前正在处理的模块根dom
_owo.handleEvent = function (tempDom, templateName) {
  var activePage = window.owo.script[owo.activePage]
  
  if (tempDom.attributes) {
    for (let ind = 0; ind < tempDom.attributes.length; ind++) {
      var attribute = tempDom.attributes[ind]
      // 判断是否为owo的事件
      // ie不支持startsWith
      if (attribute.name[0] == ':') {
        var eventName = attribute.name.slice(1)
        var eventFor = attribute.textContent
        switch (eventName) {
          case 'show' : {
            // 初步先简单处理吧
            var temp = eventFor.replace(/ /g, '')
            // 取出条件
            var condition = temp.split("==")
            if (activePage.data[condition[0]] != condition[1]) {
              tempDom.style.display = 'none'
            }
            break
          }
          case 'tap': {
            // 待优化 可合并
            // 根据手机和PC做不同处理
            if (_owo.isMobi) {
              _owo._event_tap(tempDom, function (event) {
                _owo._run(eventFor, templateName, event)
              })
            } else _owo.bindEvent('click', eventFor, tempDom, templateName)
            break
          }
          default: {
            _owo.bindEvent(eventName, eventFor, tempDom, templateName)
          }
        }
      }
    }
  }
  
  // 判断是否有子节点需要处理
  if (tempDom.children) {
    // 递归处理所有子Dom结点
    for (var i = 0; i < tempDom.children.length; i++) {
      // 获取子节点实例
      var childrenDom = tempDom.children[i]

      // 每个子节点均要判断是否为模块
      if (childrenDom.attributes['template'] && childrenDom.attributes['template'].textContent) {
        // 如果即将遍历进入模块 设置即将进入的模块为当前模块
        // 获取模块的模块名
        _owo.handleEvent(childrenDom, childrenDom.attributes['template'].textContent)
      } else {
        _owo.handleEvent(childrenDom, templateName)
      }
    }
  } else {
    console.info('元素不存在子节点!')
    console.info(tempDom)
  }
}// 单页面-页面资源加载完毕事件
_owo.showPage = function() {
  var page = owo.entry
  owo.activePage = page
  // 查找入口
  var entryDom = document.querySelector('.ox[template="' + page + '"]')
  if (entryDom) {
    _owo.handlePage(window.owo.script[page], entryDom)
    _owo.handleEvent(entryDom, null)
  } else {
    console.error('找不到页面入口! 设置的入口为: ' + page)
  }
}

/*
 * 传递函数给whenReady()
 * 当文档解析完毕且为操作准备就绪时，函数作为document的方法调用
 */
_owo.ready = (function() {               //这个函数返回whenReady()函数
  var funcs = [];             //当获得事件时，要运行的函数
  
  //当文档就绪时,调用事件处理程序
  function handler(e) {
    // 确保事件处理程序只运行一次
    if(window.owo.state.isRrady) return
    window.owo.state.isRrady = true
    //如果发生onreadystatechange事件，但其状态不是complete的话,那么文档尚未准备好
    if(e.type === 'onreadystatechange' && document.readyState !== 'complete') {
      return
    }
    
    // 运行所有注册函数
    for(var i=0; i<funcs.length; i++) {
      funcs[i].call(document);
    }
    funcs = null;
  }
  //为接收到的任何事件注册处理程序
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', handler, false)
    document.addEventListener('readystatechange', handler, false)            //IE9+
    window.addEventListener('load', handler, false)
  } else if(document.attachEvent) {
    document.attachEvent('onreadystatechange', handler)
    window.attachEvent('onload', handler)
  }
  //返回whenReady()函数
  return function whenReady (fn) {
    if (window.owo.state.isRrady) {
      fn.call(document)
    } else {
      funcs.push(fn)
    }
  }
})()

// 执行页面加载完毕方法
_owo.ready(_owo.showPage)


/**
 * 赋予节点动画效果
 * @param  {string} name 动画效果名称
 * @param  {dom} dom 节点
 */
owo.tool.animate = function (name, dom, delay) {
  dom.classList.add(name)
  dom.classList.add('owo-animated')
  if (delay) {
    dom.style.animationDelay = delay + 'ms'
  }
  // 待优化可以单独提出绑定方法
  dom.addEventListener('animationend', animateEnd)
  function animateEnd () {
    // 待优化 感觉不需要这样
    dom.classList.remove(name)
    dom.classList.remove('owo-animated')
    if (delay) {
      dom.style.animationDelay = ''
    }
  }
}
/**
 * 滑动检测
 * @param  {DOM} el 需要监测的dom元素
 * @param  {Function} start   开始事件
 * @param  {Function} touchmove   触摸移动事件
 * @param  {Function} end   结束事件
 */

owo.tool.touch = function (config) {
  const dom = config.el
  // 判断是否已经处于监听状态
  if (dom.getAttribute("monitor") == 'touch') return
  var start = null
  var end = null
  var startTarget = null
  // 设置监听标识
  dom.setAttribute("monitor", "touch")
  dom.addEventListener("touchstart", function (e) {
    event = e.targetTouches[0] || e.originalEvent.targetTouches[0]
    startTarget = e.target
    start = end = [event.clientX, event.clientY]
    if (config.start) config.start(event)
  }, false)
  dom.addEventListener("touchmove", function (e) {
    event = e.targetTouches[0] || e.originalEvent.targetTouches[0]
    end = [event.clientX, event.clientY]
    if (config.moveing) config.moveing(event)
  }, false)
  dom.addEventListener("touchend", function (e) {
    if (config.end) {
      config.end({
        target: startTarget,
        start: start,
        end: end,
        swipe: [end[0] - start[0], end[1] - start[1]]
      })
    }
  }, false)
  // 监控鼠标事件
  dom.addEventListener("mousedown", function (event) {
    dom.addEventListener("mousemove", function (event) {
      end = [event.clientX, event.clientY]
      if (config.moveing) config.moveing(event)
    }, false)
    start = end = [event.clientX, event.clientY]
    if (config.start) config.start(event)
  }, false)
  
  dom.addEventListener("mouseup", function () {
    // 移除监听
    dom.removeEventListener("mousemove", function () {

    }, false)
    if (config.end) {
      config.end({
        target: startTarget,
        start: start,
        end: end,
        swipe: [end[0] - start[0], end[1] - start[1]]
      })
    }
  }, false)
}

/* 运行页面所属的方法 */
_owo.handlePage = function (newPageFunction, entryDom) {
  // console.log(entryDom)
  newPageFunction['$el'] = entryDom
  // 快速选择器
  newPageFunction['query'] = function (str) {
    return this.$el.querySelectorAll(str)
  }
  /* 判断页面是否有自己的方法 */
  if (!newPageFunction) return
  // console.log(newPageFunction)
  _owo.runCreated(newPageFunction)
  // debugger
  // 判断页面是否有下属模板,如果有运行所有模板的初始化方法
  for (var key in newPageFunction.template) {
    var templateScript = newPageFunction.template[key]
    // 待修复,临时获取方式,这种方式获取到的dom不准确
    var childDom = entryDom.querySelectorAll('[template="' + key +'"]')[0]
    if (!childDom) {
      console.error('组件丢失！')
      continue
    }
    // 递归处理
    _owo.handlePage(templateScript, childDom)
  }
}
_owo._event_tap = function (tempDom, callBack) {
  // 变量
  var startTime = 0
  var isMove = false
  tempDom.addEventListener('touchstart', function() {
    startTime = Date.now();
  })
  tempDom.addEventListener('touchmove', function() {
    isMove = true
  })
  tempDom.addEventListener('touchend', function(e) {
    if (Date.now() - startTime < 300 && !isMove) {
      callBack(e)
    }
    // 清零
    startTime = 0;
    isMove = false
  })
}