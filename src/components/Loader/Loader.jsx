import { MagnifyingGlass } from  'react-loader-spinner';
import PropTypes from 'prop-types';

export default function Loader () {

return(
<MagnifyingGlass
  visible={true}
  height="80"
  width="80"
  ariaLabel="MagnifyingGlass-loading"
  wrapperStyle={{}}
  wrapperClass="MagnifyingGlass-wrapper"
  glassColor = '#c0efff'
  color = '#e15b64'
/>)



}


Loader.propTypes = {
    ariaLabel: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    
    wrapperClassName: PropTypes.string,
    wrapperStyle: PropTypes.object,


}