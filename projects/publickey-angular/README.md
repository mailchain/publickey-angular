# PublickeyAngular

This package is an Angular service that helps query the Mailchain API public-key endpoint.

## Installing

```sh
npm install @mailchain/publickey-angular --save
```

## Usage

In your Angular `app.module.ts` file, import the `PublickeyAngularModule`:

```ts

import { PublickeyAngularModule } from '@mailchain/publickey-angular';

@NgModule({
  declarations: [
    AppComponent
    ...
  ],
  imports: [
    ...
    PublickeyAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

In an Angular component file, eg. `my-component.component.ts`, add the following:

``` ts
  // import the service
  import { PublickeyService } from '@mailchain/publickey-angular';

  // add to constructor
  constructor(
    private publickeyService: PublickeyService,
  ) { }

  // add to function and then execute logic in the callback
  myFunction() {
    const protocol = "ethereum" // change accordingly or use function params
    const network = "ropsten" // change accordingly or use function params
    const address = "0xd6d77865e128cd727526f45583d707a72eb56eb0" // change accordingly or use function params

    const obs = this.publicKeyService.getPublicKeyFromAddress(address, protocol, network)

    obs.subscribe(obs => {
      console.log(obs['body']) // { "public-key": "0x69d908510e355beb1d5bf2df8129e5b6401e1969891e8016a0b2300739bbb00687055e5924a2fd8dd35f069dc14d8147aa11c1f7e2f271573487e1beeb2be9d0",   "public-key-encoding": "hex/0x-prefix",   "public-key-kind": "secp256k1",   "supported-encryption-types": [     "aes256cbc",     "noop"  ]}
      console.log(obs['body']['public-key'])
    })
  }

```

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project publickey-angular` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project publickey-angular`.
> Note: Don't forget to add `--project publickey-angular` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build publickey-angular` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build publickey-angular`, go to the dist folder `cd dist/publickey-angular` and run `npm publish`.

## Running unit tests

Run `ng test publickey-angular` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
