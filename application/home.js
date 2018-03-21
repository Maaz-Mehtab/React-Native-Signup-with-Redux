import React, { Component } from 'react';
// import { View  } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label, Text ,Spinner,List, ListItem,Body,Card, Thumbnail,H1,H2, CardItem} from 'native-base';
import { connect } from 'react-redux';  
class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            use:[]
        }
    }
    componentWillMount() {
        console.log(this.props.currentUser);
        setTimeout(() => {
            this.setState({name : this.props.currentUser.Username,use:this.props.users})
        }, 3000);
        console.log("after will mount",this.state.use);
    }
    render() {
        console.log(this.props.currentUser);
        console.log("users list",this.props.users);

        return (

            <Container>
                <Content>
                    
                    {!this.props.currentUser.Username ?
               

            <Spinner color='blue' large />
           :
                        <Card>
                            <CardItem>
                                <Body>
                               
                                <H1 style={{justifyContent: 'center',  textAlign: 'center',color:'#00796B',margin:2}}>HI {this.props.currentUser.Username} </H1>                                      
                                    </Body>
                                </CardItem>
                            </Card>
                    }
              <H2 style={{ justifyContent: 'center',  textAlign: 'center', margin:10}}>List of Friend's</H2>  
              {!this.props.users ?
              <Spinner color='blue' large/>
            :   
            
                <Container>
                    { Object.keys(this.props.users).map((val ,i) =>{
                // console.log("hello");
               return (
                
                    <Container key={i}>
                        <Content>
                        <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>{this.props.users[val].Username}</Text>
                <Text note>Its time to build a difference . .</Text>
                <Button />
              </Body>
            </ListItem>
          </List>
                            </Content>
                        </Container>
                 )} )}
                 </Container>
                 }

              {/* <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'Image URL' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List> */}


                    </Content>
                </Container>
        
        );
    }
}
const mapStateToProps = (state) => {
    console.log("State current users",state.root.currentUser);
    console.log("State users",state.root.users);
    return {
        currentUser: state.root.currentUser,
        users:state.root.users,
        errorMessage:state.root.errorMessage,
        isError:state.root.isError
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         issigninAction: (user,diss) => {
//             dispatch(signinAction(user,diss))
//         }
//     }
// }

export default connect(mapStateToProps,null) (HomePage);