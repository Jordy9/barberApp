import { inputPropsLogin } from "../../utils/Search"
import { FormComponent } from "."

export const LoginForm = () => {
  return (
    <>
        {
            inputPropsLogin.map(( props ) => (
                <FormComponent
                  key={ props.label }
                  { ...props }
                />
            ))
        }
    </>
  )
}
