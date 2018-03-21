import React, { Component } from 'react';
import firebase from 'firebase';
// import FileInput from 'react-file-input';
// FileInput = require('react-file-input');
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import {signupAction} from './store/action/action';
import { connect } from 'react-redux';
class Rigistration extends Component {
    constructor(prop) {
        super(prop)
        this.state = {
            Username: "",
            email: "",
            password: "",
            url:"",
        }
       
//   FileInput = require('react-file-input');
        // this._picChange = this._picChange.bind(this)
    }
    _picChange(e) {
        const file=e.target.files[0];
        console.log("file",file)
        var filename=file.name
        console.log("filename",filename)

        const images = firebase.storage().ref('images/'+filename);
        images.put(file).then(snapShot => {
            images.getDownloadURL().then((url) => {
                this.setState({
                    url:url
                })
            })
        })
      





    }

    createAccount(e) {
        console.log("Registration");

            if(this.state.email==="" && this.state.Username==="" && this.state.password){
                alert("please Enter some Feilds!");
            }
            else{
        let ob={
            Username:this.state.Username,
            email:this.state.email,
            password:this.state.password,
            // url:this.state.url
        }
        
        this.props.issignupAction(ob,this.props.navigation.navigate("login",{mail:'maaz@gmail.com'}));
        
    }
    
    }
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item fixedLabel>
                            <Label>Username</Label>
                            <Input onChangeText={(e) => this.setState({ Username: e })} />
                        </Item>
                        <Item fixedLabel>
                            <Label>Email</Label>
                            <Input onChangeText={(e) => this.setState({ email:e })} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Password</Label>
                            <Input onChangeText={(e) => this.setState({ password: e })} />
                        </Item>

                        {/* <Item fixedLabel last>
                            <Label>Image</Label>
                            
                            <FileInput name="myImage"
                   accept=".png,.gif"
                   placeholder="My Image"
                onChange={this._picChange.bind(this)}  />
                        </Item> */}

                    </Form>
                    <Button full info onPress={this.createAccount.bind(this)}><Text> Signup </Text></Button>
                </Content>
            </Container>


        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.root.currentUser,
        users:state.root.users,
        errorMessage:state.root.errorMessage,
        isError:state.root.isError
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        issignupAction: (user,ex) => {
            dispatch(signupAction(user,ex))
        }
    }
  }
  
  
  export default connect(mapStateToProps, mapDispatchToProps)(Rigistration);