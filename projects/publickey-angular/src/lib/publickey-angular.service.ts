import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHelpersAngularService } from '@mailchain/http-helpers-angular';

@Injectable({
  providedIn: 'root'
})
export class PublickeyAngularService {
  private url: string

  constructor(
    private http: HttpClient,
    private httpHelpersService: HttpHelpersAngularService,
  ) {
    this.initUrl()
  }

  /**
   * Initialize URL from local storage
   */
  initUrl() {
    this.url = `http://127.0.0.1:8080/api`
  }

  /**
   * Get the public key of a public address
   */
  getPublicKeyFromAddress(public_address, protocol, network) {
    var httpOptions = this.httpHelpersService.getHttpOptions([
      ['protocol', protocol],
      ['network', network],
      ['address', public_address],
    ])

    return this.http.get(
      `${this.url}/public-key`,
      httpOptions
    );
  }

}