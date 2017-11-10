import {computed, action, observable, useStrict} from 'mobx';

// FIREBASE
import * as firebase from "firebase";


useStrict(true)

export default class UserStore {
    rootStore: any;

    @observable authorized = null;
    @observable currentUser = null;
    @observable error = null;

    constructor(rootStore?) {
        this.rootStore = rootStore
    }

    @action
    login({email, password}) {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                this.error = null;
                this.currentUser = user;
                console.log("login success")
                return user
            }, (error) => {
                console.log(error.message)
            })
    }
}