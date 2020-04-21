import "core-js/stable";
import "regenerator-runtime/runtime";

/**
 * @param ids 模块id列表 例如 ['one', 'two', 'three']
 * @param option intersetion参数 {rootMargin: '0px 0px 0px 0px', threshold: 0, root: document.querySelector('#scrollArea')}
 * @param callBack 回调页面下标
 * 由上向下滚时模块已经被滚没，当前下标应该为下一个模块的
 * 由下向上滚时模块在顶部刚冒头，当前下标应该改为该模块的
 */

class MyUtil {
  constructor() {
    this.index = 0
    this.defaultOpt = {
      rootMargin: '0px 0px 0px 0px',
      threshold: 0,
      root: null
    }
  }

  getIndex({ids = [], option = {}, callBack}) {
    option = Object.assign(this.defaultOpt, option)
    let observer = new IntersectionObserver((entries, observer) => {
      const activeItem = entries[0] // 触发的模块
      const activeIndex = ids.findIndex(item => item === activeItem.target.id)  // 触发的模块下标
      if (this.index < activeIndex) return // 如果触发的是下一个模块的出现或者消失，下标维持不变
      this.index = activeItem.isIntersecting ? activeIndex : activeIndex + 1
      callBack && callBack(this.index)
    }, option);
    ids.forEach(item => {
      observer.observe(document.querySelector("#" + item));
    })
  }
}

export default MyUtil;
