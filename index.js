var sslChecker = require('get-ssl-certificate');

sslChecker.get('www.cancer.gov').then( function(certificate){
    console.log("Certificate for www.cancer.gov expires: " + certificate.valid_to);
});


sslChecker.get('expired.badssl.com').then( function(certificate){
    console.log("Certificate for expired.badssl.com expires: " + certificate.valid_to);
});
