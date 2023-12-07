import Image from 'next/image'
import pfp1 from '../../../public/assets/pfp2.jpg';
import pfp2 from '../../../public/assets/pfp1.jpg';

export default function HeaderImages(){
    return(
        <div className='c-header-images'> 
            <Image
            className='c-header-images-image'
            alt='professional profiel foto van Sander Verhoeven'
            src={pfp1}
            >
            </Image>
            <Image
                className='c-header-images-image'
                alt='casual profiel foto van Sander Verhoeven'
                src={pfp2}
            >
            </Image>
        </div>
        
    ) 
}