<img src="http://bitcore.io/css/images/module-message.png" alt="viacore message" height="35">
# Viacoin Message Verification and Signing for Bitcore


[![NPM Package](https://img.shields.io/npm/v/viacore-message.svg?style=flat-square)](https://www.npmjs.org/package/viacore-message)
[![Build Status](https://img.shields.io/travis/viacoin/viacore-message.svg?branch=master&style=flat-square)](https://travis-ci.org/viacoin/viacore-message)
[![Coverage Status](https://img.shields.io/coveralls/viacoin/bitcore-message.svg?style=flat-square)](https://coveralls.io/r/viacoin/viacore-message?branch=master)

bitcore-message adds support for verifying and signing bitcoin messages in [Node.js](http://nodejs.org/) and web browsers.

See [the main viacore repo](https://github.com/viacoin/viacore) for more information.

## Getting Started

```sh
npm install viacore-message
```

```sh
bower install viacore-message
```

To sign a message:

```javascript
var viacore = require('viacore-lib');
var Message = require('viacore-message');

var privateKey = viacore.PrivateKey.fromWIF('cPBn5A4ikZvBTQ8D7NnvHZYCAxzDZ5Z2TSGW2LkyPiLxqYaJPBW4');
var signature = Message('hello, world').sign(privateKey);
```

To verify a message:

```javascript
var address = 'n1ZCYg9YXtB5XCZazLxSmPDa8iwJRZHhGx';
var signature = 'IKdE4ut+leOMMN2CgW3iq71+K6NzjXJLwpMs0ZfFw3IoFzy6J7F06iK5qwQNQQxakUZPLmUlDKh2iG2VA1gygGY=';
var verified = Message('hello, world').verify(address, signature);
```

## Contributing

See [CONTRIBUTING.md](https://github.com/viacoin/viacore/blob/master/CONTRIBUTING.md) on the main viacore repo for information about how to contribute.

## License

Code released under [the MIT license](https://github.com/viacoin/viacore/blob/master/LICENSE).

Copyright 2013-2015 BitPay, Inc. Bitcore is a trademark maintained by BitPay, Inc.

Copyright 2017 The Viacoin Core Developers