import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import theme from 'highcharts/themes/dark-blue';
import styles from './styles.module.scss';
import { FiEdit, FiX } from 'react-icons/fi';
import { useChart } from '../../hooks/useCharts';
import { FormEvent, useState } from 'react';
import { UpdateChartModal } from '../UpdateChartModal';
interface ChartsProps {
    id: number;
    title: string;
}

export function Charts({ id, title }: ChartsProps) {
    const { deleteChart } = useChart();

    const [isUpdateChartModalOpen, setIsUpdateChartModalOpen] = useState(false);

    function handleOpenUpdateChartModal() {
        setIsUpdateChartModalOpen(true);
    }

    function handleCloseUpdateChartModal() {
        setIsUpdateChartModalOpen(false);
    }

    async function handleDeleteChart(event: FormEvent) {
        event.preventDefault();

        await deleteChart(id);

    }

    const options = {
        title: {
            text: `${title}`
        },
        subtitle: {
            text: 'Source: delfosim.com'
        },
        xAxis: {
            accessibility: {
                rangeDescription: 'Range: 2010 to 2017'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },
        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: 2010
            }
        },
        series: [{
            name: 'Installation',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        }, {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        }, {
            name: 'Sales & Distribution',
            data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        }, {
            name: 'Project Development',
            data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        }, {
            name: 'Other',
            data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
    }

    theme(Highcharts);

    return (
        <div className={styles.containerCharts}>
            <HighchartsReact highcharts={Highcharts} options={options} />
            <button onClick={handleOpenUpdateChartModal}>  <FiEdit size={30} /> </button>
            <button onClick={handleDeleteChart}>  <FiX size={30} /> </button>
            <UpdateChartModal
                IsId={id}
                IsTitle={title}
                IsOpen={isUpdateChartModalOpen}
                IsRequestClose={handleCloseUpdateChartModal}
            />
        </div>
    )
}