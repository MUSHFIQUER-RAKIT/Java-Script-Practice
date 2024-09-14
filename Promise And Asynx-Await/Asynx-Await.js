// ~~~~~~~~~~~~~~~~~~~~~~~~~~ JavaScript Callbacks  & Asynchronous & promise
const paymentSuccess = true;
const marks = 70;
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

async function course() {
  try {
    await enRollment();
    await progress();
    const meassage = await getCertificate();
    console.log(meassage);
  } catch (err) {
    console.log(err);
  }
}
course();
