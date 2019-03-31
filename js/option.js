$(function () {
  const ELEMENT_SELECTOR = '#form'
  const KEYS = [
    'text'
  ]

  // 値の初期化
  const setDefaultValues = () =>{
    chrome.storage.sync.get(KEYS, (values) => {
      for (let k in values) {
        switch(k) {
          case 'text':
            elBase.find('[name="text"]').val(values[k])
        }
      }
    })
  }

  let elBase = $(ELEMENT_SELECTOR)
  setDefaultValues()

  // formのsubmitイベント
  elBase.submit(() => {
    try {

      // form内の値を取得して、ストレージに保存
      let elText = elBase.find('[name="text"]')
      let text = elText ? $(elText).val() : ''

      chrome.storage.sync.set({'text': text})

    } catch (e) {
      console.error(e)
    } finally {
      return false
    }
  })
})