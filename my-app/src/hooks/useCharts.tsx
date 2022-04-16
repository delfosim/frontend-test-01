import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
interface Chart {
    id: number;
    title: string;
}

type ChartInput = Pick<Chart, 'title'>;

interface ChartsProviderProps {
    children: ReactNode;
}

interface ChartsContextData {
    charts: Chart[],
    createChart: (chart: ChartInput) => Promise<void>;
    deleteChart: (id: number) => Promise<void>;
    updateChart: (id: number, chartInput: ChartInput) => Promise<void>;
}

export const ChartsContext = createContext<ChartsContextData>(
    {} as ChartsContextData
);

export function ChartsProvider({ children }: ChartsProviderProps) {
    const [charts, setCharts] = useState<Chart[]>([]);

    useEffect(() => {
        api.get("charts")
            .then(response => setCharts(response.data.charts))

    }, [])

    async function createChart(chartInput: ChartInput) {
        const response = await api.post('/charts', {
            ...chartInput, createdAt: new Date(),
        })

        const { chart } = response.data;

        setCharts([
            ...charts,
            chart,
        ]);
    }

    async function updateChart(id: number, chartInput: ChartInput) {
        const response = await api.put(`/charts/${id}`, {
            ...chartInput,
        })

        const { chart } = response.data;

        charts[id-1] = chart

        setCharts([
            ...charts
        ]);
    }

    async function deleteChart(id: number) {
        const response = await api.delete(`/charts/${id}`)

        if (response.status === 204) {
            charts.splice(0, id);
        }

        setCharts([
            ...charts
        ]);
    }

    return (
        <ChartsContext.Provider value={{ charts, createChart, deleteChart, updateChart }}>
            {children}
        </ChartsContext.Provider>
    );
}

export function useChart() {
    const context = useContext(ChartsContext);

    return context;
}