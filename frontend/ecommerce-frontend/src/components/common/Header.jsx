import { logout, isAuthenticated } from "../../utils/auth";

export default function Header() {
  return (
    <nav>
      <a href="/">Home</a>

      {isAuthenticated() ? (
        <>
          <a href="/cart">Cart</a>
          <a href="/profile">Profile</a>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  );
}
