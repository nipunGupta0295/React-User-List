 import './User.css';
 const User = (props) => {
     let user = props.userdata;
    return (
        <div className='user-card'>
            <div className='img-container'>
                <img src={user['avatar']} />
            </div>
            
            <div className='user-info'>
                <p className='id'>ID: {user['id']}</p>
                <p className='name'>NAME: {user['first_name'] +" "+user['last_name']}</p>
                <p className='email'>EMAIL: {user['email']}</p>
            </div>
            
        </div>
    )
 }

 export default User;