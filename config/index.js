import configDev from './dev.js'


import configProd from './prod.js'
export var config
config = configProd
config.isGuestMode = true
// config = configProd
// if (process.env.NODE_ENV === 'production') {
// } else {
//     config = configDev
// }


