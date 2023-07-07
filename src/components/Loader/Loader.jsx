import {FallingLines} from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => (
  <div className={css.loader}>
   <FallingLines
  color="blue"
  width="100"
  visible={true}
  ariaLabel='falling-lines-loading'
/>
  </div>
);
