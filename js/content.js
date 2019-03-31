// TODO: onloadを上書きしてしまうバグは対処していない
window.onload = function()
{
  let elBody = document.getElementsByTagName('body')[0]
  // TODO: bodyがないときの代替が必用
  if (!elBody) return

  const ID = 'vueapp'
  const STYLES = {
    BASE: `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 9999;
      padding: 3px;
    `
  }

  // vue用にelementを作成
  let createElementBase = (id) => {
    let el = document.createElement('div')
    el.id = id
    return el
  }
  elBody.appendChild(createElementBase(ID))

  new Vue({
    el: '#'+ID,
    data: {
      isShow: false,
      text: ''
    },
    template: `<div style="${STYLES.BASE}" v-if="isShow">
      text: {{text}}
    </div>`,
    created: function () {
      this.setEvent()
      this.reset()
    },
    methods: {
      // event set
      setEvent: function() {
        // メッセージイベント
        chrome.runtime.onMessage.addListener((message, sender, response) => {          
          switch (message.kind) {
            // browser icon click
            case MESSAGE_BROWSERADCION_ONCLICK:
              this.isShow = !this.isShow
              break
          }
        })
  
        // ストレージ更新イベント
        chrome.storage.onChanged.addListener((changes, areaName) => {
          for (let k in changes) {
            this[k] = changes[k].newValue
          }
        })
      },
      // values reset
      reset: function() {
        // get
        chrome.storage.sync.get(['text'], (values) => {
          for (let k in values) {
            this[k] = values[k]
          }
        })
      }
    }
  })
};

