import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setArray } from '../actions'
import { getList } from '../reducers/todos'
import SubPage from './SubPage'


class MainPage extends React.Component {


    constructor(props){
        super(props);
        this.state={
        };
    }

    render(){
      let me = this;
      return (
        <div>
            <input type="number"
                onChange={me.inputChange.bind(this)} />
            <SubPage />
        </div>
      )
    }

    inputChange(input){
      this.props.setArray(input.target.value)
    }
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, {
    setArray
})(MainPage)