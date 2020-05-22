import React, {Component} from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from '../Aux/Aux';

const withErrorHandler = (WrappedComponent, axios) => {
  // To use axios changing from functional component, to class based component, as we want to use componentDidMount() lifecycle
  // Could keep functional component and use UseEffect()

  return class extends Component {

    state = {
      error: null
    }

    componentDidMount() {
      // Clear errors here
      axios.interceptors.request.use(req => {
        this.setState({ error: null })
        return req;  //so request can continue
      });

      // Return errors here
      axios.interceptors.response.use(res => res, error => {
        this.setState({ error: error });
      });
    }

    errorConfirmedHandler = () => {
      this.setState({ error: null })
    }
    render() {
      return (
        <Aux>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {/* Something didn't work! */}
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  }
}

//   return (props) => {
//     return (

//       <Aux>
//         <Modal show>
//           Something didn't work!
//         </Modal>
//         <WrappedComponent {...props} />
//       </Aux>
//     );
//   }
// }
export default withErrorHandler;