import styles from './styles.module.scss';
import {FiPlus} from 'react-icons/fi';

interface NewWidgetProps {
    isOpenNewChartModal:()=> void;
}

export function NewWidget({isOpenNewChartModal}:NewWidgetProps){
    return(
        <div className={styles.WidgetContainer}>
            <button onClick={isOpenNewChartModal}> 
                <FiPlus size={30}/> 
            </button>
        </div>
    )
}