import { useEffect } from 'react'
import { getUserData } from '../services/spotify/auth'
// import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { login, storeUser } from '../store/authSlice'

const useUserAuth = () => {
  const { isLogin, accessToken, userProfile } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  // const history = useHistory()

  useEffect(() => {
    if (!isLogin && window.location.hash) {
      const params = window.location.hash.substr(1).split('&')
      params.forEach(param => {
        const [key, value] = param.split('=')
        if (key === 'access_token') dispatch(login(value))
      })
    }
    if (isLogin && Object.keys(userProfile).length === 0) {
      getUserData(accessToken).then(user => {
        dispatch(storeUser(user))
        // history.push('/create-playlist')
      })
    }
  }, [isLogin, accessToken, userProfile, dispatch])

  return useSelector(state => state.auth);
}

export default useUserAuth;