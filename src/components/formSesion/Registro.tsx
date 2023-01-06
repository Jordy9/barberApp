import { FormComponent } from "./FormComponent"
import { inputPropsRegister } from "../../utils/Search";

export const Registro = () => {
  return (
    <>
      {
        inputPropsRegister.map(( props ) => (
          <FormComponent
            key={ props.label }
            { ...props }
          />
        ))
      }
    </>
  )
}
