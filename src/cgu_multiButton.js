import Button from '@material-ui/core/Button';

const changeText=(event)=>{
    console.log(event.target)
    event.target.innerText = event.target.innerText + "被點了了"
}

const MultiButton=(num)=>{
    var output=[];
    for(let i=1;i<num+1;++i){
        output.push(<Button variant="outlined" color="primary"
        onClick={changeText}>第{i}個按鍵</Button>)
    }
    return output;
}
export default MultiButton;