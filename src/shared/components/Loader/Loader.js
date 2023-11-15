import { InfinitySpin } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
    return (
        <div className={css.wrapper}>
        <InfinitySpin width="300" color="#3D76DA" />
        </div>
    );
};

export default Loader;