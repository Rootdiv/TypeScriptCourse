"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
class Users {
    constructor() {
        this.userList = [];
    }
    add(item) {
        this.userList.push(item);
    }
    remove(id) {
        return this.userList.find((item, index) => {
            if (item.id === id) {
                return this.userList.splice(index, 1);
            }
        })
            ? true
            : false;
    }
    get(id) {
        return this.userList.find(item => item.id === id) ?? null;
    }
}
exports.Users = Users;
