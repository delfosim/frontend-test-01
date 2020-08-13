import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import WidgetCard from "../../components/WidgetCard";
import ConfirmDialog from "../../components/ConfirmDialog";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { widgetsKey } from "../../constants";

import "./index.css";

function WidgetPage() {
  const [confirmDialog, setConfirmDialog] = useState(false);
  const [search, setSearch] = useState("");
  const [widgetId, setWidgetId] = useState(null);

  const [widgets, setWidgets] = useLocalStorage(widgetsKey);

  const history = useHistory();

  const onAddItem = () => history.push("/widget/form");

  const onEditItem = (itemId) => history.push(`/widget/form/${itemId}`);

  const onRemoveItem = (itemId) => {
    setWidgetId(itemId);
    setConfirmDialog(true);
  };

  const onClickClose = () => {
    setWidgetId(null);
    setConfirmDialog(false);
  };

  const onClickConfirm = () => {
    setWidgets(widgets.filter((e) => e.id !== widgetId));
    setWidgetId(null);
    setConfirmDialog(false);
  };

  const handleSearchChange = (event) => setSearch(event.target.value);

  const onFilter = (item) => {
    if (search) {
      return item.title.toLowerCase().includes(search);
    }
    return item;
  };

  const widgetsWithFilter = widgets.filter((e) => onFilter(e));

  const RenderNoResults = () =>
    widgetsWithFilter.length === 0 && <div>No results for {search}.</div>;

  const RenderWidgets = () =>
    widgetsWithFilter
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((item) => (
        <WidgetCard
          key={item.title}
          widget={item}
          onClickEdit={onEditItem}
          onClickRemove={onRemoveItem}
        />
      ));

  return (
    <>
      <Header showSearch onSearch={handleSearchChange} />
      <Container>
        <RenderNoResults />
        <RenderWidgets />

        <Button className="btn-add" variant="secondary" onClick={onAddItem}>
          +
        </Button>
        <ConfirmDialog
          title="Widget remove"
          description="Do really want to remove this widget?"
          isVisible={confirmDialog}
          onClickClose={onClickClose}
          onClickConfirm={onClickConfirm}
        />
      </Container>
    </>
  );
}

export default WidgetPage;
