chreome extention study
=======================

- 基礎知識
    - 最低 manifest.json だけで拡張機能として登録できる
    - 複数のセグメントでスクリプトが動作、連動して、１つの拡張機能になる
        - background: tab横断で共有されるスクリプト、基本的にchromeオブジェクトのフル機能を使えるのはここだけ
        - popup
        - content: current page自体で動作するスクリプト
- api references
    - [Develop Extensions \- Google Chrome](https://developer.chrome.com/extensions/devguide)
    - storage: [chrome\.storage \- Google Chrome](https://developer.chrome.com/extensions/storage)
        - 拡張機能を基礎としてブラウザに値を保存する
        - chrome.storage.sync, chrome.storage.local
        - sync と local の2つのタイプが有る
            - local: browser標準の web storage apiと同一
            - sync: chrome
    - browserAction: [chrome\.browserAction \- Google Chrome](https://developer.chrome.com/extensions/browserAction)
        - バッジや、アイコンクリックのイベントまたは其の際のポップアップ
        - クリックイベントを設定: `chrome.browserAction.onClicked.addListener((tab) => { console.log(tab) })`
            - 

getting start
-------------

[Getting Started Tutorial \- Google Chrome](https://developer.chrome.com/extensions/getstarted)

1. create manifest file
    - [Manifest File Format \- Google Chrome](https://developer.chrome.com/extensions/manifest#icons)
    - ex:
    ```
    {
      "name": "Getting Started Example",
      "version": "1.0",
      "description": "Build an Extension!",
      "manifest_version": 2
    }
    ```
2. update extention
    1. access to [chrome extention](chrome://extensions/)
    2. switch on developper mode
    3. click "load unpacked" and select project folder
3. add background script
    1. add "background" to manifest.json
    2. and　edit background.js
    3. access to [chrome extention](chrome://extensions/) and click background page


