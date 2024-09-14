// ~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript Callbacks  & Asynchronous & promise
const paymentSuccess = true;
const marks = 90;
// promise defination
function enRollment() {
  console.log("Course enrollment is in progress.!");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment Failed !");
      }
    }, 2000);
  });
  return promise;
}

function progress() {
  console.log("Course on Progress !");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get certificate");
      }
    }, 3000);
  });
  return promise;
}

function getCertificate() {
  console.log("preparing the certificate !");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("congrats you got the certificate !");
    }, 1000);
  });
  return promise;
}
// promise declaration
enRollment()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });
