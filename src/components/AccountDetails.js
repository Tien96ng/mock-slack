export default function AccountDetails({user}) {

  return(
    <>
      <h1>Account Details</h1>
      <img src={user.photoURL} alt="Profile pic" />
      <h2>Display Name: {user.displayName}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Creation Date: {user.creationDate}</h2>
    </>
  );
}