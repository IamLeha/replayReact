import React from 'react';
import s from './Users.module.css';
import Axios from 'axios';

let Users = (props) => {

    if(props.users.length === 0){
        Axios.get('https://social-network.samuraijs.com/api/1.0/users')
        .then( users => props.setUsers(users.data.items))
    }

    return <div> 
        {
            props.users.map(u => <div className={s.mb} key={u.id}>
                    <span>
                        <div className={s.imgContainer}>
                            {u.photos.small ? <img src={u.photos.small} className={s.iconUser} alt=""/> 
                                            : <img src='./notFindPhotoUser.png' className={s.iconUser} alt=""/>}
                        </div>
                    </span>

                    {u.followed ? <button onClick={ () => props.unfollow(u.id) }>follow</button>
                                : <button onClick={ () => props.follow(u.id) }>unfollow</button>}

                    <span>
                        <div className={s.mt}>
                            <span className={s.mr}>{u.name}</span> 
                            <span>{u.status}</span>
                        </div> 
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;