
const Footer = ({status, setStatus, todoList}) => {
    return (
        <div className="footer">
            <p>{todoList.length} items</p>

            <div className="footer-center">
                <button className={'sen'+status} onClick={()=>{
                    setStatus('all')
                }}>all</button>
                <button className={"men"+status} onClick={()=>{
                    setStatus('active')
                }}>active</button>
                <button className={"zxc"+status} onClick={()=>{
                    setStatus('completed')
                }}>completed</button>
                <button className={"ast"+status} onClick={()=>{
                    setStatus('cart')
                }}>cart</button>
            </div>   

            <button>clear completed</button>         
            
        </div>
    );
}

export default Footer;
