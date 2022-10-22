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
    sorted(type = 'по возрастанию') {
        if (type === 'по возрастанию') {
            return this.userList.sort((a, b) => a.age - b.age);
        }
        else {
            return this.userList.sort((a, b) => b.age - a.age);
        }
    }
}
exports.Users = Users;
