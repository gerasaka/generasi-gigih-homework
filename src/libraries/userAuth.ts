import { useEffect } from 'react'

// import { useHistory } from 'react-router-dom'
import { login } from '../redux/authSlice'
import { useAppDispatch, useAppSelector } from '../redux/store'

const useUserAuth = () => {
  const { isLogin } = useAppSelector((state: any) => state.auth)
  const dispatch = useAppDispatch()
  // const history = useHistory()

  useEffect(() => {
    if (!isLogin && window.location.hash) {
      const params = window.location.hash.substr(1).split('&')
      params.forEach(param => {
        const [key, value] = param.split('=')
        if (key === 'access_token') dispatch(login(value))
      })
    }
  }, [isLogin, dispatch])

  return useAppSelector((state: any) => state.auth);
}

export default useUserAuth;