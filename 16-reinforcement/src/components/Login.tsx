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

type AuthAction = { type: 'logout' };

const authReducer = ( state: AuthState, action: AuthAction ): AuthState => {
    switch ( action.type ) {
      case 'logout':
        return {
          validating: false,
          token: null,
          username: '',
          firstname: ''
        }
      default:
        return state;
    }
}

export const Login = () => {

  const [{ validating }, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []);

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

      <div className="alert alert-danger">
        Unauthenticated
      </div>

      <div className="alert alert-success">
        Authenticated
      </div>

      <button
        className="btn btn-primary"
      >
        Login
      </button>

      <button
        className="btn btn-danger"
      >
        Logout
      </button>
    </>
  )
}
