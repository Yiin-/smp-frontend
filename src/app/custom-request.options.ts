import { Injectable } from '@angular/core';
import { BaseRequestOptions, RequestOptions, RequestOptionsArgs } from '@angular/http';

@Injectable()
export class CustomRequestOptions extends BaseRequestOptions {
    merge(options?: RequestOptionsArgs): RequestOptions {
        options.url = 'http://localhost:3000' + options.url;

        const result = super.merge(options);

        result.merge = this.merge;

        return result;
    }
}