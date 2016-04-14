# semantic-css-classes

This is a mini css framework, a set of css helper classes. Created to avoid routine css actions.

For example use `class='p-l-25'` instead of style `padding-left: 25px`

or `class='m-t--25i'` instead of style `margin-top: 25px!important`

## usage

### margin

in class `m-[d]-[x]`:

`m` means margin

`[d]` can be one of: `l`(left), `r`(right), `t`(top), `b`(bottom)

`[x]` can be an integer between `-1000` and `1000` with step `5`: `-1000`, `-995`, `-990`, `-985`, ... `990`, `995`, `1000`

if you add the `i` char after the classname, eg. `m-b-20i`, the style will be applied with `!important` postfix.

### padding

in class `p-[d]-[x]`:

`p` means padding

`[d]` can be one of: `l`(left), `r`(right), `t`(top), `b`(bottom)

`[x]` can be an integer between `0` and `1000` with step `5`: `0`, `5`, `10`, `15`, ... `990`, `995`, `1000`

if you add the `i` char after the classname, eg. `p-b-20i`, the style will be applied with `!important` postfix.

### position

in class `[d]-[x]`:

`[d]` can be one of: `l`(left), `r`(right), `t`(top), `b`(bottom)

`[x]` can be an integer between `-1000` and `1000` with step `5`: `-1000`, `-995`, `-990`, `-985`, ... `990`, `995`, `1000`

if you add the `i` char after the classname, eg. `b-20i`, the style will be applied with `!important` postfix.

## installation

via bower
```
bower install semantic-css-classes
```

or manually connect the css
```
<link rel="stylesheet" type="text/css" href="path-to/semantic-css-helpers.min.css">
```

## contributing

- fork repo, create a branch for feature
- write tests, do code
- compile css via `gulp sass`
- run `karma start` and be sure that all tests are passed
- do PR

## TODO

- support other than `px` dimentions: percent, em, etc.
