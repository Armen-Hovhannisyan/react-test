import {MainLayout} from "../components/MainLayout";
import classes from "../styles/index.module.css"

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <div className={classes.displayFlex}>
                <div className={classes.center}>
                    <h4 className='text-center'>Price</h4>
                    <div className="input-group ">
                         <span className="input-group-btn">
                             <button type="button" className="btn btn-danger btn-number">
                               <span className="glyphicon glyphicon-minus"></span>
                             </button>
                         </span>
                        <input type="text" name="price" className="form-control input-number text-center" value="10" min="0"/>
                        <span className="input-group-btn">
                             <button type="button" className="btn btn-success btn-number">
                                 <span className="glyphicon glyphicon-plus"></span>
                             </button>
                        </span>
                    </div>
                </div>
                <div className={classes.center}>
                    <h4 className='text-center'>Quantity</h4>
                    <div className="input-group ">
                         <span className="input-group-btn">
                             <button type="button" className="btn btn-danger btn-number">
                               <span className="glyphicon glyphicon-minus"></span>
                             </button>
                         </span>
                        <input type="text" name="quantity" className="form-control input-number text-center" value="10" min="0"/>
                        <span className="input-group-btn">
                            <button type="button" className="btn btn-success btn-number">
                                <span className="glyphicon glyphicon-plus"></span>
                            </button>
                        </span>
                    </div>
                </div>
                <div className={classes.center}>
                    <h4 className='text-center'>Amount</h4>
                    <div className="input-group ">
                        <input type="text" readOnly name="amount" className="form-control input-number text-center" value="10" />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
