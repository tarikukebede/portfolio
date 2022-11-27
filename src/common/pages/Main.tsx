import { MainPageProps } from '../Props/CommonProps';


const Main = (props : MainPageProps) => {
    return (
        <div className='container'>
            {props.child}
        </div>
    );
}
 
export default Main;