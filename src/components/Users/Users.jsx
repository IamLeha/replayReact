import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    return <div> 
        {
            props.users.map(u => <div className={s.mb} key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} alt=""/>
                        </div>
                    </span>

                    {u.followed ? <button onClick={ () => props.unfollow(u.id) }>follow</button>
                                : <button onClick={ () => props.follow(u.id) }>unfollow</button>}

                    <span>
                        <div>
                            <span className={s.mr}>{u.fullName}</span> 
                            <span>{u.status}</span>
                        </div> 
                        <div className={s.mt}>
                            <span className={s.mr}>{u.location.country}</span> 
                            <span>{u.location.city}</span>
                        </div>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;