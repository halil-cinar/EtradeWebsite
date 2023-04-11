import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
//props
// onChange:Func firstValue:Int minValue:1
class Counter extends Component {
state={
    count:this.props.firstValue||1,
    
}
    
    incrementCounter=()=>{
        this.setState({count:this.state.count+1})
    }

    decrementCounter=()=>{
        this.setState({count:this.state.count-1})

    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count!==this.state.count){
            this.props.onChange(this.state.count)
        }
    }

    render() {
        return (
            <ButtonGroup size={this.props.size} className="my-2">
    <Button  onClick={()=>this.decrementCounter()} disabled={this.state.count<=(this.props.minValue||1)} >
      -1
    </Button>
    <Button disabled  className='text-success' outline>
      {this.state.count} adet
    </Button>
    <Button onClick={()=>this.incrementCounter()} >
      +1
    </Button>
  </ButtonGroup>
        );
    }
}

export default Counter;