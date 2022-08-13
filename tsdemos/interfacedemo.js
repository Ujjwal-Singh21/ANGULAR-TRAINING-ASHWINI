var VideoChannel = /** @class */ (function () {
    
  function VideoChannel () {}
  VideoChannel.prototype.UploadVideo = function () {
    console.log('Video Added')
  }
  VideoChannel.prototype.SMSNotify = function () {
    console.log('VideoAdded-SMS sent')
  }
  VideoChannel.prototype.EmailNotify = function () {
    console.log('VideoAdded- email sent')
  }
  return VideoChannel
})()
var obj1 = new VideoChannel()
obj1.UploadVideo()
obj1.SMSNotify()
obj1.EmailNotify()
