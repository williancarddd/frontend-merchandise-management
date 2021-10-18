import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../Utils/managerToken'
interface IProps {
  path: string
  children?: JSX.Element
}
export function PrivateRoute({ children, path }: IProps): JSX.Element {
  return (
    <Route
      path={path}
      render={() => (isAuth() ? children : <Redirect to='/login' />)}
    />
  )
}
