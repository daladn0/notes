console.log('Request data...');

// setTimeout(() => {
//   console.log('Preparing data...');

//   const backendData = {
//     server: 'localhost',
//     port: 447,
//     status: 'acive'
//   };

//   setTimeout(() => {
//     backendData.modified = true;
//     console.log('Data received', backendData);
//   }, 2000);
// }, 2000);

const promise1 = new Promise((resolve, reject) => {

  setTimeout(() => {
    console.log('Preparing data...');
    
    const backendData = {
      server: 'localhost',
      port: 80,
      status: 'active'
    };

    resolve(backendData);
  }, 2000);

});

promise1.then((data) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.modified = true;
      resolve(data);
    }, 2000);
  });

})
.then(clientData => {
  console.log('Data received', clientData);
  clientData.fromPromise = true;
  return clientData;
})
.then(data => {
  console.log('Modified data', data);
})
.catch(err => console.log('Error: ', err))
.finally(() => console.log('Session is over'));
