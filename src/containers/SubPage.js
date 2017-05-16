import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getList } from '../reducers/todos'

class SubPage extends React.Component {
    static propTypes = {
        list: PropTypes.array.isRequired
    }

    render(){
    	return (
            <div>
                {this.props.list.map((item,index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
    		
    	)
    }

}



const mapStateToProps = (state) => ({
    list:getList(state)
})

export default connect(mapStateToProps, {
    
})(SubPage)