import React, { useState, useEffect } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import { maxBy } from "lodash";
import { useParams, useHistory } from "react-router-dom";
import Header from "../../components/Header";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { widgetsKey } from "../../constants";
import "./index.css";

function WidgetFormPage() {
  const [formTitle, setTitle] = useState("");
  const [formSeries, setSeries] = useState("");
  const [errors, setErrors] = useState({});

  const [widgets, setWidgets] = useLocalStorage(widgetsKey, []);

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      const widget = widgets.find((e) => e.id === Number(id));

      if (!widget) return;
      setTitle(widget.title);
      setSeries(widget.series.join(", "));
    }
  }, [id, widgets]);

  const isValidForm = () => {
    let valid = true;
    let result = { ...errors };

    // Form title should not be empty
    if (!formTitle || formTitle === "") {
      result = { ...result, title: true };
      valid = false;
    }

    // Form series should not be empty
    if (!formSeries || formSeries === "") {
      result = { ...result, series: true };
      valid = false;
    }

    setErrors(result);
    return valid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isValidForm()) return;

    const maxValue = maxBy(widgets, "id") || { id: 0 };

    const series = formSeries
      // Remove spaces
      .replace(/\s/g, "")
      // String into array
      .split(",")
      // String to number
      .map((x) => parseInt(x, 10))
      // Only numbers
      .filter((x) => Number(x));

    setWidgets([
      ...widgets.filter((e) => e.id !== Number(id)),
      {
        id: Number(id) || maxValue.id + 1,
        title: formTitle,
        series: series,
      },
    ]);

    history.push("/widget");
  };

  const onClickBack = () => history.push("/widget");

  const handleChangeTitle = (event) => setTitle(event.target.value);

  const handleChangeSeries = (event) => {
    const value = event.target.value;
    const digit = value.charAt(value.length - 1);
    const last = value.charAt(value.length - 2);

    // Event should be clear
    if (digit === "" && last === "") {
      setSeries("");
      return;
    }

    // Event should de Number, Space or Comma
    if (!Number(digit) && digit !== " " && digit !== ",") return;

    // Event should be Number when last is Space
    if (last === " " && !Number(digit)) return;

    setSeries(event.target.value);
  };

  const pageTitle = id ? "Edit widget" : "Create widget";

  return (
    <>
      <Header />
      <Container>
        <p className="h4">{pageTitle}</p>
        <Form onSubmit={handleSubmit}>
          <Form.Row>
            <Col lg={4} md={6}>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeTitle}
                value={formTitle}
              />

              {errors.title && <Form.Text>Title is required.</Form.Text>}
            </Col>
          </Form.Row>

          <Form.Row>
            <Col lg={4}>
              <Form.Label>Series</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChangeSeries}
                value={formSeries}
              />

              {errors.series && <Form.Text>Series is required.</Form.Text>}

              <Form.Text className="text-muted">
                Should be separate with comma, eg: 5, 3, 4, 5, 7, 10
              </Form.Text>
            </Col>
          </Form.Row>

          <Form.Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>

              <Button variant="secondary" type="button" onClick={onClickBack}>
                Back
              </Button>
            </Col>
          </Form.Row>
        </Form>
      </Container>
    </>
  );
}

export default WidgetFormPage;
