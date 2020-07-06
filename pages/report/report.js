Page({
  data: {
    entime: {
      enter: 600,
      leave: 300
    }, //进入褪出动画时长
    steps: [
      {
        text: '步骤一',
        desc: '选择举报类别',
        inactiveIcon: 'info-o',
        activeIcon: 'success',
      },
      {
        text: '步骤二',
        desc: '填写表单',
        inactiveIcon: 'records',
        activeIcon: 'success',
      },
      {
        text: '步骤三',
        desc: '完成举报',
        inactiveIcon: 'star-o',
        activeIcon: 'success',
      },
    ],
  },
  initial() {
    let that = this;
    that.setData({
      show_a:true,
      show_off1: false,
      show_off2: false,
      show_on: false,
      show_c:false,
      active:0
    })
  },
  onLoad() {
    this.initial();
  },

  go(e) {
    let that = this;
    var type = e.currentTarget.dataset.type;
    console.log(e.currentTarget.dataset.type);
    if ( type == "offline1" || type=="offline2") {
      that.setData({
        show_a:false,
        show_off1: true,
        show_off2: false,
        show_on: false,
        show_c: false,
        active:1
      })
    }
    else if (type == "online"){
      that.setData({
        show_a: false,
        show_off1: false,
        show_off2: false,
        show_on: true,
        show_c: false,
        active: 1
      })
    }
    else{}
  },
  change_step(e){
    let that=this;
    if(that.data.active==1&&e.detail==0){
      that.setData({
        active:0,
        show_a: true,
        show_off1: false,
        show_off2: false,
        show_on: false,
        show_c: false,
      })
    }
  },
  submit(){
    let that=this;
    that.setData({
      active: 2,
      show_a: false,
      show_off1: false,
      show_off2: false,
      show_on: false,
      show_c: true,
    })
  },
  finish(){
    let that=this;
    that.setData({
      active: 0,
      show_a: true,
      show_off1: false,
      show_off2: false,
      show_on: false,
      show_c: false,
    })
  }
})
