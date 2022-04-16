import Modal from 'react-modal';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { useChart } from '../../hooks/useCharts';

interface UpdateChartModalProps {
    IsOpen: boolean;
    IsRequestClose: () => void;
    IsId: number;
    IsTitle: string;
}

export function UpdateChartModal({ IsId, IsTitle, IsOpen, IsRequestClose }: UpdateChartModalProps) {

    const { updateChart } = useChart();

    const [title, setTitle] = useState(IsTitle);

    async function handleUpdateChart(event: FormEvent) {
        event.preventDefault();

        await updateChart(
            IsId,
            { title },
        );
        
        console.log('Atualizado com sucesso');

        IsRequestClose();
    }


    return (
        <Modal
            isOpen={IsOpen}
            overlayClassName={styles.reactModalOverlay}
            className={styles.reactModalContent}
            onRequestClose={IsRequestClose}
        >
            <button type="button"
                onClick={IsRequestClose}
                className={styles.reactModalClose}>
                <FiX />
            </button>

            <form className={styles.Container} onSubmit={handleUpdateChart}>


                <h2>Atualizar Gráfico</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <button type="submit">Atualizar</button>
            </form>

        </Modal>
    )
}