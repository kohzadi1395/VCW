import {Component, Input} from '@angular/core';
import {FileUploader, FileUploaderOptions} from 'ng2-file-upload';
import {Challenge} from '../Models/challenge';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent {
  @Input()
  challenge: Challenge;
  URL = 'asdf';
  uploader = new FileUploader(
    {
      url: 'http://localhost:61072/api/Challenge/upload',
      headers: [
        {name: 'X-XSRF-TOKEN', value: this.getCookie('XSRF-TOKEN')},
        {name: 'Accept', value: 'application/json'}
      ],
      isHTML5: true,
      // allowedMimeType: ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/zip"]
      allowedFileType: [
        'application',
        'image',
        'video',
        'audio',
        'pdf',
        'compress',
        'doc',
        'xls',
        'ppt'
      ],
      removeAfterUpload: false,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    } as FileUploaderOptions
  );
  private fileType = '';

  constructor() {
    this.uploader.onBuildItemForm = (fileItem, form) => {
      form.append('FileType', this.FileType);
    };
  }

  get FileType(): string {
    return this.fileType;
  }

  @Input()
  set FileType(value: string) {
    this.fileType = value;
    console.log(this.fileType);
  }

  getCookie(name: string): string {
    const value = '; ' + document.cookie;
    const parts = value.split('; ' + name + '=');
    if (parts.length === 2) {
      return decodeURIComponent(parts.pop().split(';').shift());
    }
  }

}
