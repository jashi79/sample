import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ENV } from '@app/env';

@Injectable()
export class HttpClientExt {

	constructor(private http: HttpClient) { }

	private createAuthorizationHeader(headers: HttpHeaders): HttpHeaders {
		return headers.append(ENV.API_HEADER_NAME, ENV.API_HEADER_VALUE);
		// headers.append('Origin', ENV.API_CROSS_ORIGIN_URL);
	}


	get<T>(url) {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.get<T>(url, {
			headers
		});
	}

	post<T>(url, data) {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers
		});
	}

	put<T>(url, data) {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers
		});
	}

	delete<T>(url) {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.get<T>(url, {
			headers
		});
	}

	patch<T>(url, data) {
		let headers = new HttpHeaders();
		headers = this.createAuthorizationHeader(headers);
		return this.http.post<T>(url, data, {
			headers
		});
	}

}
