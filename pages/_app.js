import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import makeStore from '../redux/store';
class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}


    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    /* your own logic */

    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
          <div>
            <Component {...pageProps} />
          </div>
    );
  }
}

export default withRedux(makeStore)(MyApp);

