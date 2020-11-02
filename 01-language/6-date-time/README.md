# Date and Time

The built-in object `Date` stores the date, time and provides methods for date/time management.

<br>

## Creation

`new Date()` is used to create a Date object.

```js
let now = new Date();
now; // shows current date/time
```

**- new Date(number)**: We can pass an integer representing number of milliseconds passed after the Jan 1st of 1970 UTC+0:

```js
let jan02_1970 = new Date(24 * 3600 * 1000);
jan02_1970; // 1970-01-02T00:00:00.000Z
```

Dates before 01.01.1970 have negative timestamps

**- new Date(datestring)**: uses the same algorithm as `Date.parse` to parse the string to date:

```js
let date = new Date("2020-11-03");
date; // 2020-11-03T00:00:00.000Z
```

**- new Date(year, month, date, hours, minutes, seconds, ms)**: only the first two arguments are required.

```js
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 Jan 2011, 00:00:00
new Date(2011, 0, 1); // same as above
```

<br>

## Access date components

* `getFullYear()`: get the 4 digits year (also `getUTCFullYear()`)
* `getMonth()`: get the month, from 0 to 11 (also `getUTCMonth()`)
* `getDate()`: get the day of month, from 1 to 31 (also `getUTCDay()`)
* `getHours()`
* `getMinutes()`
* `getSeconds()`
* `getMilliseconds()`
* `getDay()`: get the day of week, from 0 (Sunday) to 6 (Saturday)
* `getTime()`: timestamp for the date, in milliseconds
* `getTimezoneOffset()`: difference between UTC and the local time zone, in minutes

```js
let date = new Date();

date.getHours(); // 20
date.getUTCHours(); // 9

date.getTime(); // 1604223106351

date.getTimezoneOffset(); // -660
```

<br>

## Setting date components

* `setFullYear(year, [month], [date])`
* `setMonth(month, [date])`
* `setDate(date)`
* `setHours(hour, [min], [sec], [ms])`
* `setMinutes(min, [sec], [ms])`
* `setSeconds(sec, [ms])`
* `setMilliseconds(ms)`
* `setTime(milliseconds)`

```js
date.setHours(0);
date; // today, but the hour is 0

date.setHours(0, 0, 0, 0);
date; // today, 00:00:00 sharp
```

<br>

## Autocorrection

We can set out-of-range values, and it will auto-adjust itself.

```js
let date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

date; // 1 Mar 2016
```

<br>

## Date to number

Date object conversion to number results in a timestamp - same as date.getTime().

```js
let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

console.log(`${end - start} ms`); // 5 ms
```

<br>

## Date.now()

Returns the current timestamp (same as `getTime()` but doesn't need a Date object).

```js
let startNow = Date.now();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let endNow = Date.now();

console.log(`${endNow - startNow} ms`); // 5 ms
```

<br>

## Date.parse

`Date.parse(str)` can read and parse a date from a string.

The string format should be in this format: `YYYY-MM-DDTHH:mm:ss.sssZ`.

- Character `T` is a delimiter.
- Optional character `Z` denotes the time zone in the format `+-hh:mm`. A single letter `Z` that would mean `UTC+0`.

We can also use the shorter versions like `YYYY-MM-DD` or `YYYY`, etc.

```js
let ms = Date.parse('2020-11-03T08:30:00.250-04:30');

console.log(ms); // 1604408400250
```

We can create a new Date from the timestamp.

```js
let dt = new Date(ms);
console.log(dt); // 2020-11-03T13:00:00.250Z
```

<br>


<br>


<br>