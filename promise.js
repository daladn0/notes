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

// Example

let div = document.createElement('div');
div.className = 'alert';
div.innerHTML = "<strong>Hello everyone!</strong> You've read an important message.";

// Without promise
setTimeout(() => {
    document.body.append(div);

    setTimeout(() => {
        let div2 = div.cloneNode(true);
        div2.querySelector('strong').innerHTML = 'Almost done!';
        div.after(div2);

        setTimeout(() => {
            let div3 = div.cloneNode(true);
            div3.querySelector('strong').innerHTML = 'Almost there!!!';
            div2.after(div3);

            setTimeout(() => {
                let div4 = div.cloneNode(true);
                div4.querySelector('strong').innerHTML = 'Bye!';
                div3.after(div4);
            }, 2000);
        }, 2000);
    }, 2000);
}, 2000);

// With promise

new Promise(resolve => {
    setTimeout(() => {
        document.body.append(div);
        resolve(div);
    }, 2000);
})
    .then(
        res => {
            return new Promise(resolve => {
                setTimeout(() => {
                    let div2 = res.cloneNode(true);
                    div2.querySelector('strong').innerHTML = 'Almost Done!';
                    div.after(div2);
                    resolve(div2);
                }, 2000);
            }) 
        }
    )
    .then(
        res => {
            return new Promise(resolve => {
                setTimeout(() => {
                    let div3 = res.cloneNode(true);
                    div3.querySelector('strong').innerHTML = 'Almost There!';
                    res.after(div3);
                    resolve(div3);
                }, 2000)
            })
        }
    )
    .then(
        res => {
            setTimeout(() => {
                let div4 = res.cloneNode(true);
                div4.querySelector('strong').innerHTML = 'Bye!';
                res.after(div4);
            }, 2000);
        }
    )
