type User = {
    avatar_url: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    following: number;
    followers: number;
}

interface Props {
    user: User;
}

function UserCard({ user }: Props) {

    return (
        <div className="card">
            <img src={user.avatar_url} alt={user.name} className="card-image card-img-top" style={{ width: '500px', objectFit: 'cover', borderRadius: '5%' }} />
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">@{user.login}</p>
                <p className="card-text">{user.bio}</p>
                <ul className="list-group list-group-flush ">
                    <li className="list-group-item">Repositorios: {user.public_repos}</li>
                    <li className="list-group-item">Seguidores: {user.followers}</li>
                    <li className="list-group-item">Siguiendo: {user.following}</li>


                </ul>
            </div>
        </div>
    );
}

export default UserCard;
