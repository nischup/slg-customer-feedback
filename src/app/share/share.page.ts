import { Component, OnInit } from '@angular/core';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-share',
  templateUrl: './share.page.html',
  styleUrls: ['./share.page.scss'],
})
export class SharePage implements OnInit {

  constructor() { }

  ngOnInit() {}

   async shareText() {
    const shareData = {
      title: 'Check out this amazing customer feedback app!',
      text: 'Download the app and enjoy!',
      url: 'https://silverlinegroup.net/task/apk/slg-customer-feedback.apk',
    };

    await Share.share(shareData);
  }

}
