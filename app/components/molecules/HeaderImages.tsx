import Image from 'next/image'
import pfp1 from '../../../public/assets/pfp2.jpg';
import pfp2 from '../../../public/assets/pfp1.jpg';

export default function HeaderImages(){
    return(
        <div className='c-headerImages'> 
            <Image
            className='c-headerImages-image'
            alt='professional profile picture of Sander Verhoeven'
            src={pfp1}
            >
            </Image>
            <Image
                className='c-headerImages-image'
                alt='casual profile picture of Sander Verhoeven'
                src={pfp2}
            >
            </Image>
        </div>
        
    ) 
}