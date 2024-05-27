import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items : [
        {
          id: 1,
          title: 'Cтул серый',
          img: 'chair grey.png',
          desc: 'Прекрасный стул мягкого серого цвета, дополняющий урбанистический интерьер.',
          category: 'chairs',
          price: '49.99'
        },
        {
          id: 2,
          title: 'Стол черный',
          img: 'table black.jpeg',
          desc: 'Прекрасный стол сердитого чёрного цвета, дополняющий урбанистический интерьер.',
          category: 'tables',
          price: '149.99'
        },
        {
          id: 3,
          title: 'Лампа белая',
          img: 'lamp white.png',
          desc: 'Прекрасная лампа насыщенного белого цвета, дополняющий урбанистический интерьер.',
          category: 'lamps',
          price: '29.99'
        },
        {
          id: 4,
          title: 'Cтул белый',
          img: 'chair white.png',
          desc: 'Прекрасный стул мягкого белого цвета, дополняющий урбанистический интерьер.',
          category: 'chairs',
          price: '49.99'
        },
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render () {
  return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
        <Categories chooseCategory={this.chooseCategory}/>
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>
        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
        <Footer/>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInItemArray = false;
    this.state.orders.forEach(el => {
      if(el.id === item.id)
        isInItemArray = true;
    })
    if(!isInItemArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}
export default App;
