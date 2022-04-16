import styles from './styles.module.scss';
import { Charts } from '../Charts';
import { NewWidget } from '../NewWidget';
import { useChart } from '../../hooks/useCharts';

interface DashboardProps {
    onOpenNewChartModal: () => void;
    isSearch: string;
}

interface Chart {
    id:number;
    title:string;
}



export function Dashboard({ onOpenNewChartModal, isSearch }: DashboardProps) {
    const { charts } = useChart();

    function searchChartTitle(value:Chart){
        if(value.title.includes(isSearch)) return value.title;
    }

    const chartsFilters = charts.filter(searchChartTitle);

    return (
        <div className={styles.dashboardContainer}>
            {chartsFilters.map(chart => (
                <div className={styles.chartContainer}>
                    <Charts id={chart.id} title={chart.title} />
                </div>
            ))}
            <NewWidget isOpenNewChartModal={onOpenNewChartModal} />
        </div>
    )
}