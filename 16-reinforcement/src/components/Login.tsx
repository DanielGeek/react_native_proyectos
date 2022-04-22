
export const Login = () => {
  return (
    <>
      <h3>Login</h3>

      <div className="alert alert-info">
        Validating
      </div>

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
