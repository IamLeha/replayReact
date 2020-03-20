import React from 'react';
import s from './Users.module.css';

let Users = (props) => {

    if(props.users.length === 0){
        props.setUsers([
            {id:1, photoUrl: 'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: false, fullName: 'Dmitry', status: 'i am boss', location: {city: 'Taganrog', country: 'Russia'}},
            {id:2, photoUrl:'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: true, fullName: 'Sasha', status: 'i am boss too', location: {city: 'Taganrog', country: 'Russia'}},
            {id:3, photoUrl:'https://cs8.pikabu.ru/avatars/2505/x2505941-191418724.png', followed: false, fullName: 'Igor', status: 'i am boss too', location: {city: 'Taganrog', country: 'Russia'}},
        ])
    }

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