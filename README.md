# Align Equals Mixin for Chocolat. 

A mixin for the awesome [Chocolat](http://chocolatapp.com) text editor that adds the ability to align equal signs across multiple lines.

# What it does

If you have a messy variable assignment code that looks like the following:

```javascript
var survey      = "Some Survey";
var sidebar   =  "App Sidebar"; 
var main    =      "App Main";
```
you can select that mess, click `ctrl`+`=` and you get a beautifully formatted, easy-on-eyes prettines, such as:

```javascript
var survey  = "Some Survey";
var sidebar = "App Sidebar"; 
var main    = "App Main";

```

## Tested with 

 * Chocolat 1.2.1

## Installation

In the Chocolat application menu, find:

    Actions -> Install Mixins…
    
dialog, find and install `alignequals` mixin.

When installed, you can format a JSON snippet by selecting it and pressing `Ctrl+=` or from the menu: 

    Go -> Align Equals

## License 

(The MIT License)

Copyright © 2014 Irakli Nadareishvili.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
