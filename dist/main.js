"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const modal_1 = require("./modules/modal/modal");
const users_1 = require("./modules/users/users");
const scroll_1 = require("./modules/scroll/scroll");
(0, modal_1.initModal)();
(0, users_1.loadUsers)();
(0, scroll_1.initScrollAnimation)();
