import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PublickeyAngularService } from 'projects/publickey-angular/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  publickeyForm;
  publickey = {};

  constructor(
    private formBuilder: FormBuilder,
    private publickeyService: PublickeyAngularService
  ) {
    this.publickeyForm = this.formBuilder.group({
      address: '0xd5ab4ce3605cd590db609b6b5c8901fdb2ef7fe6'
    });
  }

  onSubmit(formData) {
    const protocol = "ethereum"
    const network = "ropsten"
    // Process publickey data here
    this.publickeyService.getPublicKeyFromAddress(formData['address'], protocol, network).subscribe(res => {
      this.publickey = res['body']
    },
      err => {
        this.publickey = err['error']
      })

    this.publickeyForm.reset();
  }
}
