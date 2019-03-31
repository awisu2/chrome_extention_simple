let share = {
  cst: {
      STORAGE_CSS: "csses",
      ENABLE: "enable",
  },
  default: {
      csses: [
          {
              domain: ".*",
              css: `/* domain ".*" is global css */
iframe {
  display: block !important;
  width: 1px !important;
  height: 1px !important;
  border: solid 1px #000 !important;
}
iframe * {
  display: none !important;
}`,
          },
      ]
  },
  get: {
      all: function(callback){
          _chrome.storage.get([share.cst.STORAGE_CSS, share.cst.ENABLE], function(datas){
              let _datas = {
                  [share.cst.ENABLE]: true,
                  [share.cst.STORAGE_CSS]: share.default.csses,
              };
              if(share.cst.ENABLE in datas) {
                  _datas[share.cst.ENABLE] = datas[share.cst.ENABLE];
              }
              if(share.cst.STORAGE_CSS in datas) {
                  let _csses = datas[share.cst.STORAGE_CSS];
                  if(_csses.length > 0) _datas[share.cst.STORAGE_CSS] = _csses;
              }

              callback(_datas);
          });
      },
      csses: function(callback){
          _chrome.storage.get([share.cst.STORAGE_CSS], function(datas){
              let csses = share.default.csses;
              if(share.cst.STORAGE_CSS in datas) {
                  let _csses = datas[share.cst.STORAGE_CSS];
                  if(_csses.length > 0) csses = _csses;
              }
              callback(csses);
          });
      },
      enable: function(callback){
          _chrome.storage.get([share.cst.ENABLE], function(datas){
              let enable = true;
              if(share.cst.ENABLE in datas) {
                  enable = datas[share.cst.ENABLE];
              }
              callback(enable);
          });
      },
  },
  set: {
      csses: function(val, callback){
          _chrome.storage.set({[share.cst.STORAGE_CSS]: val}, callback);
      },
      enable: function(val, callback){
          _chrome.storage.set({[share.cst.ENABLE]: val}, callback);
      },
  },


};
