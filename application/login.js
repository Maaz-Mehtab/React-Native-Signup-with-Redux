import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label, Text } from 'native-base';
import {signinAction} from './store/action/action';
import { connect } from 'react-redux';  
 class LoginPage extends Component {
constructor(props){
    super(props);
    this.state={
        email:'',
        password:''
    }
    console.log(this.props.mail);
    
}
login(){
    if(this.state.email==="" && this.state.password===""){
        alert("please Enter the Fields");
    }
    else{
    let ob={
        email:this.state.email,
        password:this.state.password
    }
    this.props.issigninAction(ob,this.props.navigation.navigate("Dashboard"));
    this.setState({
        email:'',
        password:''
    })
}}
    render() {
        return (
            <Container>
                <Content>
                    <Form>
                    {(this.props.mail)? 
            <Item floatingLabel>
            <Label>Email :</Label>
            <Input value={this.props.mail} onChange={ev => this.setState({ email: ev.nativeEvent.text })}/>
          </Item>
             :
             

            <Item floatingLabel>
              <Label>Email :</Label>
              <Input value={this.state.email} onChange={ev => this.setState({ email: ev.nativeEvent.text })}/>
            </Item>
}
                        <Item floatingLabel >
                            <Label>Password</Label>
                            <Input  onChangeText={(e) => this.setState({ password: e })} />
                        </Item>
                    </Form>
                    <Button full info  onPress={this.login.bind(this)}  ><Text> Login </Text></Button>
                    <Button style={styles.loginButtonSection} transparent onPress={() => this.props.navigation.navigate("signup")}><Text> Create Account </Text></Button>
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
        issigninAction: (user,diss) => {
            dispatch(signinAction(user,diss))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (LoginPage);

const styles = StyleSheet.create({
    loginButtonSection: {
        justifyContent: 'center',
        width: "100%"
    }
})