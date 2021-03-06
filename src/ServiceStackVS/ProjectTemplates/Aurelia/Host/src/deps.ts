﻿/// <reference path='../typings/index.d.ts'/>

import {Aurelia} from 'aurelia-framework';
import {bootstrap} from 'aurelia-bootstrapper'
import {TemplatingBindingLanguage} from 'aurelia-templating-binding';
import {NumberRepeatStrategy} from 'aurelia-templating-resources';
import {ConsoleAppender} from 'aurelia-logging-console';
import {TemplatingRouteLoader} from 'aurelia-templating-router';

export class Deps {
    aurelia: Aurelia;

    constructor() {
        var a = new Aurelia();
        var b = bootstrap(null);
        var c = new TemplatingBindingLanguage();
        var d = new NumberRepeatStrategy();
        var e = new ConsoleAppender();
        var f = new TemplatingRouteLoader(null);
    }
}