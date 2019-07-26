import StoreDev from './store.dev';
import StorePro from './store.prod';    
import Config from '@config'

// console.log(' ----- __DEV__', __DEV__)
// console.log(' ----- __VERSION__', __VERSION__)


export default Config.isDev ? StoreDev : StorePro