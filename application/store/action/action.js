// import history from '../../History';
// import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';
// import fb from '../../firebas';
import {AsyncStorage} from 'react-native';
export function registerFail(error) {
    return {
        type: "REGISTER_FAIL",
        payload: error.message
    }
}

export function signupAction(user,ex) {

    return dispatch => {
        console.log('user', user);
        console.log("user email",user.email);
        console.log("user PASSWORD",user.password);
        
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((createdUser) => {
            user.uid = createdUser.uid;
            firebase.database().ref('users/' + createdUser.uid + '/').set(user)
                .then(() => {
                    firebase.database().ref('users/').once('value')
                        .then((userData) => {
                            let allUsers = userData.val();
                            let currentUserUid = firebase.auth().currentUser.uid;
                            dispatch({ type: "ALLUSERS", payload: allUsers })
                            dispatch({ type: "CURRENTUSER", payload: currentUserUid })
                            firebase.database().ref('/').child('Message').on('child_added', (snap) => {
                                var obj = snap.val();
                                obj.id = snap.key;
                                // console.log(obj);
                            })
                            this.ex;
                        })
                })
        }).catch((error) => {
            console.log("error",error);
            dispatch({ type: "REGISTER_FAIL", payload: error.message})
        })
        

    }}



    export function signinAction(user,dis) {
        return dispatch => {
                console.log("user",user.email);
                console.log("user",user.password);
                // console.log("dis",dis);
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((signedinUser) => {
                    firebase.database().ref('users/').once('value')
                        .then((userData) => {
                            let allUsers = userData.val();
                            console.log("congratulation");
                            this.dis;
                            let currentUserUid = firebase.auth().currentUser.uid;
                             firebase.database().ref('/').child("users").on('child_added', (snap) => {
                                var obj = snap.val();
                                obj.id = snap.key;
                                if (obj.id === currentUserUid) {
                                    console.log("boj",obj);
                                    dispatch({ type: "ALLUSERS", payload: allUsers })
                                    dispatch({ type: "CURRENTUSER", payload: obj })
                                
                                    // firebase.database().ref('/').child("Message/").on('child_added',(snap) =>{
                                    //     var obj=snap.val();
                                    //     obj.messageid=snap.key;
                                    //     allmessage_send.push(obj);
                                        
                                    //      console.log("ar",allmessage_send);
                                    //     dispatch({ type:"ALL_MESSAGE" ,payload:allmessage_send})
                                    // })
    
    
    
                                   
                                    // history.push('/chat');
                                }
                            })
    
    
    
                        })
                }).catch((error) => {
                    console.log("error",error);
                    dispatch({ type: "REGISTER_FAIL", payload: error.message})
                })
        }
    }