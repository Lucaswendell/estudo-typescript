"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertyKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);
    };
}
class MyClass {
    testing() {
        console.log("Terminando execução do metodo!");
    }
}
__decorate([
    myDecorator(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MyClass.prototype, "testing", null);
const myClass = new MyClass();
myClass.testing();
// 2 - multiplos decorators
function a() {
    return (target, propertyKey, descriptor) => {
        console.log("Executou a.");
    };
}
function b() {
    return (target, propertyKey, descriptor) => {
        console.log("Executou b.");
    };
}
//Executa o mais abaixo primeiro
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    b(),
    a(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MultipleDecorators.prototype, "testing", null);
new MultipleDecorators().testing();
//3 - Class decorator
function classDec(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuario.");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDec,
    __metadata("design:paramtypes", [String])
], User);
const lucas = new User("Lucas");
console.log(lucas);
//4 - method decorator
function enumerable(value) {
    return (target, propertyKey, descriptor) => {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        console.log(`O nome da maquina é ${this.name}`);
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Machine.prototype, "showName", null);
new Machine("Trator").showName();
//5 - Acessor decorator(Apenas set e get)
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return this.name;
    }
    get showAge() {
        return this.age;
    }
}
__decorate([
    enumerable(false),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Monster.prototype, "showName", null);
__decorate([
    enumerable(true),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Monster.prototype, "showAge", null);
console.log(new Monster("Charmander", 10));
//6 - property decorator
function formatNumber() {
    return function (target, propertyKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newValue) {
            value = newValue.padStart(5, '0');
        };
        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        });
    };
}
class ID {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber(),
    __metadata("design:type", Object)
], ID.prototype, "id", void 0);
const id = new ID("1");
console.log(id);
