import React,{Component} from 'react';
import './App.css';
import Products from '../components/Products/Products'

class App extends Component {
  state = {
    products : [],
    showlist : true
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          if(result.success == true){
            this.setState({
              products: result.products
            });
          }
        },
        (error) => {
          this.setState({
              products: []
            });
        }
      )
  }
  
  render() {
    let products  = null;
    if(this.state.showlist){
      products = (
        <div>
          <Products 
          products={this.state.products}
          />
        </div>
      );
    }
    return (
      <div className="App">
        {products}
      </div>
    );
  }
}

export default App;
