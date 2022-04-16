import Modal from 'react-modal';
import styles from './styles.module.scss';
import { FiX } from 'react-icons/fi';
import { FormEvent, useState } from 'react';
import { useChart } from '../../hooks/useCharts';

interface NewChartModalProps {
    IsOpen: boolean;
    IsRequestClose: () => void;
}

export function NewChartModal({ IsOpen, IsRequestClose }: NewChartModalProps) {

    const { createChart } = useChart();

    const [title, setTitle] = useState('');

    async function handleCreateNewChart(event: FormEvent) {
        event.preventDefault();

        await createChart({
            title,
        });

        setTitle('');
        
        console.log('Cadastrado com sucesso');

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

            <form className={styles.Container} onSubmit={handleCreateNewChart}>


                <h2>Cadastrar Gráfico</h2>

                <input
                    placeholder="Titulo"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </form>

        </Modal>
    )
}