import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
interface FooterProps{
    paragraph:string,
    linkName:string,
    linkUrl?:string,
    classname?:string
}
export default function Footer({
    paragraph,
    linkName,
    linkUrl="#",
    classname
}:FooterProps){
    
    return(
        <div className="mb-10">
        
            <p className="mt-2 text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className={classname ? classname : "font-medium text-blue-600 hover:text-blue-500"}>
                {linkName}
            </Link>
            
            </p>
        </div>
    )
}