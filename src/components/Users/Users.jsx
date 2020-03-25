import React from 'react';
import s from './Users.module.css';
import Axios from 'axios';

class Users extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
             .then( users =>{
                this.props.setUsers(users.data.items);
                this.props.setTotalUsersCount(users.data.totalCount);
             })

    }

    changedPage = (page) => {
        this.props.setCurrentPage(page);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
        .then( users => this.props.setUsers(users.data.items))
    }

    render() { 

        let pagesCount = Math.ceil(this.props.totalUserCount/this.props.pageSize)

        let pages = [];

        for(let i=1; i<=pagesCount; i++){
            pages.push(i)
        }

        return <div>
            <div className={s.pagination}>
            {pages.map( p => {
                    return <span onClick={ () => { this.changedPage(p) }} 
                                 className={this.props.currentPage === p ? s.actionPage : s.paginationBtn }>{p}</span>
                })    
            }
            </div>

        {
            this.props.users.map(u => <div className={s.mb} key={u.id}>
                <span>
                    <div className={s.imgContainer}>
                        {u.photos.small ? <img src={u.photos.small} className={s.iconUser} alt="" />
                        : <img src='./notFindPhotoUser.png' className={s.iconUser} alt="" />}
                    </div>
                </span>

                {u.followed ? <button onClick={ ()=> this.props.unfollow(u.id) }>follow</button>
                : <button onClick={ ()=> this.props.follow(u.id) }>unfollow</button>}

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

}


export default Users;