"use strict";
class HttpResponse {
    constructor(success, data, error) {
        this._success = success;
        if (data) {
            this._data = data;
        }
        if (error) {
            this._code = error;
        }
    }
}
const responseToken = new HttpResponse(true, 456465565456);
const responseUser = new HttpResponse(true, 'Генадий Иванов');
