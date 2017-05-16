import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteElementFromArray,addElementToArray } from '../actions'
import { getList } from '../reducers/todos'

class AddTodo extends React.Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }

    constructor(props){
        super(props);
        this.state={
        };
    }

    render(){
      let me = this;
      return (
         <div className="page-home">
            <button onClick={me.deleteElement.bind(me)}>删除</button>
            <br/>
            <input type="number"
            ref={me.inputRefFuc.bind(this)}></input>
            <button onClick={me.addElement.bind(me)}>添加</button>
            <p>State中的list:  {me.props.list.join(',')}</p>
         </div>
      )
    }

    inputRefFuc(input){
      this.textInput = input;
    }

    deleteElement(){
      this.props.deleteElementFromArray(this.textInput.value);
    }

    addElement(){
      this.props.addElementToArray(this.textInput.value);
    }


}

const mapStateToProps = (state) => ({
    list:getList(state)
})

export default connect(mapStateToProps, {
  deleteElementFromArray,
  addElementToArray
})(AddTodo)