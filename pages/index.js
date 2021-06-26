import React from "react";
import {connect} from "react-redux";
import {setPrice, setQuantity} from "../redux/actions/productActions";
import {MainLayout} from "../components/MainLayout";
import classes from "../styles/index.module.css"

class App extends React.Component {
    static getInitialProps({store}) {
    }

    constructor(props) {
        super(props);
    }

    changePrice = (price) => {
        const {setPrice} = this.props;
        if (price >= 0) {
            setPrice(price)
        }
    };
    changeQuantity = (quantity) => {
        quantity = parseInt(quantity)
        const {setQuantity} = this.props;
        if (quantity >= 0) {
            setQuantity(quantity)
        }
    };

    render() {
        const {price, quantity} = this.props;
        const amount = price * quantity;
        return (
            <MainLayout title={'Home page'}>
                <div className={classes.displayFlex}>
                    <div className={classes.center}>
                        <h4 className='text-center'>Price</h4>
                        <div className="input-group ">
                         <span className="input-group-btn">
                             <button type="button" onClick={e => this.changePrice(price - 1)}
                                     className="btn btn-danger btn-number">
                               <span className="glyphicon glyphicon-minus"></span>
                             </button>
                         </span>
                            <input type="text" name="price" className="form-control input-number text-center"
                                   onChange={e => this.changePrice(e.target.value)} value={price} min="0"/>
                            <span className="input-group-btn">
                             <button type="button" onClick={e => this.changePrice(price + 1)}
                                     className="btn btn-success btn-number">
                                 <span className="glyphicon glyphicon-plus"></span>
                             </button>
                        </span>
                        </div>
                    </div>
                    <div className={classes.center}>
                        <h4 className='text-center'>Quantity</h4>
                        <div className="input-group ">
                         <span className="input-group-btn">
                             <button type="button" onClick={e => this.changeQuantity(quantity - 1)}
                                     className="btn btn-danger btn-number">
                               <span className="glyphicon glyphicon-minus"></span>
                             </button>
                         </span>
                            <input type="text" name="quantity" className="form-control input-number text-center"
                                   onChange={e => this.changeQuantity(e.target.value)} value={quantity} min="0"/>
                            <span className="input-group-btn">
                            <button type="button" onClick={e => this.changeQuantity(quantity + 1)}
                                    className="btn btn-success btn-number">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                        </div>
                    </div>
                    <div className={classes.center}>
                        <h4 className='text-center'>Amount</h4>
                        <div className="input-group ">
                            <input type="text" readOnly name="amount" className="form-control input-number text-center"
                                   value={amount}/>
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }
}

const mapStateToProps = state => (
    {
        price: state.price.value,
        quantity: state.quantity.value,
    }
);

const mapDispatchToProps = {
    setPrice: setPrice,
    setQuantity: setQuantity,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

