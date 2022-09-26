import React,{ Component } from 'react'
import Coin from './Coin'
 
class FlipCoin extends Component{
  static defaultProps = {
    coins : [
     
      // Sides of the coin
      {side:'head', imgSrc:
'download1.png'},
      {side:'tail', imgSrc:
'download2.png'}
    ]
  }
 
  constructor(props){
    super(props)
     
    this.state = {
       
      currFace : null,
      totalFlips:0,
      heads: 0
    }
     
    this.handleClick = this.handleClick.bind(this)
  }
 

  choice(arr){
    const randomIdx = Math.floor(Math.random() * arr.length)
    return arr[randomIdx]
  }
   

  flipCoin(){
    const newFace = this.choice(this.props.coins)
    this.setState(curState => {
      const heads = curState.heads +
      (newFace.side === 'head' ? 1 : 0)
      return {
        currFace:newFace,
        totalFlips:curState.totalFlips + 1,
        heads:heads
      }
    })
  }
 
  handleClick(){
    this.flipCoin()
  }
  render(){
    const {currFace, totalFlips, heads} = this.state
    return(
      <div>
        <h2>Let's flip a coin</h2>
         
        {currFace && <Coin info={currFace} />}
         
        <button onClick={this.handleClick}>Flip Me!</button>
         
         
 
<p>
          Out of {totalFlips} flips, there have been {heads} heads
          and {totalFlips - heads} tails
        </p>
 
 
 
      </div>
    )
  }
}
 
export default FlipCoin