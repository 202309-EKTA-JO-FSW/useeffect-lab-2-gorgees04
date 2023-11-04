export default function UserCard({ user }) {
  return (
    <div className="user-card">
      <div>
        <img src={user.avatar_url} srcalt="avatar" />
      </div>
      <div>
        <h5> Name: {user.login}</h5>

        <p>
          {" "}
          Username:{" "}
          {
            <a href={user.html_url} target="_blank">
              gitHub link
            </a>
          }
        </p>
      </div>
    </div>
  );
}
