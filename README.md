# Sample for retrieving SSL expiration dates

Uses the get-ssl-certificate module to retrieve a site's TLS certificate

    var sslChecker = require('get-ssl-certificate');
    
    sslChecker.get('www.google.com').then( function(certificate){
        console.log(certificate.valid_to);
    });


Under the hood, `certificate` is an object returned by [tlsSocket.getPeerCertificate()](https://nodejs.org/api/tls.html#tls_tlssocket_getpeercertificate_detailed)
and those properties are available in addition to the expiration date.
