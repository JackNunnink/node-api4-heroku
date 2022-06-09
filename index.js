require('dotenv').config();

const server = require('./api/server');

console.log(process.env.PORT);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

// function someProcedure (a) {
//   if(a === 1) {
//     return 5;
//   } else if(a === 2) {
//     return 10;
//   }

//   throw new Error('a is not 1 or 2');
// }

// function someOtherProcedure (a, b) {
//   return someProcedure(a) + b;
// }

// try {
//     console.log("my result is:", someOtherProcedure(2, 3));
// } catch(error) {
//     console.log("I caught an error:", error.message);
// }

// function after1Second(failed) {
//   return new Promise((resolve, reject) => {
//       setTimeout(() => {
//           if(failed === true) {
//               reject( new Error ('I failed'));
//           } else {
//             resolve();
//         }
//       }, 1000)
//     });
// }

// // after1Second()
// //     .then(() => console.log('You will see this after 1 second'))
// //     .then(after1Second)
// //     .then(() => console.log('You will see this after 2 seconds'))
// //     .then(after1Second)
// //     .then(() => console.log('You will see this after 3 seconds'))
// //     .then(after1Second)
// //     .then(() => console.log('You will see this after 4 seconds'))



// async function thing() {
//     try {
//     await after1Second();
//     console.log('You will see this after 1 second')
//     await after1Second(true);
//     console.log('You will see this after 2 seconds')
//     await after1Second();
//     console.log('You will see this after 3 seconds')
//     await after1Second();
//     console.log('You will see this after 4 seconds')
//     } catch(error) {
//         console.log('I caught an error:', error);
//     }
// }

// thing();