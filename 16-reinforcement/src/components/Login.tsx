import { useEffect, useReducer } from "react"

interface AuthState {
  validating: boolean;
  token: string | null;
  username: string;
  firstname: string;
}

const initialState: AuthState = {
  validating: true,
  token: null,
  username: '',
  firstname: ''
}

type LoginPayload = {
  username: string;
  firstname: string;
}

type AuthAction =
    | { type: 'logout' }
    | { type: 'login', payload: LoginPayload };

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch ( action.type ) {
      case 'logout':
        return {
          validating: false,
          token: null,
          username: '',
          firstname: ''
        }

      case 'login':
        const { firstname, username } = action.payload;
        return {
          validating: false,
          token: 'ABC123',
          firstname,
          username
        }
      default:
        return state;
    }
}

export const Login = () => {

  const [{ validating, token, firstname }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        firstname: 'Daniel',
        username: 'DanielGeek'
      }
    })
  }

  const logout = () => {
    dispatch({ type: 'logout' });
  }

  if( validating ) {
    return (
      <>
        <h3>Login</h3>
        <div className="alert alert-info">
          Validating...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {
        ( token )
            ? <div className="alert alert-success">Authenticated how: { firstname }</div>
            : <div className="alert alert-danger">Unauthenticated</div>
      }

      {
        ( token )
        ? (
          <button
            className="btn btn-danger"
            onClick={ logout }
          >
            Logout
        </button>
        )
        : (
          <button
            className="btn btn-primary"
            onClick={ login }
          >
            Login
          </button>
        )
      }
    </>
  )
}
