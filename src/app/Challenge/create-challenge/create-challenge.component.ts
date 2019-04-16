// import {Component, OnInit} from '@angular/core';
// import {FormBuilder, Validators} from '@angular/forms';
// import {AuthService} from '../../Service/auth.service';
// import {EmailValidation} from '../../../Utilities/UtilityStringFunc';
//
// @Component({
//   selector: 'app-create-challenge',
//   templateUrl: './create-challenge.component.html',
//   styleUrls: ['./create-challenge.component.css']
// })
// export class CreateChallengeComponent implements OnInit {
//   form;
//
//   constructor(private  fb: FormBuilder, private auth: AuthService) {
//     this.form = fb.group({
//         describeChallenge: ['', Validators.required],
//         audioFile: ['', Validators.required],
//         videoFile: ['', [Validators.required,]],
//         picFile: ['', Validators.required],
//         deadLine: ['', Validators.required],
//         invitedPerson: ['', Validators.required]
//       }
//     );
//   }
//
//   ngOnInit() {
//   }
//
// // }


// import {Component} from '@angular/core';
// import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
// // const URL = '/api/';
// const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
//
// @Component({
//   selector: 'app-create-challenge',
//   templateUrl: './create-challenge.component.html',
//   styleUrls: ['./create-challenge.component.css']
// })
// export class CreateChallengeComponent {
//   public uploader: FileUploader = new FileUploader({
//     url: URL,
//     isHTML5: true,
//     // allowedMimeType: ["image/jpeg", "image/png", "application/pdf", "application/msword", "application/zip"]
//     allowedFileType: [
//       'application',
//       'image',
//       'video',
//       'audio',
//       'pdf',
//       'compress',
//       'doc',
//       'xls',
//       'ppt'
//     ],
//     removeAfterUpload: true,
//     autoUpload: false,
//     maxFileSize: 10 * 1024 * 1024
//   });
//   private model: any;
//
//   constructor() {
//
//     this.uploader.onSuccessItem = (item, response, status, headers) => {
//       if (response) {
//         const ticket = JSON.parse(response);
//         console.log('ticket:', ticket);
//       }
//     };
//     this.uploader.onBuildItemForm = (fileItem, form) => {
//       for (const key in this.model) {
//         if (this.model.hasOwnProperty(key)) {
//           form.append(key, this.model[key]);
//         }
//       }
//     };
//     this.uploader.onCompleteAll = () => {
//       // clear the form
//       // this.model = new Ticket();
//     };
//     this.uploader.onWhenAddingFileFailed = (item, filter, options) => {
//       // msg: 'You can't select ${item.name} file because of the ${filter.name} filter.'
//     };
//     this.uploader.onErrorItem = (fileItem, response, status, headers) => {
//       //
//     };
//     this.uploader.onSuccessItem = (item, response, status, headers) => {
//       if (response) {
//         const ticket = JSON.parse(response);
//         console.log('ticket:', ticket);
//       }
//     };
//   }
//
//   public hasBaseDropZoneOver = false;
//   public hasAnotherDropZoneOver = false;
//
//   public fileOverBase(e: any): void {
//     this.hasBaseDropZoneOver = e;
//   }
//
//   public fileOverAnother(e: any): void {
//     this.hasAnotherDropZoneOver = e;
//   }
//
//   onSubmit() {
//
//   }
// }

import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }
}
