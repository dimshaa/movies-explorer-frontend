import './NoResult.css';
import { NOTHING_FOUND_MESSAGE } from '../../utils/constants';

function NoResult() {
  return (
    <p className='no-result'>
      {NOTHING_FOUND_MESSAGE}
    </p>
  );
};

export default NoResult;
