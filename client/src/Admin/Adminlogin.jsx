import '../Css/AdminLogin.css'
const AdminLogin =()=>{
    return(
        <>
            <div className="login-container">
      <div className="login-card">
        <h1>Admin Login</h1>
        <h2>Welcome Back</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>

        </>
    )
}
export default AdminLogin