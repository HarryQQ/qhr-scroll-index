# qhr-scroll-index
> 获取滚动模块的下标

## Usage

```angular2html
import MyUtil from 'qhr-scroll-index'

const myUtil = new MyUtil();

myUtil.getIndex({
  ids: ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
  option: this.observerOpt,
  callBack: this.getCurrentCB
})

```
