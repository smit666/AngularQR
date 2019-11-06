import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularQR';
  qrcodename : string;
  elementType: 'url' | 'canvas' | 'img' = 'url';
  value: string;
  display = false;
  href : string;
  generateQR(){
    if(this.qrcodename == ''){
      this.display = false;
      alert("Please enter data");
      return;
    }
    else{
      this.value = this.qrcodename;
      this.display = true;
    }
  }
  downloadQRImage(){
    this.href = document.getElementsByTagName('img')[0].src;
  }
}
