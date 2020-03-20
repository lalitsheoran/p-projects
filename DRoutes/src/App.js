import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Login from './components/Login'
import Shop from './components/Shop'
import Navbar from './components/Navbar'
import ShoppingCart from './components/ShoppingCart'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isAuthenticated:false,
      username:"",
      password:"",
      added:[]
    }
      
  }
    handleAdded=(selected)=>{
      this.setState({
        added:[...this.state.added,selected]
      })
    }

    handleChange=(e)=>{
      this.setState({
        [e.target.name]:e.target.value
      })
    }

    handleLogin=()=>{
      if(this.state.username=="masai"&& this.state.password==12345){
        this.setState({
          isAuthenticated:true
        })
      }
      else{
        alert("Enter valid credentials, default=> masai : 12345 ")
      }
    }

    handleLogout=()=>{
      this.setState({
        isAuthenticated:false
      })
    }
    username="masai"
    password=12345
  arrayOfProducts = [
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK GLAM PRINT SHIRT",
      "price": 110,
      "id":45431464
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 91,
      "id":13165464
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID CK MAEH BAG",
      "price": 94,
      "id":12315151
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 438,
      "id":32149496
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 20,
      "id":13213544
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/M63H24W7JF0-L302-ALTGHOST?wid=1500&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "CHECK GLAM PRINT SHIRT",
      "price": 19,
      "id":45281464
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/FLGLO4FAL12-BEIBR?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "GLORIA HIGH LOGO SNEAKER",
      "price": 989,
      "id":13345464
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/HWVG6216060-TAN?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "CATE RIGID CK MAEH BAG",
      "price": 419,
      "id":12025151
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 45,
      "id":32149896
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 341,
      "id":13013544
    },
    {
      "imgUrl": "http://guesseu.scene7.com/is/image/GuessEU/WC0001FMSWC-G5?wid=520&fmt=jpeg&qlt=80&op_sharpen=0&op_usm=1.0,1.0,5,0&iccEmbed=0",
      "name": "GUESS CONNECT WATCH",
      "price": 38,
      "id":33149496
    },
    {
      "imgUrl": "https://guesseu.scene7.com/is/image/GuessEU/AW6308VIS03-SAP?wid=700&amp;fmt=jpeg&amp;qlt=80&amp;op_sharpen=0&amp;op_usm=1.0,1.0,5,0&amp;iccEmbed=0",
      "name": "'70s RETRO GLAM KEFIAH",
      "price": 290,
      "id":13913544
    }
  ]
  render(){
    return(
      <>
      <Navbar/>
     <Switch>
     <Route exact path="/" render={()=><Home/>} />
      <Route path="/shoppingcart" render={(props)=><ShoppingCart handleLogout={this.handleLogout} {...props} loggedin={this.state.isAuthenticated} products={this.arrayOfProducts} handleAdded={this.handleAdded} added={this.state.added}/>}/>
      <Route exact path="/products" render={(props)=><Shop products={this.arrayOfProducts} {...props}  />}/>
      <Route exact path="/login" render={()=><Login username={this.username} password={this.password} handleChange={this.handleChange} handleLogin={this.handleLogin} loggedin={this.state.isAuthenticated}/>}/>
      <Route render={()=><NotFound />} />
     </Switch>

      </>
    )
  }
}