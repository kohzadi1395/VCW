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
// }
import {Component} from '@angular/core';
import {FileUploader} from 'ng2-file-upload/ng2-file-upload';
// const URL = '/api/';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
  selector: 'app-create-challenge',
  templateUrl: './create-challenge.component.html',
  styleUrls: ['./create-challenge.component.css']
})
export class CreateChallengeComponent {
  public uploader: FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver = false;
  public hasAnotherDropZoneOver = false;

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }
}
