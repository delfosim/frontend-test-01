import { Container, Typography } from "@material-ui/core";
import CreateChartButton from "../../components/CreateChartButton";
import CreateWidget from "../../components/CreateNewWidget";
import { useWidgetContext } from "../../shared/context/widgetStore";
import { ModalStore } from "../../shared/context/modalStore";
import { useStyle } from "./style";
import UpdateWidget from "../../components/UpdateWidget";
import CharList from "../../components/ChartList";

const Home = () => {
  const classes = useStyle();
  const { widgets } = useWidgetContext();

  return (
    <>
      <ModalStore>
        <Container classes={{ root: classes.container }}>
          {widgets.length < 1 ? (
            <Container classes={{ root: classes.centerContainer }}>
              <Typography classes={{ root: classes.title }} variant="h5" align="center">
                Nenhum Widget foi encontrado
              </Typography>
              <Typography align="center">
                Clique no icone abaixo para adicionar um novo widget.
              </Typography>
            </Container>
          ) : (
            <CharList />
          )}
        </Container>

        <CreateChartButton />
        <CreateWidget />
        <UpdateWidget />
      </ModalStore>
    </>
  );
};

export default Home;
