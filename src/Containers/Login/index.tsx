import * as S from './style'
import * as SG from '../../Styles/global.styles'
import { useForm } from 'react-hook-form'
import boxAssetsImg from '../../Assets/Images/Box-icon.png'
import { ILoginUser } from '../../Interfaces/ILoginUser'
import { api_merchandise } from '../../Services/merchandiseApi'
import { useClockState } from '../../Hook/useClockState'
import { setToken } from '../../Utils/managerToken'
import { IToken } from '../../Interfaces/IToken'
export function Login(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginUser>()
  const [stateLogin, setStateLogin] = useClockState('Merchandise Sytem')
  async function handleLogin(data: ILoginUser) {
    try {
      const response = await api_merchandise.post<IToken>('/auth', data)
      setToken(response.data.token_access)
      window.location.href = window.location.origin + '/home'
    } catch (response) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const errorr = response as any
      if (errorr.response) setStateLogin(errorr.response.data.message)
    }
  }
  return (
    <S.ContainerLogin>
      <S.HeaderLogin>
        <SG.BoxImage src={boxAssetsImg} isAligm={true} />
        <hr />
      </S.HeaderLogin>

      <S.BodyLogin>
        <S.FormLogin onSubmit={handleSubmit(handleLogin)}>
          {stateLogin}
          <S.InputLogin
            type='email'
            isError={errors?.email ? true : false}
            placeholder='type your email'
            {...register('email', {
              required: { value: true, message: 'field required' },
              maxLength: 300,
            })}
          />
          {errors?.email ? errors.email.message : ''}
          <S.InputLogin
            type='password'
            isError={errors?.password ? true : false}
            placeholder='type your passoword'
            {...register('password', {
              required: { value: true, message: 'field required' },
              maxLength: { value: 100, message: 'max length is 100 caracters' },
              minLength: { value: 6, message: 'min length is 6 caracters.' },
            })}
          />
          {errors?.password ? errors.password.message : ''}
          <S.InputSubmitForm type='submit'>LOGIN</S.InputSubmitForm>
        </S.FormLogin>
      </S.BodyLogin>
    </S.ContainerLogin>
  )
}
