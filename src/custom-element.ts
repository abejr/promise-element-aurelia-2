import { bindable } from "aurelia";

export class CustomElement{
    @bindable public promiseFunction:Promise<any>;
    message:string = "Hello World inside Custom Element";
}