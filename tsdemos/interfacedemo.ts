interface INotification {
  SMSNotify(): void
  EmailNotify(): void
}

class VideoChannel implements INotification {

  UploadVideo () {
    console.log('Video Added')
  }

  SMSNotify (): void {
    console.log('VideoAdded-SMS sent')
  }
  
  EmailNotify (): void {
    console.log('VideoAdded- email sent')
  }
}

var obj1 = new VideoChannel()
obj1.UploadVideo()
obj1.SMSNotify()
obj1.EmailNotify()
