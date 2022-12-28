import * as yup from "yup";
import { Button, Container} from "@mui/material";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createWidgetThunk } from "../../../Store/modules/widgets/thunk";
import { InputBox } from "../../input/textField";
import { SwipeModal } from "../swipeModal";

export const CreateWidgetModal = () => {
  const dispatch = useDispatch();

  const formSchema = yup.object().shape({
    name: yup.string().required("Company name is required!"),
    graphName: yup.string().required("Graph name is required!"),
    data: yup
      .string()
      .required("Insert your values separeted by spaces, comma or period.")
      .matches("^[0-9*#+ ,.]+$", "Only numbers"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const stringFormater = (stringValue) => {
    //Format strings to Title Format
    return stringValue
      .split(" ")
      .map((el) =>
        typeof el[0] !== Number
          ? `${el[0].toUpperCase()}${el.substring(1).toLowerCase()}`
          : el
      )
      .join(" ");
  };
  const onSubmitFunction = (data) => {
    const nameFormated = stringFormater(data.name);
    const graphNameFormated = stringFormater(data.graphName);

    const dataFormater = data.data
      .split(/[^a-zA-Z0-9]+/g)
      .map((el) => Number(el));

    const dataFormated = {
      name: nameFormated,
      graphName: graphNameFormated,
      data: dataFormater,
    };
    dispatch(createWidgetThunk(dataFormated));
  };

  return (
    <SwipeModal anchor={"bottom"} modalType={"add"}>
      <form onSubmit={handleSubmit(onSubmitFunction)}>
        <Container
          sx={{ display: "flex", flexDirection: "column", gap: 3, p: 5 }}
        >
          <h2 style={{ fontWeight: 700, fontSize: 32 }}>Create your widget:</h2>
          <h4>
            If you name an existing company, it will add a new graph at it.
          </h4>

          <InputBox
            label="Company name"
            errors={errors.name?.message}
            register={{ ...register("name") }}
          />

          <InputBox
            label="Name your graph"
            errors={errors.graphName?.message}
            register={{ ...register("graphName") }}
          />

          <InputBox
            label="Insert your data"
            errors={errors.data?.message}
            register={{ ...register("data") }}
          />
          <Button type="submit">Create</Button>
        </Container>
      </form>
    </SwipeModal>
  );
};
