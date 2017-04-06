// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\other_learn\\Weex\\WeexMutilAndroid\\WeexAndroid\\weex\\src\\script_use.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-e0e937ce"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "marginLeft": 15,
	    "marginRight": 15
	  },
	  "title": {
	    "fontSize": 40,
	    "fontWeight": "bold",
	    "marginTop": 15
	  },
	  "box": {
	    "borderWidth": 2,
	    "borderStyle": "solid",
	    "borderColor": "#BBBBBB",
	    "width": 130,
	    "height": 50,
	    "backgroundColor": "#EEEEEE",
	    "marginLeft": 15,
	    "textAlign": "center"
	  }
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	var modal = weex.requireModule('modal');
	exports.default = {
	  data: {
	    title: 'Alibaba',
	    datetime: null,
	    firstName: 'John ',
	    lastName: 'Smith',
	    isChange: true,
	    change: 'change',
	    imgUrl: 'http://t.cn/RGE3uo9',

	    list: [{ gender: 'male', nickname: 'Li Lei', avatar: 'http://t.cn/RGE3AJt' }, { gender: 'femal', nickname: 'Han Meimei', avatar: 'http://t.cn/RGE3uo9' }]
	  },
	  computed: {
	    fullName: {
	      get: function get() {
	        return this.firstName + ' ' + this.lastName;
	      },

	      set: function set(v) {
	        var s = v.split(' ');
	        this.firstName = s[0];
	        this.lastName = s[1];
	      }
	    }
	  },
	  methods: {
	    getTitle: function getTitle() {
	      return 'Weex Team';
	    },

	    changeName: function changeName() {
	      this.isChange = !this.isChange;
	      if (this.isChange) {
	        this.change = 'change';
	        this.fullName = 'John Smith';
	      } else {
	        this.change = 'recover';
	        this.fullName = 'Terry King';
	      }
	    },

	    back2Top: function back2Top() {
	      var top = this.$('top');
	      this.$scrollTo(top); // both work
	      //this.$scrollTo('top') // both work
	    },

	    moduleClick: function moduleClick() {
	      weex.requireModule('ShowMsgModule').printLog('原生封装module扩展');
	    },

	    callWeex: function callWeex() {
	      weex.requireModule('ShowMsgModule').callTheCallback(function (event) {
	        weex.requireModule('ShowMsgModule').printLog('msg from the callback:' + event);
	      });
	    }
	  },
	  created: function created() {
	    this.datetime = new Date().toLocaleString();
	  }
	};
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["container"]
	  }, [_c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("1 script 语法初探"))]), _c('text', [_vm._v("The time is " + _vm._s(_vm.datetime))]), _c('text', [_vm._v(_vm._s(_vm.title))]), _c('text', [_vm._v(_vm._s(_vm.getTitle()))]), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("2 研究In-template 表达式"))]), _c('text', [_vm._v(_vm._s(_vm.firstName + _vm.lastName))]), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("3 研究Computed Properties和if以及click"))]), _c('div', {
	    staticStyle: {
	      flexDirection: "row",
	      alignItems: "center"
	    }
	  }, [_c('text', [_vm._v(_vm._s(_vm.fullName))]), _c('text', {
	    staticClass: ["box"],
	    on: {
	      "click": _vm.changeName
	    }
	  }, [_vm._v(_vm._s(_vm.change))])]), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("4 研究渲染逻辑控制机器-append属性"))]), _vm._m(0), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("5 组件封装"))]), _c('text', {
	    staticClass: ["title"]
	  }, [_vm._v(_vm._s("6 研究Android扩展"))]), _c('text', {
	    on: {
	      "click": _vm.moduleClick
	    }
	  }, [_vm._v("Module 扩展")]), _c('weex.RichText', {
	    attrs: {
	      "tel": "12305"
	    }
	  }, [_vm._v("Component 扩展")]), _c('text', {
	    on: {
	      "click": _vm.callWeex
	    }
	  }, [_vm._v("native回调weex方法")]), _c('div', {
	    staticStyle: {
	      height: "150",
	      backgroundColor: "#ffffff"
	    }
	  })], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('div', {
	    appendAsTree: true,
	    attrs: {
	      "id": "world",
	      "append": "tree"
	    }
	  }, [_c('text', [_vm._v("Hello World!")])]), _c('div', {
	    attrs: {
	      "id": "weex",
	      "append": "node"
	    }
	  }, [_c('text', [_vm._v("Hello Weex!")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }
/******/ ]);