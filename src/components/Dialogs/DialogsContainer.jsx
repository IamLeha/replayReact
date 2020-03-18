import Dialogs from './Dialogs';
import {updateMessageBodyAC, sendMessageAC} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return{
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateMessage: (messageBody) => {
            dispatch(updateMessageBodyAC(messageBody));
        },
        sendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;